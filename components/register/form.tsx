import Input from "../ui/input";
import SubmitButton from "../ui/submit-button";
import { register } from "@/app/lib/actions/register";
import Link from "next/link";

export default async function RegisterForm() {
  return (
    <form className="flex flex-col p-5 gap-5 bg-white shadow-lg w-96">
      <h1 className="text-center text-2xl mt-2 mb-3 text-gray-800">Register</h1>
      <Input label="Full name" name="full_name" type="text"></Input>
      <Input label="Email" name="email" type="email"></Input>
      <Input label="Password" name="password" type="password"></Input>
      <SubmitButton text="Sign up" action={register}></SubmitButton>
      <p className="text-gray-400 my-5 text-center text-sm">
        Already have an account?{" "}
        <Link href={"/login"} className="text-gray-600">
          Sign in
        </Link>
      </p>
    </form>
  );
}
