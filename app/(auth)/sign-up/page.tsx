import Form from "next/form";
import { signUp } from "@/app/actions/signUp";

export default function SignUp() {
  return (
    <div className="bg-background-secondary size-1/3 rounded-sm">
      <Form action={signUp} className="flex flex-col gap-4 items-center">
        <div className=" flex flex-row gap-2">
          <label className="font-barlow text-xs" htmlFor="name">Name</label>
          <input type="text" className="bg-foreground text-background" id="name" name="name"/>
          <label className="font-barlow text-xs" htmlFor="lastName">Last Name</label>
          <input type="text" className="bg-foreground text-background" id="lastName" name="lastName"/>
        </div>
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