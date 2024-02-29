import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utls/utls";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [loginUser] = useLoginUserMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const result = await loginUser(userInfo).unwrap();

      const user = verifyToken(result?.token);

      const token = result?.token;

      dispatch(setUser({ user, token }));
      navigate(from, { replace: true });
    } catch (error) {
      // console.log(error, "error");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-24 mx-auto max-w-96">
      <InputField
        type="text"
        label="Email"
        register={register("email")}
        name="email"
        placeholder="type your email"
      />

      <InputField
        type="password"
        label="Password"
        register={register("password")}
        name="password"
        placeholder="type your password"
      />

      <p>
        Don't have an account? please
        <Link to="/register" className="ml-2 text-red-500 underline">
          create one
        </Link>
      </p>
      <Button
        type="submit"
        variant="secondary"
        className="mt-4 text-lg font-medium text-white bg-purple-600  w-28 max-w-96 hover:bg-purple-700"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
