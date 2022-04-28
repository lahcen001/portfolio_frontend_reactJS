import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";
// const abouts = [
//   {
//     title: "Web development",
//     description: "I am a good web developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Web Design",
//     description: "I am a good web developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "UI/UX",
//     description: "I am a good web developer",
//     imgUrl: images.about04,
//   },
//   {
//     title: "Web Animations",
//     description: "I am a good web developer",
//     imgUrl: images.about04,
//   },
// ];
 
function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';

    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good design </span>
        <br />
        means
        <span> Good business</span>
      </h2>
      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInVie={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(About, "about");
