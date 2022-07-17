import BgFrame from "../Frames/BgFrame";
import small from "../../2-sm.jpg";
import big from "../../2.jpg";

export default function Work() {
  return (
    <BgFrame small={small} big={big}>
      <div className="px-4 py-16 mx-auto space-y-12 text-white max-w-7xl">
        <div className="space-y-6">
          <div className="text-6xl font-semibold">Gallery</div>
          <div className="text-2xl font-light">
            인디 게임 개발부터 웹 개발까지 다양한 작품들
          </div>
        </div>
        <button
          className="px-5 py-3 transition-colors bg-blue-600 rounded hover:bg-blue-700"
          onClick={() => {}}
        >
          더 알아보기
        </button>
      </div>
    </BgFrame>
  );
}
