import Form from "next/form";
import { logIn } from "@/app/data/logIn";

export default function LogIn() {
  return (
    <div className="bg-background-secondary size-1/2 rounded-sm">
      <Form action={logIn} className="flex flex-col gap-4 items-center mt-12">
        <div className="flex flex-col ">
          <label className="font-barlow text-xs" htmlFor="email">Email</label>
          <input type="email" className="bg-foreground text-background" id="email" name="email"/>
        </div>
        <div className="flex flex-col ">
          <label className="font-barlow text-xs" htmlFor="password">Password</label>
          <input type="password" className="bg-foreground text-background" id="password" name="password"/>
        </div>
        <button type="submit" className="bg-foreground/50 text-background px-4 py-2 rounded-sm"> Sign Up</button>
      </Form>
    </div>
  );
}