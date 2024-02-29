import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  useAddGratitudeWallMutation,
  useGetAllGratitudeWallQuery,
} from "@/redux/features/donation/donation.api";
import { useAppSelector } from "@/redux/hooks";
import { Loader } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type TComment = {
  _id?: string;
  userName?: string;
  comment?: string;
  createTime?: string;
};

const GratitudeWall = () => {
  const { register, handleSubmit, reset } = useForm();

  const { user } = useAppSelector((state) => state.auth);

  const { data: gratitudes, isLoading } = useGetAllGratitudeWallQuery("");

  const [addGratitude] = useAddGratitudeWallMutation();

  if (isLoading) {
    return <Loader className="w-24 mx-auto" />;
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const gratitudeData = {
      ...data,
      userName: "username",
      email: user?.email,
      createdAt: new Date().toLocaleDateString(),
      createTime: new Date().toLocaleTimeString(),
      isDeleted: false,
    };

    await addGratitude(gratitudeData);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-9/12 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">
          Write a gratitude wall And motivate our Donors
        </h2>
        <Textarea
          {...register("comment")}
          placeholder="write your comment......"
        />
        <Button
          type="submit"
          variant={"ghost"}
          className="mt-2 text-lg font-medium text-white bg-purple-600 max-w-96 hover:bg-purple-700 hover:text-white"
        >
          Comment
        </Button>
      </form>

      <div className="grid w-9/12 gap-4 mx-auto mt-12">
        {gratitudes?.data?.map((comment: TComment) => (
          <div
            className="p-2 mb-2 text-black shadow-md bg-purple-50"
            key={comment._id}
          >
            <h2 className="text-xl font-medium">{comment?.userName}</h2>
            <p>{comment?.comment}</p>
            <div>
              <p className="mt-2 font-medium">{comment?.createTime}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GratitudeWall;
