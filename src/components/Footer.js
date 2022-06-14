export default function Footer() {
  return (
    <div className="text-center text-white">
      <div className="flex flex-wrap justify-center space-x-3">
        <div className="shrink-0">이메일</div>
        <div className="shrink-0">깃허브</div>
        <div className="shrink-0">블로그</div>
      </div>
      <div>&copy;&nbsp;{new Date().getFullYear()}&nbsp; Hwang Seungjae</div>
    </div>
  );
}
