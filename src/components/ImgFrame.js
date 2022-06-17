// src\components\ImgFrame.js
import React from "react";
import useImgBlurUp from "../hooks/useImgBlurUp";

export default function ImgFrame({ small, big, alt = "" }) {
  const [src, blur] = useImgBlurUp(small, big);
  return (
    <img
      alt={alt}
      src={src}
      className={`w-full h-full ${
        blur ? "blur-lg" : "blur-none"
      } transition-[filter] duration-200`}
    ></img>
  );
}
