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
    client.fetch(query).then((data) => {
      setFilterWork(data);
      setWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(work);
      } else {
        setFilterWork(work.filter((work) => work.tags[0] == item));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        {" "}
        I know that <span>Good Apps </span>means <span>Good Design</span>
        <br />
      </h2>
      <div className="app__work-filter">

        {["HTML/CSS", "Next JS", "React JS","Angular","WordPress", "All"].map((item, index) => (

          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={` app__work-filter-item app__flex ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterdWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                translate={{
                  duration: 0.25,
                  ease: "easeInOut",
                  straggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ opacity: [1, 0.9] }}
                    translate={{
                      duration: 0.25,
                      ease: "easeInOut",
                      straggerChildren: 0.5,
                    }}
                    className=" app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ opacity: [1, 0.9] }}
                    translate={{
                      duration: 0.25,
                      ease: "easeInOut",
                      straggerChildren: 0.5,
                    }}
                    className=" app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(Work, "work");
