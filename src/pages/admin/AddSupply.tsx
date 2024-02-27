import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddSupplyMutation } from "@/redux/features/supplies/suppliesApi";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API;
const api_url = "https://api.imgbb.com/1/upload";

const AddSupply = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const [createSupply] = useAddSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    //image hosting
    const formData = new FormData();
    formData.append("image", data.image[0]);
    // image hosting and get url
    const response = await axios.post(api_url, formData, {
      params: { key: image_hosting_api },
    });

    // extract image url from response
    const imageUrl = response.data?.data?.display_url;

    const suppliesData = {
      title: data.title,
      category: data.category,
      amount: data.amount,
      image: imageUrl,
      description: data.description,
    };

    createSupply(suppliesData);
    reset();
    navigate("/dashboard/supplies");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 py-6 mx-auto mt-24 max-w-96"
    >
      <InputField
        type="text"
        label="Title"
        name="title"
        register={register("title")}
        placeholder="write a title"
      />

      <InputField
        type="text"
        label="Category"
        name="category"
        register={register("category")}
        placeholder="write a category"
      />

      <InputField
        type="number"
        label="Amount"
        name="amount"
        register={register("amount")}
        placeholder="give an amount"
      />

      <InputField
        type="file"
        label="Image"
        name="image"
        register={register("image")}
        placeholder="upload a image"
      />
      <Label className="mb-2">Description</Label>
      <Textarea
        {...register("description")}
        placeholder="write a description"
      />
      <Button type="submit" variant={"secondary"} className="mt-4 end">
        Add Supply
      </Button>
    </form>
  );
};

export default AddSupply;
