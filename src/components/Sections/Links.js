export default function Links() {
  function link() {
    return (
      <div className="px-8 py-6 space-y-4 border">
        <div className="text-xl font-semibold">네이버 블로그</div>
        <div>
          Donec massa lorem, aliquam eu lacus non, interdum rutrum tellus. Donec
          a aliquet augue. Ut.
        </div>
        <div className="text-blue-500">Read my blog</div>
      </div>
    );
  }
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="text-4xl font-semibold">Archives</div>
        <div className="text-xl">
          Vestibulum faucibus hendrerit nunc et accumsan. Donec pharetra ut leo
          sed pellentesque.
        </div>
      </div>

      <div className="sm:flex sm:space-x-8">
        <div className="basis-0 grow">{link()}</div>
        <div className="basis-0 grow">
          <div className="pt-8 sm:pt-0">{link()}</div>
        </div>
      </div>

      <div className="sm:flex sm:space-x-8">
        <div className="basis-0 grow">{link()}</div>
        <div className="basis-0 grow">
          {/* <div className="pt-8 sm:pt-0">{link()}</div> */}
        </div>
      </div>

      {/* <div className="p-4 space-y-4 border">
        <div className="text-xl font-semibold">네이버 블로그</div>
        <div className="text-lg">
          JetBrains Rider is a fast and powerful C# editor for Unity that runs
          on Windows, Mac, and Linux.
        </div>
        <div className="text-blue-500 ">Read my blog</div>
      </div>

      <div className="p-4 space-y-4 border">
        <div className="text-xl font-semibold">GitHub</div>
        <div className="text-lg">
          JetBrains Rider is a fast and powerful C# editor for Unity that runs
          on Windows, Mac, and Linux.
        </div>
        <div className="text-blue-500 ">Explore repositories</div>
      </div>

      <div className="p-4 space-y-4 border">
        <div className="text-xl font-semibold">네이버 블로그</div>
        <div className="text-lg">
          JetBrains Rider is a fast and powerful C# editor for Unity that runs
          on Windows, Mac, and Linux.
        </div>
        <div className="text-blue-500 ">Read my blog</div>
      </div> */}
    </div>
  );
}
