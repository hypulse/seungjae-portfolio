import { useCallback, useEffect, useRef, useState } from "react";
import wordmark from "./wordmark.png";
import Footer from "./components/Footer";
import AboutMe from "./components/Sections/AboutMe";
import Gallery from "./components/Sections/Gallery";
import Career from "./components/Sections/Career";
import LinkedIn from "./components/Sections/LinkedIn";
import Links from "./components/Sections/Links";
import TechStacks from "./components/Sections/TechStacks";
import Work from "./components/Sections/Work";
import LearnMore from "./components/LearnMore";

const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="" strokeLinejoin="" d="M4 6h16M4 12h16M4 18h16" />
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
    <path strokeLinecap="" strokeLinejoin="" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function useStableRef() {
  const ref = useRef();
  const setRef = useCallback((node) => {
    if (node !== null) {
      ref.current = node;
    }
  }, []);

  return [setRef];
}

function App() {
  const aboutRef = useRef();
  const careerRef = useRef();
  const galleryRef = useRef();
  const linksRef = useRef();
  const skillsRef = useRef();
  const menuRef = useRef();
  const postRef = useStableRef();

  const [openMenu, setOpenMenu] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [post, setPost] = useState();

  useEffect(() => {
    const pageShow = () => {
      if (openPost === true && window.location.hash !== "#work") {
        document.body.classList.remove("stop-scroll");
        postRef.current.classList.remove("translate-y-0");
        postRef.current.classList.remove("visible");
        postRef.current.classList.add("translate-y-full");
        postRef.current.classList.add("invisible");
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
        menuRef.current.classList.remove("translate-x-0");
        menuRef.current.classList.remove("visible");
        menuRef.current.classList.add("translate-x-full");
        menuRef.current.classList.add("invisible");
      } else {
        document.body.classList.add("stop-scroll");
        menuRef.current.classList.remove("translate-x-full");
        menuRef.current.classList.remove("invisible");
        menuRef.current.classList.add("translate-x-0");
        menuRef.current.classList.add("visible");
      }
      return !prev;
    });
  };

  const togglePost = (post) => {
    setPost(post);
    setOpenPost((prev) => {
      if (prev) {
        document.body.classList.remove("stop-scroll");
        postRef.current.classList.remove("translate-y-0");
        postRef.current.classList.remove("visible");
        postRef.current.classList.add("translate-y-full");
        postRef.current.classList.add("invisible");
        window.history.pushState(null, null, " ");
      } else {
        document.body.classList.add("stop-scroll");
        postRef.current.classList.remove("translate-y-full");
        postRef.current.classList.remove("invisible");
        postRef.current.classList.add("translate-y-0");
        postRef.current.classList.add("visible");
        window.history.pushState(null, null, "#work");
      }
      return !prev;
    });
  };

  const scroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* side menu */}
      <div
        className="fixed top-0 right-0 z-30 h-full transition-[transform, visibility] duration-200 translate-x-full bg-white shadow w-80 invisible"
        ref={menuRef}
      >
        <div className="flex items-center h-16 px-4 border-b">
          <div className="grow"></div>
          <div className="p-2 text-gray-500" onClick={toggleMenu}>
            {closeIcon}
          </div>
        </div>
        <div className="flex flex-col px-8 py-6 space-y-6 font-semibold text-gray-500">
          <div
            onClick={() => {
              toggleMenu();
              scroll(aboutRef);
            }}
          >
            Home
          </div>
          <div
            onClick={() => {
              toggleMenu();
              scroll(linksRef);
            }}
          >
            Archives
          </div>
          <div
            onClick={() => {
              toggleMenu();
              scroll(galleryRef);
            }}
          >
            Gallery
          </div>
          <div
            onClick={() => {
              toggleMenu();
              scroll(careerRef);
            }}
          >
            Career
          </div>
          <div
            onClick={() => {
              toggleMenu();
              scroll(skillsRef);
            }}
          >
            Skills
          </div>
        </div>
      </div>
      {/* work */}
      <div
        className="fixed top-0 z-30 w-full h-full transition-[transform, visibility] duration-200 translate-y-full bg-white invisible flex flex-col"
        ref={postRef}
      >
        <div className="h-16 border-b shrink-0">
          <div className="flex items-center h-full px-4 mx-auto max-w-7xl">
            <div className="grow"></div>
            <div className="p-2 text-gray-500" onClick={togglePost}>
              {closeIcon}
            </div>
          </div>
        </div>
        <div className="w-full px-6 py-8 mx-auto overflow-scroll max-w-7xl grow">
          <LearnMore></LearnMore>
        </div>
      </div>
      {/* nav bar */}
      <nav className="fixed top-0 z-20 w-full h-16 bg-white border-b">
        <div className="flex items-center h-full px-4 mx-auto space-x-12 max-w-7xl">
          <div className="h-6 shrink-0">
            <img alt="" src={wordmark} className="h-full"></img>
          </div>
          <div className="grow"></div>
          <div className="p-2 text-gray-500 sm:hidden" onClick={toggleMenu}>
            {menuIcon}
          </div>
          <div
            className="hidden font-semibold text-gray-500 sm:block"
            onClick={() => {
              scroll(aboutRef);
            }}
          >
            Home
          </div>
          <div
            className="hidden font-semibold text-gray-500 sm:block"
            onClick={() => {
              scroll(linksRef);
            }}
          >
            Archives
          </div>
          <div
            className="hidden font-semibold text-gray-500 sm:block"
            onClick={() => {
              scroll(galleryRef);
            }}
          >
            Gallery
          </div>
          <div
            className="hidden font-semibold text-gray-500 sm:block"
            onClick={() => {
              scroll(careerRef);
            }}
          >
            Career
          </div>
          <div
            className="hidden font-semibold text-gray-500 sm:block"
            onClick={() => {
              scroll(skillsRef);
            }}
          >
            Skills
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
      <div className="relative -top-16" ref={aboutRef}></div>
      <div className="bg-black">
        <AboutMe></AboutMe>
      </div>
      <div className="relative -top-16" ref={linksRef}></div>
      <div className="px-4 py-16 mx-auto bg-white max-w-7xl">
        <Links></Links>
      </div>
      <div className="relative -top-16" ref={galleryRef}></div>
      <div className="bg-black">
        <Work></Work>
      </div>
      <div className="px-4 py-16 mx-auto bg-white max-w-7xl">
        <Gallery togglePost={togglePost}></Gallery>
      </div>
      <div className="relative -top-16" ref={careerRef}></div>
      <div className="px-4 py-16 bg-zinc-100">
        <div className="mx-auto max-w-7xl">
          <Career></Career>
        </div>
      </div>
      <div className="relative -top-16" ref={skillsRef}></div>
      <div className="px-4 py-16 mx-auto bg-white max-w-7xl">
        <TechStacks></TechStacks>
      </div>
      <div className="px-4 py-16 bg-zinc-700">
        <div className="mx-auto max-w-7xl">
          <LinkedIn></LinkedIn>
        </div>
      </div>
      <div className="px-4 py-16 bg-zinc-800">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
