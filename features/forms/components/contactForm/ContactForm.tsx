"use client";

import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { z } from "zod";

import { Button } from "@/components/button/Button";
import { DictionaryContextType, useDictionary } from "@/context/DictionaryContext";
import { Checkbox } from "@/features/forms/components/checkbox/Checkbox";
import { Input } from "@/features/forms/components/input/Input";
import { TextArea } from "@/features/forms/components/textArea/TextArea";
import { VALIDATORS } from "@/features/forms/utils/validators";
import { sendEmail } from "@/services/email/email.service";

import "./contactForm.style.scss";

const getContactFormSchema = ({ t }: DictionaryContextType) =>
  z.object({
    name: VALIDATORS.required(t.contact.fieldIsRequired),
    phone: VALIDATORS.phoneNumber(t.contact.correctPhoneNumber),
    email: VALIDATORS.required(t.contact.fieldIsRequired).email(t.contact.correctEmail),
    message: VALIDATORS.required(t.contact.fieldIsRequired),
    consent: z.boolean().refine((value) => value, {
      message: t.contact.correctConsent,
    }),
    sf: z.string().optional(),
  });

type ContactFormData = z.infer<ReturnType<typeof getContactFormSchema>>;

interface ContactFormProps {
  policyPrivacyLink: string;
  cookiePrivacyLink: string;
}

export const ContactForm = ({ policyPrivacyLink, cookiePrivacyLink }: ContactFormProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { t } = useDictionary();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(getContactFormSchema({ t })),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      consent: false,
      sf: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      setIsSuccess(undefined);
      setIsError(false);

      if (!executeRecaptcha) {
        console.log("Recaptcha not available yet");
        setIsError(true);
        return;
      }

      const gRecaptchaToken = await executeRecaptcha("contactForm");

      await sendEmail({
        subject: `Wiadomość ze strony ${window.location.hostname} z podstrony kontakt`,
        body: { ...data, gRecaptchaToken },
      });

      setIsSuccess(true);

      reset();
    } catch (error) {
      console.log({ error });
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <div className="contact-form__content">
        <h4 className="contact-form__content-heading">{t.contact.title}</h4>
        <p className="contact-form__content-body">{t.contact.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form__input-group">
          <Input
            {...register("name")}
            label={t.contact.name}
            error={!!errors.name?.message}
            hint={errors.name?.message?.toString()}
            fit
          />

          <Input
            {...register("phone")}
            label={t.contact.phone}
            error={!!errors.phone?.message}
            hint={errors.phone?.message?.toString()}
            fit
          />

          <Input
            {...register("email")}
            label={t.contact.email}
            error={!!errors.email?.message}
            hint={errors.email?.message?.toString()}
            fit
          />

          <Input {...register("sf")} label="" hidden />

          <div className="contact-form__input-group-item--fit">
            <TextArea
              value={watch("message")}
              {...register("message")}
              label={t.contact.message}
              error={!!errors.message?.message}
              hint={errors.message?.message?.toString()}
              fit
              rows={5}
            />
          </div>

          <div className="contact-form__input-group-item--fit">
            <Checkbox
              {...register("consent")}
              label={
                <span>
                  {t.contact.accept} <Link href={policyPrivacyLink}>{t.contact.privacyPolicy}</Link> {t.contact.and}{" "}
                  <Link href={cookiePrivacyLink}>{t.contact.cookiesPolicy}</Link>. {t.contact.dataProcessText}
                </span>
              }
              checked={watch("consent")}
              error={!!errors.consent?.message}
              hint={errors.consent?.message?.toString()}
            />
          </div>

          <div className="contact-form__actions">
            <Button type="submit" loading={isLoading} disabled={isLoading}>
              {t.contact.send}
            </Button>
          </div>

          <div className="contact-form__info">
            {isError && (
              <p className="contact-form__info-message contact-form__info-message--error">{t.contact.error}</p>
            )}
            {isSuccess && (
              <p className="contact-form__info-message contact-form__info-message--success">{t.contact.success}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
