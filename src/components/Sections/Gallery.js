import SlideFrame from "../Frames/SlideFrame";
import { docPortfolioSite, docCopySite, docFadeout } from "../../details";

export default function Gallery({ togglePost }) {
  function project(c) {
    return (
      <div className="m-4 border">
        <div className="w-full overflow-hidden aspect-video">
          <SlideFrame slideList={c.screenshots}></SlideFrame>
        </div>
        <div className="px-8 py-6 space-y-4">
          <div className="w-full overflow-hidden text-xl font-semibold h-7">
            {c.title}
          </div>
          <div className="h-[72px] overflow-hidden">{c.summary}</div>
          <div
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              togglePost(c);
            }}
          >
            Learn more
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <div className="text-4xl font-semibold">Game dev</div>
        <div>
          <div className="flex flex-wrap -m-4">
            <div className="basis-full sm:basis-1/2">{project(docFadeout)}</div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-4xl font-semibold">Web dev</div>
        <div>
          <div className="flex flex-wrap -m-4">
            <div className="basis-full sm:basis-1/2">
              {project(docCopySite)}
            </div>
            <div className="basis-full sm:basis-1/2">
              {project(docPortfolioSite)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
