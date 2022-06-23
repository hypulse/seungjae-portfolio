import ImgFrame from "./Frames/ImgFrame";

export default function LearnMore({ post = {} }) {
  const {
    title,
    techStack,
    deadline,
    url,
    team,
    photoList,
    details,
    mainFeatures,
    gitHub,
    blog,
  } = post;

  return (
    <div className="flex flex-col h-full p-4 pb-20 space-y-5 overflow-scroll text-lg">
      <div className="space-y-3">
        <div className="flex flex-wrap space-x-2">
          {techStack.map((t, i) => (
            <div className="px-2 py-1 border rounded-full w-fit" key={i}>
              {t}
            </div>
          ))}
        </div>
        <div className="text-4xl">{title}</div>
        <div className="text-slate-400">
          {team}&nbsp;&#183;&nbsp;{deadline.start} - {deadline.end}
        </div>
      </div>
      <div className="divide-y">
        <div></div>
        <div></div>
      </div>
      <div className="space-y-2">
        <div className="text-2xl">📌&nbsp;주요 기능</div>
        <div>{mainFeatures.join(", ")}</div>
      </div>
      {url ? (
        <div className="space-y-2">
          <div className="text-2xl">📌&nbsp;URL</div>
          <div>
            <a
              className="text-blue-500"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      {gitHub ? (
        <div className="space-y-2">
          <div className="text-2xl">📌&nbsp;GitHub</div>
          <div>
            <a
              className="text-blue-500"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {gitHub}
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      {blog ? (
        <div className="space-y-2">
          <div className="text-2xl">📌&nbsp;Blog</div>
          <div>
            <a
              className="text-blue-500"
              href={blog}
              target="_blank"
              rel="noreferrer"
            >
              {blog}
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="space-y-2">
        <div className="text-2xl">📌&nbsp;스크린샷</div>
        <div className="space-y-2">
          {photoList.map((p, i) => (
            <div className="w-full overflow-hidden bg-black" key={i}>
              <ImgFrame small={p.small} big={p.big}></ImgFrame>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-2xl">📌&nbsp;인사이트</div>
        <div className="space-y-2">
          {details.map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
