import Form from "next/form";
import { signUp } from "@/app/actions/signUp";

export default function SignUp() {
  return (
    <div className="bg-background-secondary size-1/2 rounded-sm">
      <Form action={signUp} className="flex flex-col gap-4 items-center mt-12">
        <div className=" flex flex-row gap-2">
          <div className="flex flex-col ">
            <label className="font-barlow text-xs" htmlFor="name">Name</label>
            <input type="text" className="bg-foreground text-background" id="name" name="name"/>
          </div>
          <div className="flex flex-col ">
            <label className="font-barlow text-xs" htmlFor="lastName">Last Name</label>
            <input type="text" className="bg-foreground text-background" id="lastName" name="lastName"/>
          </div>
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