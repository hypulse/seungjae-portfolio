import useImgBlurUp from "../../hooks/useImgBlurUp";

export default function BgFrame({ small, big, children }) {
  const [src, blur] = useImgBlurUp(small, big);
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`absolute w-full h-full bg-center bg-cover ${
          blur ? "blur-lg" : "blur-none"
        } transition-[filter] duration-200`}
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
