import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Main from "./components/Main"
import Record from "./components/Record"
import Apply from "./components/Apply"
import Info from "./components/Info"

function App() {
  return (
    <>
      <div class = "wrapper">
        <BrowserRouter>
          <nav>
            <li><Link to= "/">대회메인</Link></li>
            <li><Link to= "Record">대회기록</Link></li>
            <li><Link to= "Apply">등록</Link></li>
            <li><Link to= "Information">대회안내</Link></li> 
          </nav>
          <Routes>
            <Route path = "/" element = {<Main />}/>
            <Route path = "Record" element = {<Record />}/>
            <Route path = "Apply" element = {<Apply />}/>
            <Route path = "Information" element = {<Info />}/>
          </Routes>
        </BrowserRouter>
      </div>
      <footer>
          연락처: 010-3377-2903 | 계좌번호: 3021227828171 | 메일: anat0627@kaist.ac.kr
      </footer>
    </>
  );
}

export default App;