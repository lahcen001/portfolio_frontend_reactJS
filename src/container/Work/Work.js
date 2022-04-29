import React from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";

function Work() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });
  const [work, setWork] = React.useState([]);
  const [filterdWork, setFilterWork] = React.useState([]);
  React.useEffect(() => {
    const query = `*[_type=="works"]`;
    client.fetch(query).then((data) => {});
  }, []);

  const handleWorkFilter = (item) => {
    console.log(item);
  };
  return (
    <>
      <h2 className="head-text">
        {" "}
        I know that <span>Good Apps</span>means <span>Good Design</span>
        <br />
      </h2>
      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={` app__work-filter-item app__flex ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      ></motion.div>
    </>
  );
}

export default Work;
