import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Record from "./pages/Record";
import Match from "./pages/Match";
import Apply from "./pages/Apply";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <nav className="Navbar">
            <li>
              <Link to="/">대회메인</Link>
            </li>
            <li>
              <Link to="Record">대회기록</Link>
            </li>
            <li>
              <Link to="Match">경기일정</Link>
            </li>
            <li>
              <Link to="Apply">등록</Link>
            </li>
            <li>
              <Link to="Information">대회안내</Link>
            </li>
          </nav>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="Record" element={<Record />} />
            <Route path="Match" element={<Match />} />
            <Route path="Apply" element={<Apply />} />
            <Route path="Information" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>
        <p>
          주최측 연락처: 010-3377-2903 | 후원 계좌번호: 3021227828171 | 주최측
          메일: anat0627@kaist.ac.kr | 많은 관심과 참여 부탁드립니다
        </p>
      </footer>
    </>
  );
}

export default App;
