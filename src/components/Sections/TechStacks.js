import i1 from "../../Icons/Stacks/1.png";
import i2 from "../../Icons/Stacks/2.png";
import i3 from "../../Icons/Stacks/3.png";
import i4 from "../../Icons/Stacks/4.png";
import i5 from "../../Icons/Stacks/5.png";
import i6 from "../../Icons/Stacks/6.png";
import i7 from "../../Icons/Stacks/7.png";
import i8 from "../../Icons/Stacks/8.png";
import i9 from "../../Icons/Stacks/9.png";
import i10 from "../../Icons/Stacks/10.png";

export default function TechStacks() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="text-4xl font-semibold">Skills</div>
        <div className="text-xl">
          더 멋진 서비스를 개발하기 위해서 아래의 기술들을 숙련하고 있습니다.
        </div>
      </div>
      <div>
        <div className="flex flex-wrap items-center">
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i1} alt=""></img>
          </div>
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i2} alt=""></img>
          </div>
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i3} alt=""></img>
          </div>
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i4} alt=""></img>
          </div>
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i5} alt=""></img>
          </div>
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i6} alt=""></img>
          </div>
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i7} alt=""></img>
          </div>
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i8} alt=""></img>
          </div>
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i9} alt=""></img>
          </div>
          <div className="p-4 basis-1/2 sm:basis-1/4">
            <img src={i10} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
