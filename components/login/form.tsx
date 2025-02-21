import Input from "../ui/input";
import { login } from "@/app/lib/actions/login";
import SubmitButton from "../ui/submit-button";
import Link from "next/link";

export default async function LoginForm() {
  return (
    <form className="flex flex-col p-5 gap-5 bg-white shadow-lg w-96">
      <h1 className="text-center text-2xl mt-2 mb-3 text-gray-800">Login</h1>
      <Input label="Email" name="email" type="text"></Input>
      <Input label="Password" name="password" type="password"></Input>
      <SubmitButton text="Sign in" action={login}></SubmitButton>
      <p className="text-gray-400 my-5 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href={"/register"} className="text-gray-600">
          Sign up
        </Link>
      </p>
    </form>
  );
}
