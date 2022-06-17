import SlideFrame from "./SlideFrame";
// 나중에 구조 잡아서 다시
import a from "../screenshots/fadeout/1.png";
import aa from "../screenshots/fadeout/1-sm.png";
import b from "../screenshots/fadeout/2.png";
import bb from "../screenshots/fadeout/2-sm.png";
import c from "../screenshots/fadeout/3.png";
import cc from "../screenshots/fadeout/3-sm.png";
import d from "../screenshots/fadeout/4.png";
import dd from "../screenshots/fadeout/4-sm.png";

const content = {
  title:
    "페이드아웃 - 미스테리 비주얼 노벨, 스토리형 퍼즐 게임, 오프라인 어드벤처 게임",
  stack: ["Unity", "C#", "PlayStore"],
  deadline: { start: "2020.10.22", end: "2021.06.02" },
  url: "https://play.google.com/store/apps/details?id=com.lab9874.fadeout",
  team: "5인 개발",
  photoList: [
    { small: aa, big: a },
    { small: bb, big: b },
    { small: cc, big: c },
    { small: dd, big: d },
  ],
  summary: [
    "6개의 퍼즐",
    "스크립트 관리 시스템",
    "스크립트 로드 시스템",
    "다양한 상호작용과 연출",
    "비주얼 노벨 시스템",
    "저장과 불러오기",
  ],
  detail:
    "sgdfgsdfgdfs dsfgdsfgdsfg sdfg dsfg dsfg dsfg fsdg dsfgdsfgsdfg sdfg dsg dsfg dsfgdsfgdfsg sfgsdfg  dsfgsdfgs dfsdgsd g sdfgsdfgsdgf dsfg sdgf  sdfg sdf",
};

export default function Work({ togglePost }) {
  return (
    <div className="space-y-16 text-slate-900">
      <div className="space-y-5">
        <div className="text-4xl">🕹️&nbsp;게임 프로젝트</div>
        <div
          className="w-full overflow-hidden rounded-lg aspect-video"
          onClick={() => {
            togglePost(content);
          }}
        >
          <SlideFrame slideList={content.photoList}>
            <div className="text-3xl text-white">
              페이드아웃 - 미스테리 비주얼 노벨
            </div>
          </SlideFrame>
        </div>
      </div>
    </div>
  );
}
