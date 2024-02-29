import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { useCreateVolunteerMutation } from "@/redux/features/auth/authApi";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const api_url = "https://api.imgbb.com/1/upload";

const Volunteer = () => {
  const { register, handleSubmit, reset } = useForm();

  const [addVolunteer] = useCreateVolunteerMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //image hosting
    const formData = new FormData();
    formData.append("image", data.image[0]);
    // image hosting and get url
    const response = await axios.post(api_url, formData, {
      params: { key: image_hosting_api },
    });

    // extract image url from response
    const imageUrl = response.data?.data?.display_url;

    const volunteerData = {
      ...data,
      image: imageUrl,
    };

    const res = await addVolunteer(volunteerData);
    if (res?.data?.success) {
      toast("Volunteer sign up successful");
    } else {
      toast("Volunteer sign up failed");
    }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
      <InputField
        type="text"
        register={register("name")}
        name="name"
        label="Name"
      />
      <InputField
        type="email"
        register={register("email")}
        name="email"
        label="Email"
      />
      <InputField
        type="text"
        register={register("contactNo")}
        name="contactNo"
        label="Phone Number"
      />
      <InputField
        type="text"
        register={register("address")}
        name="address"
        label="Address"
      />
      <InputField
        type="file"
        register={register("image")}
        name="image"
        label="Image"
      />
      <InputField
        type="text"
        register={register("time")}
        name="time"
        label="Working Hour"
        placeholder="give your working time maximum 8 hours"
      />
      <Button
        type="submit"
        className="text-lg font-medium text-white bg-purple-600 max-w-96 hover:bg-purple-700"
      >
        Submit
      </Button>
    </form>
  );
};

export default Volunteer;
