import fadeout from "./screenshots/fadeout/1.png";
import fadeoutSm from "./screenshots/fadeout/1-sm.png";
import fadeout2 from "./screenshots/fadeout/2.png";
import fadeout2Sm from "./screenshots/fadeout/2-sm.png";
import fadeout3 from "./screenshots/fadeout/3.png";
import fadeout3Sm from "./screenshots/fadeout/3-sm.png";
import fadeout4 from "./screenshots/fadeout/4.png";
import fadeout4Sm from "./screenshots/fadeout/4-sm.png";

const contentFadeout = {
  title:
    "페이드아웃 - 미스테리 비주얼 노벨, 스토리형 퍼즐 게임, 오프라인 어드벤처 게임",
  techStack: ["Unity", "C#", "PlayStore"],
  deadline: { start: "2020. 10. 22.", end: "2021. 6. 2." },
  url: "https://play.google.com/store/apps/details?id=com.lab9874.fadeout",
  gitHub: "",
  blog: "",
  team: "5인 개발",
  photoList: [
    { small: fadeoutSm, big: fadeout },
    { small: fadeout2Sm, big: fadeout2 },
    { small: fadeout3Sm, big: fadeout3 },
    { small: fadeout4Sm, big: fadeout4 },
  ],
  mainFeatures: [
    "6개의 퍼즐",
    "스크립트 관리 시스템",
    "오브젝트 상호작용 시스템",
    "스토리 연출 효과",
  ],
  details: [
    "개발 경험이 없는 4명의 팀원들과 협력해서 출시한 모바일 게임입니다. 어려움도 많았지만 자신의 경험을 공유하는 뜻 깊은 여정을 함께할 수 있었습니다.",
    "특히 팀 개발에 있어서 필수적인 커뮤니케이션 능력을 배울 수 있었는데 사소한 기능을 위해서 너무 많은 시간이 필요한 경우 해당 기능을 다시 검토하기 위해 다른 팀원들을 설득해야 했습니다.",
    "이때 저는 필수 기능과 부가 기능들의 우선순위를 정하는 시간을 마련했으며 문서화를 통해서 갈등을 미연에 방지하고 명확하고 빠르게 문제를 해결할 수 있었습니다.",
    "다양한 게임 연출 효과도 구현했는데 다른 언어로 작성했던 코드들을 C#의 유니티로 가져와서 사용했습니다. 코드는 단순히 문법일 뿐 문제 해결 능력이 프로그래밍의 핵심이라는 것을 다시금 깨달는 시간이었습니다.",
    "기능 구현에 있어서는 해상도 맞춤, 드래그, 저장 등 기존의 경험을 적극 이용한 것과 동시에 유니티에서의 키보드 입력, 동영상 재생과 같이 기존에 시도해보지 못했던 것들을 학습할 수 있었습니다.",
    "구현한 기능 중에서 가장 기억에 남는 것은 팀원들의 다양한 요구들에 언제든지 대응할 수 있는 스크립트와 오브젝트 상호작용 시스템입니다. Duration, Delay, 그리고 마우스 클릭 방지 시점을 조합하는 시스템으로 사용자 상호작용에 따라 스토리를 연출할 수 있었습니다.",
  ],
};

export { contentFadeout };
