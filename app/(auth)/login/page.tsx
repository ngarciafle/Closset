'use client';
import Form from "next/form";
import { logIn } from "@/app/data/logIn";
import { useActionState, useState, useEffect } from "react";
import { cn } from "@/app/lib/utils";

const initialState = {
  success: false,
  message: "",
  errors: {},
  inputs: { email: "", password: "" },
  timestamp: 0,
};

export default function LogIn() {
  const [state, action, isPending] = useActionState(logIn, initialState);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state?.message) {
      setShowMessage(true);
      return;
    }
  }, [state?.message, state?.timestamp]);

  return (
    <div className="bg-background-secondary size-1/2 rounded-sm">
      <Form action={action} className="flex flex-col gap-4 items-center mt-12">
        <div className="flex flex-col ">
          <label
            defaultValue={state?.inputs?.email}
            className={cn(
              "font-barlow text-xs",
              state?.errors?.email ? "text-red-500" : ""
            )}
            htmlFor="email"
          >
            {state?.errors?.email ? "Email format is invalid" : "Email"}
          </label>
          <input
            type="email"
            className="bg-foreground text-background"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col ">
          <label
            defaultValue={state?.inputs?.password}
            className={cn(
              "font-barlow text-xs",
              state?.errors?.password ? "text-red-500" : ""
            )}
            htmlFor="password"
          >
            {state?.errors?.password
              ? "Password format is invalid"
              : "Password"}
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
          {isPending ? "Logging In..." : "Log In"}
        </button>
        {showMessage && (
          <div id="errorCart" className={`text-red-500 text-sm}`}>
            {JSON.stringify(state?.message)}
          </div>
        )}
      </Form>
    </div>
  );
}
