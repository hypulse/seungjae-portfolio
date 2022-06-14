import wordmark from "../src/wordmark.png";
import About from "./components/About";
import AboutGraphic from "./components/AboutGraphic";
import WorkGraphic from "./components/WorkGraphic";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prev) => {
      if (prev) {
        document.body.classList.remove("stop-scroll");
      } else {
        document.body.classList.add("stop-scroll");
      }
      return !prev;
    });
  };

  const togglePost = () => {
    setOpenPost((prev) => {
      if (prev) {
        document.body.classList.remove("stop-scroll");
      } else {
        document.body.classList.add("stop-scroll");
      }
      return !prev;
    });
  };

  return (
    <>
      {openMenu ? (
        <div className="fixed top-0 right-0 z-10 h-full bg-white w-72">
          <div className="flex items-center h-16 px-4 bg-white border-b">
            <div className="grow"></div>
            <div onClick={toggleMenu}>닫기</div>
          </div>
          <div className="flex flex-col px-4 text-lg divide-y text-slate-900">
            <a className="py-4" onClick={toggleMenu} href="#about">
              자기소개
            </a>
            <a className="py-4" onClick={toggleMenu} href="#links">
              링크
            </a>
            <a className="py-4" onClick={toggleMenu} href="#work">
              프로젝트
            </a>
            <a className="py-4" onClick={toggleMenu} href="#stack">
              스택
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      {openPost ? (
        <div className="fixed top-0 right-0 z-10 w-full h-full bg-white">
          <div className="flex items-center h-16 px-4 bg-white border-b">
            <div className="grow"></div>
            <div onClick={togglePost}>닫기</div>
          </div>
          <div className="flex flex-col h-full overflow-y-scroll divide-y text-slate-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex
            lorem, dapibus nec mi eu, cursus molestie nulla. Praesent ut ante
            porta, ornare orci ornare, facilisis urna. Cras non risus sed nisi
            consequat dapibus id quis dolor. Nam enim metus, lacinia et augue
            porttitor, finibus ultricies augue. Praesent venenatis diam in enim
            bibendum, ut bibendum leo vulputate. Sed tempor felis id lorem
            vehicula luctus. Vestibulum id auctor urna. Sed ac metus nibh.
            Suspendisse sed eleifend elit, ac semper ligula. Vestibulum
            pellentesque egestas tortor, eget porta leo lacinia et. Maecenas
            consectetur venenatis dui, et ultricies lorem gravida vel. Vivamus
            malesuada lobortis est. Nunc eu porta sem. In gravida hendrerit urna
            sit amet vehicula. Morbi non elementum lectus, at pharetra tortor.
            Mauris ex arcu, gravida ut dapibus vitae, gravida et sem. Vivamus
            sed porttitor mi, id placerat lectus. Vestibulum dignissim mi odio,
            a dictum sapien iaculis id. Nullam id odio eu lectus rutrum commodo
            at sit amet metus. Aenean risus ante, semper eget mauris sed,
            commodo hendrerit velit. Nunc dignissim elit sit amet augue rutrum,
            a iaculis lacus condimentum. Sed interdum ultricies lectus.
            Phasellus luctus arcu eget sapien tristique sollicitudin eget non
            nibh. Morbi consequat in purus in hendrerit. Phasellus mattis
            rhoncus blandit. Donec malesuada, quam ut sagittis dictum, urna arcu
            vestibulum risus, id gravida nisl mi eu sem. Proin nec eleifend
            eros. Sed ac tortor id nisl consectetur ultrices. Fusce elementum
            diam ex, pharetra cursus mi consequat ac. Suspendisse tristique
            mollis odio ut malesuada. Maecenas eget auctor lectus. Integer ut
            cursus velit. Proin mattis metus lectus, et fringilla ex pretium id.
            Nunc arcu leo, ultricies at ornare vel, sagittis et ipsum. Nam
            egestas ante eu lacus lacinia cursus. Suspendisse potenti. Morbi nec
            neque vitae ante commodo sodales. Aliquam dapibus nisi sapien. Donec
            eros mauris, mollis posuere sapien sed, scelerisque pulvinar justo.
            Aliquam consequat rutrum lectus, vitae viverra nibh laoreet id. Sed
            facilisis ut felis ac lacinia. Praesent ac nisi ac est laoreet
            varius. Suspendisse vel risus non arcu ultrices interdum. Quisque
            sit amet iaculis erat. Sed lacinia posuere posuere. Vivamus iaculis
            massa quis cursus dignissim. Nulla in lobortis diam. Vivamus
            vestibulum eget felis vel sodales. In bibendum tincidunt metus.
            Donec id ipsum blandit, posuere nisi in, ultrices orci. Phasellus
            vitae libero sem. Aliquam ac justo pharetra, finibus turpis sed,
            imperdiet libero. Vestibulum erat nisl, facilisis sit amet arcu
            vitae, lobortis pellentesque sem. In dapibus orci at dui lobortis
            cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla ex lorem, dapibus nec mi eu, cursus molestie nulla. Praesent
            ut ante porta, ornare orci ornare, facilisis urna. Cras non risus
            sed nisi consequat dapibus id quis dolor. Nam enim metus, lacinia et
            augue porttitor, finibus ultricies augue. Praesent venenatis diam in
            enim bibendum, ut bibendum leo vulputate. Sed tempor felis id lorem
            vehicula luctus. Vestibulum id auctor urna. Sed ac metus nibh.
            Suspendisse sed eleifend elit, ac semper ligula. Vestibulum
            pellentesque egestas tortor, eget porta leo lacinia et. Maecenas
            consectetur venenatis dui, et ultricies lorem gravida vel. Vivamus
            malesuada lobortis est. Nunc eu porta sem. In gravida hendrerit urna
            sit amet vehicula. Morbi non elementum lectus, at pharetra tortor.
            Mauris ex arcu, gravida ut dapibus vitae, gravida et sem. Vivamus
            sed porttitor mi, id placerat lectus. Vestibulum dignissim mi odio,
            a dictum sapien iaculis id. Nullam id odio eu lectus rutrum commodo
            at sit amet metus. Aenean risus ante, semper eget mauris sed,
            commodo hendrerit velit. Nunc dignissim elit sit amet augue rutrum,
            a iaculis lacus condimentum. Sed interdum ultricies lectus.
            Phasellus luctus arcu eget sapien tristique sollicitudin eget non
            nibh. Morbi consequat in purus in hendrerit. Phasellus mattis
            rhoncus blandit. Donec malesuada, quam ut sagittis dictum, urna arcu
            vestibulum risus, id gravida nisl mi eu sem. Proin nec eleifend
            eros. Sed ac tortor id nisl consectetur ultrices. Fusce elementum
            diam ex, pharetra cursus mi consequat ac. Suspendisse tristique
            mollis odio ut malesuada. Maecenas eget auctor lectus. Integer ut
            cursus velit. Proin mattis metus lectus, et fringilla ex pretium id.
            Nunc arcu leo, ultricies at ornare vel, sagittis et ipsum. Nam
            egestas ante eu lacus lacinia cursus. Suspendisse potenti. Morbi nec
            neque vitae ante commodo sodales. Aliquam dapibus nisi sapien. Donec
            eros mauris, mollis posuere sapien sed, scelerisque pulvinar justo.
            Aliquam consequat rutrum lectus, vitae viverra nibh laoreet id. Sed
            facilisis ut felis ac lacinia. Praesent ac nisi ac est laoreet
            varius. Suspendisse vel risus non arcu ultrices interdum. Quisque
            sit amet iaculis erat. Sed lacinia posuere posuere. Vivamus iaculis
            massa quis cursus dignissim. Nulla in lobortis diam. Vivamus
            vestibulum eget felis vel sodales. In bibendum tincidunt metus.
            Donec id ipsum blandit, posuere nisi in, ultrices orci. Phasellus
            vitae libero sem. Aliquam ac justo pharetra, finibus turpis sed,
            imperdiet libero. Vestibulum erat nisl, facilisis sit amet arcu
            vitae, lobortis pellentesque sem. In dapibus orci at dui lobortis
            cursus.
          </div>
        </div>
      ) : (
        <></>
      )}
      <nav className="fixed top-0 w-full">
        <div className="flex items-center h-16 px-4 bg-white drop-shadow">
          <div className="w-28 shrink-0">
            <img src={wordmark} alt="" width="128px"></img>
          </div>
          <div className="grow"></div>
          <div onClick={toggleMenu}>메뉴</div>
        </div>
      </nav>
      <div className="h-16"></div>
      <div className="bg-black">
        <AboutGraphic></AboutGraphic>
      </div>
      <div className="px-4 py-16 bg-white">
        <div className="relative -top-32" id="about"></div>
        <About></About>
      </div>
      <div className="px-4 py-16 bg-realyellow">
        <div className="relative -top-32" id="links"></div>
      </div>
      <div className="bg-black">
        <WorkGraphic></WorkGraphic>
      </div>
      <div className="px-4 py-16 bg-white">
        <div className="relative -top-32" id="work"></div>
        <Work togglePost={togglePost}></Work>
      </div>
      <div className="px-4 py-16 bg-realred">
        <div className="relative -top-32" id="stack"></div>
      </div>
      <div className="px-4 py-8 bg-black">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
