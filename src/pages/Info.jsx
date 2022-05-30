import React, { useState } from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="TotalInfoPage">
      <div className="Rule">
        <div className="RuleTitle">
          <h2> 🚩 대회 안내</h2>
          {/* ▼ */}
        </div>
        <div className="RuleContent">
          <p>
            <b>경기 날짜</b> : 9월, 11월 매주 <b>수요일 8:00 ~ 10:00 PM</b>
          </p>
          <p>
            <b>경기 시간</b> : 전반<b>(25분)</b> / 휴식
            <b>(10분)</b> / 후반
            <b>(25분)</b>
          </p>
          <p>
            <b>장소</b> : 카이스트 <b>북측 운동장, 대운동장</b>
          </p>
          <hr />
          <p>
            <b>규칙</b>
            <ul>
              <li>
                <p>경기 시간을 제외한 모든 부분은 정식 축구 경기 룰을 따름 </p>
              </li>
              <li>
                <p>
                  총 8팀 참가, 총 7라운드로 1라운드에 4경기씩 총 <b>28경기</b>{" "}
                  진행
                </p>
              </li>
              <li>
                <p>경기 시작 전에 각 팀 주장은 라인업을 주최 측에 전달</p>
              </li>
              <li>
                <p>경기가 끝난 후 각 팀 주장은 경기 결과를 주최 측에 전달</p>
              </li>
            </ul>
          </p>
        </div>
        <img
          src="leftgoalpost.png"
          className="leftgoalpost"
          alt="IMG Not Founded"
        />
      </div>
      <div className="Plan">
        <div className="PlanTitle">
          <h2>🚩 대회 운영</h2>
        </div>
        <div className="PlanContent">
          <p>
            참가비: 팀당 <b>15 만원</b>
          </p>
          <p>
            총 금액: <b>120 만원</b>
          </p>
          <hr />
          <p>
            조명비 : 총 <b>28 만원</b> ( 총 28경기, 시간 당 만원 )
          </p>
          <p>
            심판비 : 총 <b>112 만원</b> ( 총 28경기, 주심 <b>1명</b>, 부심{" "}
            <b>2명</b>, 대기심 <b>1명</b>, 시간 당 만원 )
          </p>
          <p>
            상금 : 총 <b>30 만원</b> ( 1등: 15 만원, 2등: 10 만원, 3등: 5 만원 ){" "}
          </p>
          <p> 물품 : 공, 부심기, 휘슬, 타이머, 카드, 조끼 등 </p>
        </div>
        <img src="goalpost.png" className="goalpost" alt="IMG Not Founded" />
      </div>
    </div>
  );
};

export default Info;
