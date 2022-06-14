export default function TechStack() {
  return (
    <>
      <div className="flex flex-col w-full p-4 bg-white divide-y rounded-lg shadow text-slate-900">
        <div>
          <div className="text-3xl">페이드아웃 - 미스테리 비주얼 노벨</div>
          <div className="flex space-x-1">
            <div className="px-3 py-1 text-sm border rounded-full w-fit">
              Unity
            </div>
            <div className="px-3 py-1 text-sm border rounded-full w-fit">
              게임
            </div>
            <div className="px-3 py-1 text-sm border rounded-full w-fit">
              모바일
            </div>
          </div>
        </div>
        <div className="text-slate-400">2019.05 - 2020.02</div>
        <div>5인 개발</div>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=com.lab9874.fadeout"
            target="_blank"
            rel="noreferrer"
          >
            https://play.google.com/store/apps/details?id=com.lab9874.fadeout
          </a>
        </div>
      </div>
    </>
  );
}
