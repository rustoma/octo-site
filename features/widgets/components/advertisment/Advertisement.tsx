import React from "react";
import Image from "next/image";

import "./advertisement.style.scss";

export const Advertisement = () => {
  return (
    <div className="advertisement">
      <Image src="/img/jpg/advertisement-vertical.jpg" alt="reklama" width={390} height={780} />
    </div>
  );
};
