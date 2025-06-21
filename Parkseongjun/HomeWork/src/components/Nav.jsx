import { Link } from "react-router-dom";

export default function Nav() {
  return (
    // 라우터로 페이지 간의 이동 가능
    <nav style={{ textAlign: "center", margin: "20px" }}>
      <Link to="/" style={{ marginRight: "20px" }}>투두 리스트</Link>
      <Link to="/add">등록하기</Link>
    </nav>
  );
}