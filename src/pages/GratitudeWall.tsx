import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  useAddGratitudeWallMutation,
  useGetAllGratitudeWallQuery,
} from "@/redux/features/donation/donation.api";
import { useAppSelector } from "@/redux/hooks";
import { Loader } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

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

    const res = await addGratitude(gratitudeData);
    reset();

    if (res?.data?.success) {
      toast("you have successfully post");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-9/12 mx-auto">
        <Textarea
          {...register("comment")}
          placeholder="write your comment......"
        />
        <Button type="submit" variant={"ghost"} className="mt-2">
          Comment
        </Button>
      </form>

      <div className="grid w-9/12 gap-4 mx-auto p-3">
        {gratitudes?.data?.map((comment) => (
          <div className="mb-2 bg-slate-50">
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
