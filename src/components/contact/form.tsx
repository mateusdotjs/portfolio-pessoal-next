"use client";

import Input from "@/components/form/Input";
import Textarea from "../form/Textarea";
import ButtonFilled from "../buttons/ButtonFilled";
import { FormEvent, useState } from "react";
import useField from "../../hooks/useField";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Form() {
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
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      );

      alert(t("Alert.positive"));

      name.setValue("");
      email.setValue("");
      message.setValue("");
    } catch (error) {
      alert(t("Alert.negative"));
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fadeToRight = {
    hidden: { opacity: 0, x: "-90px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.form
      className="mt-8 flex w-full flex-col gap-4 rounded-md border-[1px] border-neutral-700 bg-gradient-to-br 
      from-neutral-800 p-10 shadow-form md:w-auto lg:mt-0"
      initial="hidden"
      whileInView="visible"
      variants={fadeToRight}
      viewport={{ once: true, margin: "-150px" }}
    >
      <Input
        id={"name"}
        type={"text"}
        label={t("Form.Name.label")}
        placeholder={t("Form.Name.placeholder")}
        {...name}
      />
      <Input
        id={"email"}
        type={"email"}
        label={t("Form.Email.label")}
        placeholder={t("Form.Email.placeholder")}
        {...email}
      />
      <Textarea
        id={"message"}
        label={t("Form.Message.label")}
        placeholder={t("Form.Message.placeholder")}
        {...message}
      />
      <ButtonFilled onClick={handleClick}>
        {loading ? t("Form.Button.loading") : t("Form.Button.text")}
      </ButtonFilled>
    </motion.form>
  );
}
