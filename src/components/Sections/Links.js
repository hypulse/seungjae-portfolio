export default function Links() {
  function link(title, text, link, linkText) {
    return (
      <div className="px-8 py-6 m-4 space-y-4 border">
        <div className="text-xl font-semibold">{title}</div>
        <div className="h-[72px] overflow-hidden">{text}</div>
        <div
          className="text-blue-600 cursor-pointer"
          onClick={() => {
            window.open(link);
          }}
        >
          {linkText}
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="text-4xl font-semibold">Archives</div>
        <div className="text-xl">
          프로그래밍과 함께한 여정을 다음에 기록하고 있습니다.
        </div>
      </div>

      <div className="flex flex-wrap -m-4">
        <div className="basis-full sm:basis-1/2">
          {link(
            "Naver Blog",
            "학습한 내용들을 기록하고 있습니다. 개발 과정에서 생긴 문제 해결 과정을 공유하고 있습니다.",
            "https://blog.naver.com/sjinsilval28",
            "Read my blog"
          )}
        </div>
        <div className="basis-full sm:basis-1/2">
          {link(
            "GitHub",
            "작성한 코드를 깃허브에 저장하고 공유하고 있습니다. 간단한 어플리케이션을 Deployment 하고 있습니다.",
            "https://github.com/hypulse",
            "Explore repositories"
          )}
        </div>
      </div>
    </div>
  );
}
