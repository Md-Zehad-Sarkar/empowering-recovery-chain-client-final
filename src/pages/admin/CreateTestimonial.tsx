import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateReviewsMutation } from "@/redux/features/reviews/reviewsApi";
import { useAppSelector } from "@/redux/hooks";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateTestimonial = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAppSelector((state) => state.auth);

  const [createReviews] = useCreateReviewsMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const testimonialData = {
      review: data?.review,
      name: user?.userName,
      email: user?.email,
      image: "",
      // rating: data.rating,
      rating: Number(data?.rating),
      createdAt: new Date().toLocaleDateString(),
      createTime: new Date().toLocaleTimeString(),
      isDeleted: false,
    };

    const res = await createReviews(testimonialData);
    reset();
    if (res?.data?.success) {
      toast("You have successfully add a Review");
    } else {
      toast("Reviews failed to add");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-9/12 mx-auto mt-24 space-y-3"
    >
      <p className="mb-6 text-3xl">Write Your Review</p>
      <Label>Review</Label>
      <Textarea
        {...register("review")}
        placeholder="write your review....."
        className="mt-1"
      />

      <InputField
        type="number"
        name="rating"
        register={register("rating")}
        label="Rating"
        placeholder="give a rating maximum 5"
      />

      <Button
        type="submit"
        variant={"ghost"}
        className="mt-2 text-lg font-medium text-white bg-purple-600 max-w-96 hover:text-white hover:bg-purple-700"
      >
        Post Review
      </Button>
    </form>
  );
};

export default CreateTestimonial;
