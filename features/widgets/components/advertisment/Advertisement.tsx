import React from "react";
import Image from "next/image";

import "./advertisement.style.scss";

export const Advertisement = () => {
  return (
    <div className="advertisement-widget">
      <div className="advertisement-widget__content">
        <Image src="/img/jpg/advertisement-vertical-2.jpg" alt="reklama" width={390} height={780} />
      </div>
    </div>
  );
};
