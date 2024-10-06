import React from "react";
import { notFound } from "next/navigation";

import { ContactPage } from "@/features/pages/contact/ContactPage";
import { getBasicPageBySlug } from "@/services/basicPage/basicPage.service";
import { getDomainId } from "@/utils";

export const metadata = {
  metadataBase: new URL(process.env.FRONTEND_HOST ?? ""),
  title: `Kontakt | ${new Date().getFullYear()} - ${process.env.DOMAIN_NAME}`,
  description: undefined,
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    images: `/img/jpg/social-${getDomainId()}.jpg`,
  },
};

const Contact = async () => {
  const page = await getBasicPageBySlug("kontakt");

  if (!page) {
    return notFound();
  }

  return <ContactPage page={page} />;
};

export default Contact;
