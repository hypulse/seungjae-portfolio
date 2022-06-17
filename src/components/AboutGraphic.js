import { useEffect, useState } from "react";
import BgFrame from "./BgFrame";
import small from "../1-sm.jpg";
import big from "../1.jpg";

export default function AboutGraphic({ aboutRef }) {
  const textList = ["", ""];
  const [text, setText] = useState("");

  useEffect(() => {
    const typing = setInterval(() => {}, 200);
    return () => clearInterval(typing);
  });

  return (
    <BgFrame small={small} big={big}>
      <div className="px-4 py-16 space-y-8 text-white">
        <div className="space-y-3">
          <div className="text-7xl">{text}</div>
          <div className="text-3xl">만나서 반갑습니다!</div>
        </div>
        <div className="flex space-x-3">
          <button
            className="px-6 py-3 rounded-full bg-realblue"
            onClick={() => {
              aboutRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            정체 확인하기
          </button>
          <button className="px-6 py-3 border rounded-full">더 알아보기</button>
        </div>
      </div>
    </BgFrame>
  );
}
