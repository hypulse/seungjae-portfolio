import BgFrame from "../Frames/BgFrame";
import small from "../../2-sm.jpg";
import big from "../../2.jpg";

export default function Work() {
  return (
    <BgFrame small={small} big={big}>
      <div className="px-4 py-16 mx-auto space-y-8 text-white max-w-7xl">
        <div className="space-y-6">
          <div className="text-6xl font-semibold">Gallery</div>
          <div className="text-2xl font-light">
            Suspendisse potenti. Sed eu eleifend.
          </div>
        </div>
        <button className="px-5 py-3 bg-blue-500 rounded" onClick={() => {}}>
          Download PDF
        </button>
      </div>
    </BgFrame>
  );
}
