import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsFileEarmarkPdf } from "react-icons/bs";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi, I'm</p>
              <h1 className="head-text">Lahcen</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Full Stack Web developer</p>
            <p className="p-text"> Freelancer</p>
          </div>

          <button
            className="tag-cmp app__flex border"
            onClick={() =>
              window.open("https://resume.lahcen.click", "_blank")
            }
          >
            <BsFileEarmarkPdf /> My resume / CV
          </button>
        </div>
      </motion.div>

      {/* motion 2 */}

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.avatar} alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          alt="profile_circle"
          src={images.circle}
        />
      </motion.div>

      {/* motion 2 */}

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.wordpress].map((images, index) => {
          return (
            <div className="circle-cmp app__flex " key={`${index}`}>
              <img src={images} alt="circle" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home");
