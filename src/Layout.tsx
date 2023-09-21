import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div id="layout">
      {/* 링크들이 들어가는 곳 */}
      <nav>
        <ul
          style={{ display: "flex", gap: "40px" }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>
      {/* 세부 화면들이 나오는 곳 */}
      <main>
        {/* 세부경로의 컴포넌트들이 로딩위치 */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
