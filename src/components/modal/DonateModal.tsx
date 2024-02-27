import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputField from "../form/InputField";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { Textarea } from "../ui/textarea";
import { donation } from "@/redux/features/supplies/suppliesSlice";
import { Label } from "../ui/label";

const DonateModal = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => {
    const donateData = {
      title: data.title,
      category: data.category,
      amount: data.amount,
      description: data.description,
    };

    dispatch(donation(donateData));
    reset();
    navigate("/dashboard");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Donate now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          
          <Label>Description</Label>
          <Textarea {...register("description")} />

          <DialogClose>
            <Button type="submit" className="mt-4" variant="secondary">
              Donate
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;
