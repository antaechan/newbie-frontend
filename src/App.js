import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
      <div class = "wrapper">
        <header>Header</header>
        <article>
          <ul class = "navbar"> 
            <li><a href = "">대회메인</a></li>
            <li><a href = "">대회중계</a></li>
            <li><a href = "">등록</a></li>
            <li><a href = "">대회안내/규정</a></li>
          </ul>
        </article>
      </div>
      <footer>
        <address>
          연락처: 010-3377-2903 | 계좌번호: 3021227828171 | 메일: anat0627@kaist.ac.kr
        </address>
      </footer> 
    </>
  );
}

export default App;