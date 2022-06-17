import BgFrame from "./BgFrame";
import small from "../2-sm.jpg";
import big from "../2.jpg";

export default function WorkGraphic({ workRef }) {
  return (
    <BgFrame small={small} big={big}>
      <div className="px-4 py-16 space-y-8 text-white">
        <div className="space-y-3">
          <div className="text-7xl">프로젝트</div>
          <div className="text-3xl">멋진 프로젝트를 소개합니다!</div>
        </div>
        <div className="flex space-x-3">
          <button
            className="px-6 py-3 rounded-full bg-realblue"
            onClick={() => {
              workRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            당장 살펴보기
          </button>
        </div>
      </div>
    </BgFrame>
  );
}
