import BgFrame from "../Frames/BgFrame";
import small from "../../1-sm.jpg";
import big from "../../1.jpg";

export default function AboutMe() {
  return (
    <BgFrame small={small} big={big}>
      <div className="px-4 py-16 mx-auto space-y-8 text-white max-w-7xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-lg">Lorem ipsum</div>
            <div className="font-semibold text-7xl">Donec</div>
          </div>
          <div className="space-y-4">
            <div className="text-2xl font-light">
              Sed posuere tempor augue, vel.
            </div>
            <div className="text-xl">
              Duis pharetra, neque a interdum congue, ipsum velit fringilla
              mauris, ac rutrum risus ante quis nulla. Nam ut mauris sit amet ex
              aliquam ultricies. Ut tempor porta lacus vitae bibendum.
            </div>
          </div>
        </div>
        <button className="px-6 py-3 bg-blue-500 rounded-md" onClick={() => {}}>
          Learn more
        </button>
      </div>
    </BgFrame>
  );
}
