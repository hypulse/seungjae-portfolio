import wordmark from "../src/wordmark.png";
import About from "./components/About";
import WorkGraphic from "./components/WorkGraphic";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import Post from "./components/Post";
import AboutGraphic from "./components/AboutGraphic";
import TechStacks from "./components/TechStacks";

const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function App() {
  const aboutRef = useRef();
  const linksRef = useRef();
  const workRef = useRef();
  const techStacksRef = useRef();

  const [openMenu, setOpenMenu] = useState(false);
  const [openPost, setOpenPost] = useState(false);

  useEffect(() => {
    const pageShow = () => {
      if (openPost === true && window.location.hash !== "#details") {
        document.body.classList.remove("stop-scroll");
        setOpenPost(false);
      }
    };
    window.addEventListener("popstate", pageShow);
    pageShow();
  });

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

  const [post, setPost] = useState("");
  const togglePost = (post = {}) => {
    setPost(post);
    setOpenPost((prev) => {
      if (prev) {
        document.body.classList.remove("stop-scroll");
        window.history.pushState(null, null, " ");
      } else {
        document.body.classList.add("stop-scroll");
        window.history.pushState(null, null, "#details");
      }
      return !prev;
    });
  };

  const scroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {openMenu ? (
        <div className="fixed top-0 right-0 z-30 flex w-full h-full">
          <div className="bg-black opacity-50 grow"></div>
          <div className="h-full bg-white w-72">
            <div className="flex items-center h-16 px-4 border-b">
              <div className="grow"></div>
              <div onClick={toggleMenu}>{closeIcon}</div>
            </div>
            <div className="flex flex-col px-4 text-lg divide-y text-slate-900">
              <div
                className="py-4"
                onClick={() => {
                  toggleMenu();
                  scroll(aboutRef);
                }}
              >
                저를 소개합니다
              </div>
              <div
                className="py-4"
                onClick={() => {
                  toggleMenu();
                  scroll(linksRef);
                }}
              >
                관련 링크
              </div>
              <div
                className="py-4"
                onClick={() => {
                  toggleMenu();
                  scroll(workRef);
                }}
              >
                프로젝트
              </div>
              <div
                className="py-4"
                onClick={() => {
                  toggleMenu();
                  scroll(techStacksRef);
                }}
              >
                기술 스택
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {openPost ? (
        <div className="fixed top-0 right-0 z-30 w-full h-full bg-white">
          <div className="flex items-center h-16 px-4 bg-white border-b">
            <div className="grow"></div>
            <div onClick={togglePost}>{closeIcon}</div>
          </div>
          <Post post={post}></Post>
        </div>
      ) : (
        <></>
      )}
      <nav className="fixed top-0 z-20 w-full">
        <div className="flex items-center h-16 px-4 bg-white drop-shadow">
          <div className="w-28 shrink-0">
            <img src={wordmark} alt="" width="128px"></img>
          </div>
          <div className="grow"></div>
          <div onClick={toggleMenu}>{menuIcon}</div>
        </div>
      </nav>
      <div className="h-16"></div>
      <div className="bg-black">
        <AboutGraphic aboutRef={aboutRef}></AboutGraphic>
      </div>
      <div className="px-4 py-16 bg-white">
        <div className="relative -top-32" ref={aboutRef}></div>
        <About></About>
      </div>
      <div className="px-4 py-16 bg-realyellow">
        <div className="relative -top-32" ref={linksRef}></div>
      </div>
      <div className="bg-black">
        <WorkGraphic workRef={workRef}></WorkGraphic>
      </div>
      <div className="px-4 py-16 bg-white">
        <div className="relative -top-32" ref={workRef}></div>
        <Work togglePost={togglePost}></Work>
      </div>
      <div className="px-4 py-16 bg-realred">
        <div className="relative -top-32" ref={techStacksRef}></div>
        <TechStacks></TechStacks>
      </div>
      <div className="px-4 py-8 bg-black">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
