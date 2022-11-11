import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "work", "skill", "footer"].map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          key={index}
          className="app__navigation-dot"
        ></a>
      ))}
    </div>
  );
};

export default NavigationDots;
