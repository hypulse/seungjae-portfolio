import ImgFrame from "./ImgFrame";

export default function Post({ post = {} }) {
  const { title, stack, deadline, url, team, photoList, summary, detail } =
    post;
  return (
    <div className="flex flex-col h-full p-4 overflow-y-scroll divide-y text-slate-900">
      <div className="text-4xl">{title}</div>
      <div>
        <div className="flex flex-wrap space-x-2">
          {stack.map((s, i) => (
            <div className="px-2 py-1 border rounded-full w-fit" key={i}>
              {s}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>스크린샷</div>
        {photoList.map((p, i) => (
          <div className="w-full overflow-hidden bg-black">
            <ImgFrame small={p.small} big={p.big}></ImgFrame>
          </div>
        ))}
      </div>
    </div>
  );
}
