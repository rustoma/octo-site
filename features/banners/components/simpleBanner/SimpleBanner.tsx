import React from "react";

import { Container } from "@/components/container/Container";
import { Breadcrumbs } from "@/features/breadcrumbs/components/Breadcrumbs";

import "./simpleBanner.style.scss";

export const SimpleBanner = () => {
  return (
    <div className="simple-banner">
      <Container>
        <Breadcrumbs />
        <h1 className="simple-banner__title">Hello</h1>
      </Container>
    </div>
  );
};
