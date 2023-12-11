import React from "react";
import Image from "next/image";

import { Container } from "@/components/container/Container";
import { Footer } from "@/components/layout/footer/Footer";
import { HeaderAlternate } from "@/components/layout/header/HeaderAlternate";

import "./not-found.style.scss";

const NotFoundPage = () => (
  <>
    <HeaderAlternate />
    <main className="not-found-page">
      <div className="not-found-page__content">
        <Container>
          <div className="not-found-page__content-inner">
            <div className="not-found-page__image">
              <Image src="/img/png/404-number.png" alt="liczba 404" width={320} height={130} />
            </div>
            <h1>Strona nie odnaleziona</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, recusandae consectetur nesciunt magnam
              facilis aliquid amet earum alias?
            </p>
          </div>
        </Container>
      </div>

      <Image
        src="/img/jpg/404.jpeg"
        alt="Strona nie odnaleziona"
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
    </main>
    <Footer />
  </>
);

export default NotFoundPage;
