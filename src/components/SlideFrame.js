import { useEffect, useRef, useState } from "react";
import ImgFrame from "./ImgFrame";

export default function SlideFrame({ children, slideList = [] }) {
  const [index, setIndex] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const slides = ref.current.querySelectorAll(".slide");

    const sliding = setInterval(() => {
      if (index + 1 < slides.length) {
        slides[index].classList.remove("opacity-100");
        slides[index].classList.add("opacity-0");
        slides[index + 1].classList.remove("opacity-0");
        slides[index + 1].classList.add("opacity-100");
        setIndex((prev) => prev + 1);
      } else {
        slides[index].classList.remove("opacity-100");
        slides[index].classList.add("opacity-0");
        slides[0].classList.remove("opacity-0");
        slides[0].classList.add("opacity-100");
        setIndex(0);
      }
    }, 2000);
    return () => clearInterval(sliding);
  });

  return (
    <div className="relative w-full h-full" ref={ref}>
      {slideList.map((src, i) => {
        if (i > 0) {
          return (
            <div
              key={i}
              className="absolute w-full h-full transition-opacity duration-[1000ms] opacity-0 slide"
            >
              <ImgFrame small={src.small} big={src.big}></ImgFrame>
            </div>
          );
        } else {
          return (
            <div
              key={i}
              className="absolute w-full h-full transition-opacity duration-[1000ms] opacity-100 slide"
            >
              <ImgFrame small={src.small} big={src.big}></ImgFrame>
            </div>
          );
        }
      })}
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 flex items-end w-full h-full p-4">
        {children}
      </div>
    </div>
  );
}
