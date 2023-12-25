"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { z } from "zod";

import { Button } from "@/components/button/Button";
import { Checkbox } from "@/features/forms/components/checkbox/Checkbox";
import { Input } from "@/features/forms/components/input/Input";
import { TextArea } from "@/features/forms/components/textArea/TextArea";
import { VALIDATORS } from "@/features/forms/utils/validators";

import "./contactForm.style.scss";

const contactFormSchema = z.object({
  name: VALIDATORS.required("Pole jest wymagane"),
  phone: VALIDATORS.phoneNumber("Podaj poprawny numer telefonu"),
  email: VALIDATORS.required("Pole jest wymagane").email("Podaj poprawny email"),
  message: VALIDATORS.required("Pole jest wymagane"),
  consent: z.boolean().refine((value) => value, {
    message: "Akceptacja regulaminu jest wymagana",
  }),
  sf: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
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
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      setIsSuccess(undefined);
      setIsError(false);

      // await editProductCategory(apiClient)({ ...category, ...data });

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
        <h4 className="contact-form__content-heading">Skontaktuj się z nami</h4>
        <p className="contact-form__content-body">
          Masz pytania? Chciałbyś nawiązać współpracę? Zostaw wiadmość, a odezwiemy się najszybciej jak to możliwe.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form__input-group">
          <Input
            {...register("name")}
            label="Imię*"
            error={!!errors.name?.message}
            hint={errors.name?.message?.toString()}
            fit
          />

          <Input
            {...register("phone")}
            label="Telefon"
            error={!!errors.phone?.message}
            hint={errors.phone?.message?.toString()}
            fit
          />

          <Input
            {...register("email")}
            label="Email*"
            error={!!errors.email?.message}
            hint={errors.email?.message?.toString()}
            fit
          />

          <Input {...register("sf")} label="" hidden />

          <div className="contact-form__input-group-item--fit">
            <TextArea
              value={watch("message")}
              {...register("message")}
              label="Wiadomość*"
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
                  Akceptuję <Link href="/regulamin">regulamin</Link>. Dane z formularza zostaną przetworzone w celu
                  udzielenia odpowiedzi.
                </span>
              }
              checked={watch("consent")}
              error={!!errors.consent?.message}
              hint={errors.consent?.message?.toString()}
            />
          </div>

          <div className="contact-form__actions">
            <Button type="submit" loading={isLoading} disabled={isLoading}>
              Wyślij
            </Button>
            {isLoading && <div>Loading...</div>}
          </div>

          <div className="contact-form__info">
            {isError && (
              <p className="contact-form__info-message contact-form__info-message--error">
                Ops, wysyłanie wiadomości się nie powiodło.
              </p>
            )}
            {isSuccess && (
              <p className="contact-form__info-message contact-form__info-message--success">
                Twoja wiadomość została wysłana.
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
