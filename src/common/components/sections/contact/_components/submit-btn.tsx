import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { Button } from "@/common/components/ui";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-lightBlue px-7 py-3 text-[0.9rem] font-medium text-white outline-none transition-all hover:scale-105 hover:bg-blue-600 focus:scale-105 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-darkBlue dark:bg-opacity-10 dark:hover:bg-darkBlue dark:hover:text-white"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1" />{" "}
        </>
      )}
    </Button>
  );
}
