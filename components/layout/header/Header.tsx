import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container/Container";
import { Logo } from "@/components/icons/Logo";
import { TopNav } from "@/features/nav/topNav/TopNav";

import "./header.style.scss";

export const Header = () => {
  const renderDate = () => {
    const date = new Date();
    return `${date.getDate()} ${date.toLocaleString("pl-Pl", { month: "long" })} ${date.getFullYear()}`;
  };

  return (
    <header className="header">
      <div className="header-top">
        <Container>
          <div className="header-top__wrapper">
            <span className="header-top__date">{renderDate()}</span>
            <ul className="header-top__menu list-style">
              <li className="header-top__menu-item">
                <Link href="/o-nas">O nas</Link>
              </li>
              <li className="header-top__menu-item">
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="header-middle">
        <Container>
          <div className="header-middle__wrapper">
            <Link href="/">
              <Logo />
            </Link>
            <Image src="/img/jpg/advertisement.jpg" alt="reklama" width={728} height={92} />
          </div>
        </Container>
      </div>
      <Container>
        <TopNav
          menuTree={[
            {
              id: "Home",
              title: "Home",
              href: "/",
              items: [],
            },
            {
              id: "o-nas",
              title: "O nas",
              href: "/o-nas",
              items: [],
            },
            {
              id: "kontakt",
              title: "Kontakt",
              href: "/kontakt",
              items: [],
            },
            // {
            //   id: "Pages",
            //   title: "Pages",
            //   items: [
            //     {
            //       id: "Page 1",
            //       title: "Page 1",
            //       href: "/page-1",
            //       items: [],
            //     },
            //     {
            //       id: "Page 2",
            //       title: "Page 2",
            //       href: "/page-2",
            //       items: [
            //         {
            //           id: "Page 1-1",
            //           title: "Page 1",
            //           href: "/page-1-1",
            //           items: [],
            //         },
            //         {
            //           id: "Page 2-2",
            //           title: "Page 1",
            //           href: "/page-2-2",
            //           items: [],
            //         },
            //       ],
            //     },
            //   ],
            // },
          ]}
        />
      </Container>
    </header>
  );
};
