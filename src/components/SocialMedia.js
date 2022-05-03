import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsFileEarmarkPdf } from "react-icons/bs";
export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsFileEarmarkPdf />
      </div>
    </div>
  );
}
