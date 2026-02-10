'use client';
import Form from "next/form";
import { signUp } from "@/app/actions/signUp";
import { useActionState, useState, useEffect } from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

const initialState = {
  success: false,
  message: "",
  errors: { name: "", lastName: "", username: "", email: "", password: "" },
  inputs: { name: "", lastName: "", username: "", email: ""},
  timestamp: 0,
};

export default function SignUp() {
  const [state, action, isPending] = useActionState(signUp, initialState);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.message) {
      setShowMessage(true);
      return;
    }
  }, [state.message, state.timestamp]);

  return (
    <div className="bg-background-secondary size-1/2 rounded-sm">
      <Form action={action} className="flex flex-col gap-4 items-center mt-12">
        <div className=" flex flex-row gap-2">
          <div className="flex flex-col ">
            <label
              className={cn(
                "font-barlow text-xs",
                state.errors?.name ? "text-red-500" : ""
              )}
              htmlFor="name"
            >
              {state.errors?.name ? state.errors.name : "Name"}
            </label>
            <input
              defaultValue={state.inputs?.name}
              type="text"
              className="bg-foreground text-background"
              id="name"
              name="name"
            />
          </div>
          <div className="flex flex-col ">
            <label
              className={cn(
                "font-barlow text-xs",
                state.errors?.lastName ? "text-red-500" : ""
              )}
              htmlFor="lastName"
            >
              {state.errors?.lastName
                ? state.errors.lastName
                : "Last Name"}
            </label>
            <input
              defaultValue={state.inputs?.lastName}
              type="text"
              className="bg-foreground text-background"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label
            className={cn(
              "font-barlow text-xs",
              state.errors?.username ? "text-red-500" : ""
            )}
            htmlFor="username"
          >
            {state.errors?.username ? state.errors.username : "User Name"}
          </label>
          <input
            defaultValue={state.inputs?.username}
            type="text"
            className="bg-foreground text-background"
            id="username"
            name="username"
          />
        </div>
        <div className="flex flex-col ">
          <label
            className={cn(
              "font-barlow text-xs",
              state.errors?.email ? "text-red-500" : ""
            )}
            htmlFor="email"
          >
            {state.errors?.email ? state.errors.email : "Email"}
          </label>
          <input
            defaultValue={state.inputs?.email}
            type="email"
            className="bg-foreground text-background"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col ">
          <label
            className={cn(
              "font-barlow text-xs",
              state.errors?.password ? "text-red-500" : ""
            )}
            htmlFor="password"
          >
            {state.errors?.password ? state.errors.password : "Password"}
          </label>
          <input
            type="password"
            className="bg-foreground text-background"
            id="password"
            name="password"
          />
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="bg-foreground/50 text-background px-4 py-2 rounded-sm"
        >
          {" "}
          {isPending ? "Sending data..." : "Sign Up"}
        </button>
        {showMessage && (
          <div id="errorCart" className={`text-red-500 text-sm}`}>
            {state.message}
          </div>
        )}
      <Link href="/login" className="text-sm text-blue-500 hover:underline mt-4">
        Already have an account? Log in
      </Link>
      </Form>
    </div>
  );
}
