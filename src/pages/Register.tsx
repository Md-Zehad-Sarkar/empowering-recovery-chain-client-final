import InputField from "@/components/form/InputField";
import {
  UserValidationSchema,
  userRegistrationSchema,
} from "@/components/form/RegisterFormValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useCreateUserMutation } from "@/redux/features/auth/authApi";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserValidationSchema>({
    resolver: zodResolver(userRegistrationSchema),
  });

  const navigate = useNavigate();

  const [createUser] = useCreateUserMutation();

  const onSubmit = (data: FieldValues) => {
    const createUserInfo = {
      name: data.userName,
      email: data.email,
      password: data.password,
    };
    createUser(createUserInfo);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-24 mx-auto max-w-96">
      <InputField
        type="text"
        label="User Name"
        name="userName"
        register={register("userName")}
        placeholder="type your name"
      />
      {errors.userName && (
        <span className="mb-3 text-lg text-red-500">
          {errors.userName.message}
        </span>
      )}
      <InputField
        type="email"
        label="Email"
        name="email"
        register={register("email")}
        placeholder="type your email"
      />
      {errors.email && (
        <span className="mb-3 text-lg text-red-500">
          {errors.email.message}
        </span>
      )}
      <InputField
        type="password"
        label="Password"
        name="password"
        register={register("password")}
        placeholder="type your password"
      />
      {errors.password && (
        <span className="mb-3 text-lg text-red-500">
          {errors.password.message}
        </span>
      )}

      <p>
        Already have an account? please
        <Link to="/login" className="ml-2 text-red-500 underline">
          login
        </Link>
      </p>
      <Button type="submit" variant="secondary" className="mt-4 w-28">
        Register
      </Button>
    </form>
  );
};

export default Register;
