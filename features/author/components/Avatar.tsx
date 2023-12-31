import React from "react";

interface AvatarProps {
  imageUrl: string;
}

import Image from "next/image";

import "./avatar.style.scss";

export const Avatar = ({ imageUrl }: AvatarProps) => {
  return (
    <div className="avatar">
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_HOST + imageUrl}
        alt="avatar"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="50px"
      />
    </div>
  );
};
