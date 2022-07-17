import fadeout1 from "../src/screenshots/fadeout/1.png";
import fadeout1sm from "../src/screenshots/fadeout/1-sm.png";
import fadeout2 from "../src/screenshots/fadeout/2.png";
import fadeout2sm from "../src/screenshots/fadeout/2-sm.png";
import fadeout3 from "../src/screenshots/fadeout/3.png";
import fadeout3sm from "../src/screenshots/fadeout/3-sm.png";
import fadeout4 from "../src/screenshots/fadeout/4.png";
import fadeout4sm from "../src/screenshots/fadeout/4-sm.png";

import onlinecv1 from "../src/screenshots/onlinecv1/1.png";
import onlinecv1sm from "../src/screenshots/onlinecv1/1-sm.png";
import onlinecv2 from "../src/screenshots/onlinecv1/2.png";
import onlinecv2sm from "../src/screenshots/onlinecv1/2-sm.png";

import portfolio1 from "../src/screenshots/portfolio/1.png";
import portfolio1sm from "../src/screenshots/portfolio/1-sm.png";
import portfolio2 from "../src/screenshots/portfolio/2.png";
import portfolio2sm from "../src/screenshots/portfolio/2-sm.png";
import portfolio3 from "../src/screenshots/portfolio/3.png";
import portfolio3sm from "../src/screenshots/portfolio/3-sm.png";
import portfolio4 from "../src/screenshots/portfolio/4.png";
import portfolio4sm from "../src/screenshots/portfolio/4-sm.png";

const doc = {
  category: "",
  title: "",
  summary: "",
  buttonLinks: { link: "", googlePlay: "", gitHub: "" },
  screenshots: [],
  mainFeatures: [],
  stacks: [],
  thisWork: [],
  relatedArticles: "",
  relatedAritcleLinks: [],
};

const docNumnect = {
  category: "Game dev",
  title: "리롤: 머지 퍼즐(REROLL: Merge Puzzle)",
  summary:
    "다섯 명이 함께 개발한 모바일 게임입니다. 퍼즐과 방탈출이 가미된 비주얼 노벨로 다양한 연출과 효과와 함께 즐길 ㅅ",
  buttonLinks: {
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.lab9874.fadeout",
  },
  screenshots: [
    { small: fadeout1sm, big: fadeout1 },
    { small: fadeout2sm, big: fadeout2 },
    { small: fadeout3sm, big: fadeout3 },
    { small: fadeout4sm, big: fadeout4 },
  ],
  mainFeatures: [
    "슬라이딩 퍼즐을 포함한 6개의 퍼즐 게임",
    "비주얼 노벨 시스템",
    "사물 상호작용 시스템",
    "미디어 재생 시스템",
    "다양한 효과와 연출 모음",
  ],
  stacks: ["Unity", "C#", "Google play"],
  thisWork: [
    "다섯 명이 함께한 프로젝트로 개발 뿐만 아니라 커뮤니케이션 과정에 있어서도 많이 배울 수 있는 기회였습니다. 유일한 프로그래머로서 기획자와 디자이너와 다양한 의견을 나누고 기능을 구현하는 과정이 있었습니다.",
    "특히 비주얼 노벨 시스템과 사물 상호작용 시스템을 연결해서 다양한 스토리 연출을 구현한 것이 기억에 남습니다. 클릭 조작과 딜레이를 조합해서 스토리를 구현하고 전후에 이벤트를 삽입할 수 있었습니다.",
    "동영상 재생과 모바일 키보드 등 이전에 시도해보지 못한 기능을 구현해보았고 빌드 과정에서는 큰 용량을 줄이기 위해 노력했습니다. 플레이 스토어에 성공적으로 출시해서 500 명이 넘는 유저가 게임을 플레이 해 주셨습니다.",
  ],
  relatedArticles: "게임에 관련한 리뷰와 정보를 확인할 수 있습니다.",
  relatedAritcleLinks: [
    [
      "[미스터리 모바일 무료 게임] 페이드 아웃 (Fade Out)",
      "https://myindie.onstove.com/141057399/view/H::7973282",
    ],
    [
      "페이드 아웃(Fade out)│공략│일제강점기, 개에 대한 슬픈 역사│모바일 무료 탈출게임│",
      "https://youtu.be/SyywVm-y8-o",
    ],
  ],
};

const docFadeout = {
  category: "Game dev",
  title:
    "페이드아웃 - 미스테리 비주얼 노벨, 스토리형 퍼즐 게임, 오프라인 어드벤처 게임",
  summary:
    "다섯 명이 함께 개발한 모바일 게임입니다. 퍼즐과 방탈출이 가미된 비주얼 노벨로 다양한 연출과 효과를 사용했습니다.",
  buttonLinks: {
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.lab9874.fadeout",
  },
  screenshots: [
    { small: fadeout1sm, big: fadeout1 },
    { small: fadeout2sm, big: fadeout2 },
    { small: fadeout3sm, big: fadeout3 },
    { small: fadeout4sm, big: fadeout4 },
  ],
  mainFeatures: [
    "슬라이딩 퍼즐을 포함한 6개의 퍼즐 게임",
    "비주얼 노벨 시스템",
    "사물 상호작용 시스템",
    "미디어 재생 시스템",
    "다양한 효과와 연출 모음",
  ],
  stacks: ["Unity", "C#", "Google play"],
  thisWork: [
    "다섯 명이 함께한 프로젝트로 개발 뿐만 아니라 커뮤니케이션 능력을 많이 배울 수 있는 기회였습니다. 유일한 개발자로서 기획자와 디자이너와 다양한 의견을 나누고 기능을 구현하는 과정이 있었습니다. 그 과정에서 커뮤니케이션은 문서화와 병행됐을 때 가장 효과적이라는 것을 배웠습니다.",
    "다양한 기능 중 비주얼 노벨 시스템과 사물 상호작용 시스템을 연결해서 다양한 스토리 연출을 구현한 것이 가장 기억에 남습니다. 터치와 딜레이를 조합해서 스토리를 구현하고 전후에 이벤트를 삽입하는 방법으로 작동했기 때문에 기획에 변화가 있어도 해당 내용을 모듈 방식으로 쉽게 추가할 수 있었습니다.",
    "또한 동영상 재생과 모바일 키보드 등 이전에 시도해보지 못한 기능을 구현할 수 있게 되었습니다. 빌드 과정에서는 큰 용량을 줄이기 위해 노력했으며 플레이 스토어에 성공적으로 출시해서 500 명이 넘는 유저가 게임을 플레이 해 주셨습니다.",
  ],
  relatedArticles: "게임에 관련한 리뷰와 정보를 확인할 수 있습니다.",
  relatedAritcleLinks: [
    [
      "[미스터리 모바일 무료 게임] 페이드 아웃 (Fade Out)",
      "https://myindie.onstove.com/141057399/view/H::7973282",
    ],
    [
      "페이드 아웃(Fade out)│공략│일제강점기, 개에 대한 슬픈 역사│모바일 무료 탈출게임│",
      "https://youtu.be/SyywVm-y8-o",
    ],
  ],
};

const docPortfolioSite = {
  category: "Web dev",
  title: "Seungjae's Portfolio",
  summary:
    "세련된 디자인에 심혈을 기울인 포트폴리오 사이트입니다. 사이트 완성도를 높이기 위한 기능들을 다양하게 구현했습니다.",
  buttonLinks: {
    link: "https://hypulse.github.io/seungjae-portfolio",
    googlePlay: "",
    gitHub: "https://github.com/hypulse/seungjae-portfolio",
  },
  screenshots: [
    { small: portfolio1sm, big: portfolio1 },
    { small: portfolio2sm, big: portfolio2 },
    { small: portfolio3sm, big: portfolio3 },
    { small: portfolio4sm, big: portfolio4 },
  ],
  mainFeatures: ["이미지 슬라이드", "이미지 Blur Up", "팝업 뒤로가기"],
  stacks: ["React", "Tailwind CSS", "GitHub Pages"],
  thisWork: [
    "Seungjae's Portfolio를 개발하는 과정에서는 바닐라 JS에서 구현하던 기능들을 어떻게 해야 React적으로 풀어나갈 수 있는지 많이 고민하고 배웠습니다. 또한 학습 단계에서의 단순한 기능 구현을 넘어서 더 완성도 높은 사이트 기능을 제작하기 위해서 여러 시행착오가 있었습니다.",
    "예를 들어 'useRef 사용하기', '스타일 동적으로 할당하기', 'state로 컴포넌트 관리하기'와 같은 기능들에 대해서 잘 알고 있다고 생각했지만 이들을 복합적으로 함께 사용할 때는 예상대로 동작하지 않았습니다.",
    "하지만 문제를 해결하는 과정에서 Virtual DOM에 대해 더 깊게 이해할 수 있었으며 Custom Hook을 사용하는 것에도 한층 더 익숙해질 수 있었습니다.",
    "디자인에 있어서는 Tailwind CSS를 적극적으로 사용했습니다. 복잡해지는 className 때문에 재사용이 힘들 거라는 우려와 다르게 규칙을 정해서 사용하기 편리했으며 빠르게 멋진 디자인을 만들어낼 수 있었습니다. Bootstrap과 같은 패키지보다 자유도도 높고 많은 상황에서 styled jsx보다 편리했습니다.",
    "처음에는 눈에 띄는 독특한 디자인을 시도했지만 가독성과 범용성이 떨어지는 문제가 발생해서 방향을 수정했습니다. 웹 개발에 반복적으로 사용되는 디자인에 있어서 어떤 간격, 폰트, 높이가 자연스럽고 사용자에게 편리한지 분명하게 기준을 세울 수 있었습니다. React로 제작했으며 GitHub Pages로 Deployment 했습니다.",
  ],
  relatedArticles:
    "개발 과정에 있어서 문제를 해결하거나 통찰이 생기면 블로그에 기록했습니다.",
  relatedAritcleLinks: [
    [
      "Image Blur Up Hook 만들기",
      "https://blog.naver.com/sjinsilval28/222776523146",
    ],
    [
      "popstate 이벤트 핸들러로 팝업창 뒤로가기",
      "https://blog.naver.com/sjinsilval28/222796621697",
    ],
  ],
};

const docCopySite = {
  category: "Web dev",
  title: "Online CtrlV",
  summary:
    "같은 문자를 여러 번 복사할 수 있는 사이트입니다. 재미있는 카카오톡 메시지를 보내기 위해서 만들었습니다.",

  buttonLinks: {
    link: "https://hypulse.github.io/online-ctrlv",
    googlePlay: "",
    gitHub: "https://github.com/hypulse/online-ctrlv",
  },
  screenshots: [
    { small: onlinecv1sm, big: onlinecv1 },
    { small: onlinecv2sm, big: onlinecv2 },
  ],
  mainFeatures: ["Web Share API", "클립보드 기능"],
  stacks: ["React", "MUI", "GitHub Pages"],
  thisWork: [
    "React로 처음 만든 웹 사이트입니다. MUI의 컴포넌트를 이용하고 공유 기능을 추가했습니다.",
  ],
  relatedArticles:
    "개발 과정에 있어서 문제를 해결하거나 통찰이 생기면 블로그에 기록했습니다.",
  relatedAritcleLinks: [
    [
      "React 프로젝트 GitHub Pages Deployment",
      "https://blog.naver.com/sjinsilval28/222676867653",
    ],
  ],
};

export { doc, docPortfolioSite, docCopySite, docFadeout };
