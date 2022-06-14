export default function Work({ togglePost }) {
  return (
    <div className="space-y-16 text-slate-900">
      <div className="space-y-5">
        <div className="text-4xl">🕹️&nbsp;게임 프로젝트</div>

        <div
          className="flex items-end w-full p-4 bg-black rounded-lg aspect-video"
          onClick={togglePost}
        >
          <div className="text-3xl text-white">
            페이드아웃 - 미스테리 비주얼 노벨
          </div>
        </div>

        <div className="flex items-end w-full p-4 bg-black rounded-lg aspect-video">
          <div className="text-3xl text-white">
            페이드아웃 - 비주얼노벨 퍼즐 게임
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-4xl">🌐&nbsp;웹 프로젝트</div>
        <div className="flex items-end w-full p-4 bg-black rounded-lg aspect-video">
          <div className="text-3xl text-white">
            페이드아웃 - 비주얼노벨 퍼즐 게임
          </div>
        </div>
        <div className="flex items-end w-full p-4 bg-black rounded-lg aspect-video">
          <div className="text-3xl text-white">
            페이드아웃 - 비주얼노벨 퍼즐 게임
          </div>
        </div>
      </div>
    </div>
  );
}
