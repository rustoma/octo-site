import React from "react";
import Image from "next/image";

import { Container } from "@/components/container/Container";
import { Footer } from "@/components/layout/footer/Footer";
import { HeaderAlternate } from "@/components/layout/header/HeaderAlternate";
import { getDictionary } from "@/dictionaries/dictionaries";

import "./not-found.style.scss";

const NotFoundPage = async () => {
  const t = await getDictionary();

  return (
    <>
      <HeaderAlternate />
      <main className="not-found-page">
        <div className="not-found-page__content">
          <Container>
            <div className="not-found-page__content-inner">
              <div className="not-found-page__image">
                <Image src="/img/png/404-number.png" alt="404" width={320} height={130} />
              </div>
              <h1>{t.notFound.title}</h1>
              <p>{t.notFound.description}</p>
            </div>
          </Container>
        </div>

        <Image
          src="/img/jpg/404.jpeg"
          alt={t.notFound.title}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
