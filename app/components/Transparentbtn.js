import Link from "next/link";
import React from "react";

export default function Transparentbtn({ TbtnText, href }) {
  return (
    <Link href={href && href}>
      <button className="TransparentBtn">
        <p className="TransparentBtnText Libre Caslon uppercase">{TbtnText}</p>
      </button>
    </Link>
  );
}
