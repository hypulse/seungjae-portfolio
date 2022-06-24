import SlideFrame from "../Frames/SlideFrame";
import { contentFadeout } from "../../details";

export default function Gallery({ togglePost }) {
  function project(content) {
    return (
      <div className="m-4 border">
        <div className="w-full overflow-hidden aspect-video">
          <SlideFrame slideList={content.photoList}></SlideFrame>
        </div>
        <div className="px-8 py-6 space-y-4">
          <div className="w-full text-xl font-semibold">{content.title}</div>
          <div>
            Fusce rhoncus ornare tellus, sit amet rhoncus nibh faucibus ut.
            Quisque vestibulum urna lobortis, blandit augue faucibus, fringilla
            massa. Etiam non nisi lobortis, placerat turpis vitae, ultricies
            elit.
          </div>
          <div
            className="text-blue-500"
            onClick={() => {
              togglePost(content);
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
        <div className="space-y-6">
          <div className="text-4xl font-semibold">Game dev</div>
          <div className="text-xl">
            Vestibulum faucibus hendrerit nunc et accumsan. Donec pharetra ut
            leo sed pellentesque.
          </div>
        </div>
        <div>
          <div className="flex flex-wrap -m-4">
            <div className="basis-full sm:basis-1/2">
              {project(contentFadeout)}
            </div>
            <div className="basis-full sm:basis-1/2">
              {project(contentFadeout)}
            </div>
            <div className="basis-full sm:basis-1/2">
              {project(contentFadeout)}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-6">
          <div className="text-4xl font-semibold">Web dev</div>
          <div className="text-xl">
            Vestibulum faucibus hendrerit nunc et accumsan. Donec pharetra ut
            leo sed pellentesque.
          </div>
        </div>
        <div>
          <div className="flex flex-wrap -m-4">
            <div className="basis-full sm:basis-1/2">
              {project(contentFadeout)}
            </div>
            <div className="basis-full sm:basis-1/2">
              {project(contentFadeout)}
            </div>
            <div className="basis-full sm:basis-1/2">
              {project(contentFadeout)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
