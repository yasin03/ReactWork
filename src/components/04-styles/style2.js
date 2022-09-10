import React from "react";

const Style2 = () => {
  const styleTitle = {
    fontSize: "2rem",
    backgroundColor: "yellow",
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <>
      <h2 style={styleTitle}>React Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sunt
        fugit iusto ipsa assumenda recusandae, ipsam quo? Accusantium quasi
        quidem, tempora, illum blanditiis non cumque quibusdam praesentium ab
        dolores iure!
      </p>
      <h2 style={{ ...styleTitle, color: "red" }}>React Hooks</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sunt
        fugit iusto ipsa assumenda recusandae, ipsam quo? Accusantium quasi
        quidem, tempora, illum blanditiis non cumque quibusdam praesentium ab
        dolores iure!
      </p>
    </>
  );
};

export default Style2;
