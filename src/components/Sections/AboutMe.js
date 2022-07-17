import BgFrame from "../Frames/BgFrame";
import small from "../../1-sm.jpg";
import big from "../../1.jpg";

export default function AboutMe() {
  return (
    <BgFrame small={small} big={big}>
      <div className="px-4 py-16 mx-auto space-y-12 text-white sm:py-24 max-w-7xl">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="text-5xl font-semibold sm:text-7xl">
              안녕하세요! 황승재입니다.
            </div>
            <div className="text-2xl font-light sm:text-4xl">
              창의적이고 만드는 것을 좋아하는 웹 개발자
            </div>
          </div>
          <div className="text-xl">
            미니멀리즘 정신을 바탕으로 유저 인터랙티브한 서비스를 개발하고
            있습니다. JavaScript를 중심으로 프론트엔드 기술을 사용하고 있고
            WordPress 사이트를 관리하기 위해서 PHP를 사용했습니다. 게임 개발에는
            Unity와 C#을 사용하고 있습니다. 커뮤니케이션 능력과 꾸준함의 힘을
            통해 세상에 기여하고 싶습니다.
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
