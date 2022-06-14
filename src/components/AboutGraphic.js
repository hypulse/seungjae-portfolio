import { useEffect, useState } from "react";

export default function AboutGraphic() {
  const textList = ["커뮤니케이션 능력 ", "성장 가능성 "];
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    const typing = setInterval(() => {
      if (cursor) {
        if (text !== textList[textIndex]) {
          setText(text + textList[textIndex][text.length]);
        } else {
          setText("");
          setTextIndex((prev) => {
            if (prev + 1 < textList.length) {
              return prev + 1;
            } else {
              return 0;
            }
          });
        }
      }
      setCursor((prev) => !prev);
    }, 200);
    return () => clearInterval(typing);
  });

  return (
    <div className="px-4 py-16 space-y-8 text-white bg">
      <div className="space-y-3">
        <div className="flex items-center h-36">
          <div className="text-7xl">
            {text}
            {cursor ? <span className="border-r-2"></span> : <></>}
          </div>
        </div>
        <div className="text-3xl">만나서 반갑습니다!</div>
      </div>
      <div className="flex space-x-3">
        <a className="px-6 py-3 rounded-full bg-realblue" href="#about">
          정체 확인하기
        </a>
        <button className="px-6 py-3 border rounded-full">더 알아보기</button>
      </div>
    </div>
  );
}
