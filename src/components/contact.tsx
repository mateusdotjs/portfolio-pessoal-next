"use client";
import { FormEvent, RefObject, useState } from "react";
import useField from "@/hooks/useField";
import ButtonFilled from "./buttons/ButtonFilled";
import Textarea from "./form/Textarea";
import Input from "./form/Input";
import Email from "@/assets/email.svg";
import Phone from "@/assets/phone.svg";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

export default function Contact({
  refer,
}: {
  refer: RefObject<HTMLDivElement>;
}) {
  const name = useField("");
  const email = useField("email");
  const message = useField("");
  const [loading, setLoading] = useState(false);
  const t = useTranslations("Contact");

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!name.value || !email.value || !message.value) return;
    if (name.error || email.error || message.error) return;

    const templateParams = {
      from_name: name.value,
      email: email.value,
      message: message.value,
    };

    setLoading(true);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      );

      console.log(response);
      alert("Email successfully sent. Thanks!");

      name.setValue("");
      email.setValue("");
      message.setValue("");
    } catch (error) {
      alert("Failed to send email. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={refer}
      className="flex flex-col items-center bg-neutral-950 px-4 py-24"
    >
      <div
        className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 
      justify-items-center  lg:grid-cols-2"
      >
        <form
          className="mt-8 flex w-full flex-col gap-4 rounded-md border-[1px] border-neutral-700 bg-gradient-to-br 
        from-neutral-800 p-10 shadow-form md:w-auto lg:mt-0"
        >
          <Input id={"name"} type={"text"} label={"Name"} {...name} />
          <Input id={"email"} type={"email"} label={"E-mail"} {...email} />
          <Textarea id={"message"} label={"Message"} {...message} />
          <ButtonFilled onClick={handleClick}>
            {loading ? "Loading..." : "Send message"}
          </ButtonFilled>
        </form>
        <div className="row-start-1 lg:col-start-2">
          <h2 className="text-center text-4xl font-medium text-white md:text-5xl lg:text-left">
            {t.rich("title", {
              decorated: (chunk) => (
                <span className="bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  {chunk}
                </span>
              ),
            })}
            <span className="text-purple-500">.</span>
          </h2>
          <span className="mb-5 mt-5 hidden text-xl text-neutral-400 lg:block">
            {t("description")}
          </span>
          <ul className="mt-6 text-white">
            <li className="mb-2 flex items-center gap-2">
              <Email /> mateus.silvainfo@gmail.com
            </li>
            <li className="mb-2 flex items-center gap-2">
              <Phone /> +55 11 95492-5932
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
