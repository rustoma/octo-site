import React from "react";

import { Container } from "@/components/container/Container";
import { Breadcrumbs } from "@/features/breadcrumbs/components/Breadcrumbs";

import "./simpleBanner.style.scss";

interface SimpleBannerProps {
  title: string;
}

export const SimpleBanner = ({ title }: SimpleBannerProps) => {
  return (
    <div className="simple-banner">
      <Container>
        <Breadcrumbs />
        <h1 className="simple-banner__title">{title}</h1>
      </Container>
    </div>
  );
};
