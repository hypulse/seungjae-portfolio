import SlideFrame from "../Frames/SlideFrame";
import { contentFadeout } from "../../details";

export default function Gallery({ togglePost }) {
  function project(content) {
    return (
      <div className="border">
        <div className="w-full overflow-hidden aspect-video">
          <SlideFrame slideList={content.photoList}></SlideFrame>
        </div>
        <div className="p-4 space-y-4">
          <div className="w-full overflow-hidden text-xl font-semibold h-7">
            {content.title}
          </div>
          <div className="text-lg">
            Fusce rhoncus ornare tellus, sit amet rhoncus nibh faucibus ut.
            Quisque vestibulum urna lobortis, blandit augue faucibus, fringilla
            massa. Etiam non nisi lobortis, placerat turpis vitae, ultricies
            elit.
          </div>
          <div
            className="text-blue-500 "
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
          <div className="text-4xl font-semibold">Game Dev</div>
          <div className="text-xl">
            Vestibulum faucibus hendrerit nunc et accumsan. Donec pharetra ut
            leo sed pellentesque.
          </div>
        </div>

        <div className="sm:flex sm:space-x-8">
          <div className="basis-0 grow">{project(contentFadeout)}</div>
          <div className="basis-0 grow">
            <div className="pt-8 sm:pt-0">{project(contentFadeout)}</div>
          </div>
        </div>

        <div className="sm:flex sm:space-x-8">
          <div className="basis-0 grow">{project(contentFadeout)}</div>
          <div className="basis-0 grow">
            {/* <div className="pt-8 sm:pt-0">{project(contentFadeout)}</div> */}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-6">
          <div className="text-4xl font-semibold">Web Dev</div>
          <div className="text-xl">
            Vestibulum faucibus hendrerit nunc et accumsan. Donec pharetra ut
            leo sed pellentesque.
          </div>
        </div>

        <div className="sm:flex sm:space-x-8">
          <div className="basis-0 grow">{project(contentFadeout)}</div>
          <div className="basis-0 grow">
            <div className="pt-8 sm:pt-0">{project(contentFadeout)}</div>
          </div>
        </div>

        <div className="sm:flex sm:space-x-8">
          <div className="basis-0 grow">{project(contentFadeout)}</div>
          <div className="basis-0 grow">
            {/* <div className="pt-8 sm:pt-0">{project(contentFadeout)}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
