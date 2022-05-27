import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsFileEarmarkPdf } from "react-icons/bs";
export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/lahcen001" target="_blank">
          {" "}
          <BsGithub />{" "}
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/lahcen000lh" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/lahcen-el-hanchir" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      {/* <div>
        <a href="https://bit.ly/3F8uzwK" target="_blank">
          <BsFileEarmarkPdf />
        </a>
      </div> */}
    </div>
  );
}
