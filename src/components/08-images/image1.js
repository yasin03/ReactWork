import React from "react";
import img1 from "../../assets/img/image1.jpg";

const Image1 = () => {
  return (
    <>
      {/*Görüntü dosyaları public klasörü içinde ise*/}
      <img src="logo512.png" />

      {/*Görüntü dosyaları src klasörü içinde ise*/}
      <img src={img1} />
      <img src={require("../../assets/img/image2.jpg")} />
    </>
  );
};

export default Image1;
