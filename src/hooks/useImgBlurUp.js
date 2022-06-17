import { useEffect, useState } from "react";

export default function useImgBlurUp(small, big) {
  const [src, setSrc] = useState(small);
  useEffect(() => {
    setSrc(small);
    const img = new Image();
    img.src = big;
    img.onload = () => {
      setSrc(big);
    };
  }, [small, big]);
  return [src, src === small];
}
