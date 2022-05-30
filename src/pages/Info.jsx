import React, { useState } from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="TotalInfoPage">
      <div className="Rule">
        <div className="RuleTitle">
          <h2> 🚩 대회 정보</h2>
          {/* ▼ */}
        </div>
        <div className="RuleContent">
          <p>경기 날짜 : 9월 11월 매주 수요일 8:00 ~ 10:00 PM(추후 공지)</p>
          <p>경기 시간 : 전반(25분) / 휴식(10분) / 후반(25분) </p>
          <p>장소 : 북측 운동장, 대운동장</p>
          <p>총 8팀 참가, 7라운드, 총 28경기 진행</p>
          <p>규칙: 경기 시간을 제외하고 정식 축구 경기 룰을 따름</p>
          <p>경기 시작 전에 각 팀 주장은 라인업을 주최측에 제출 부탁</p>
          <p>경기가 끝난 후 각 팀 주장은 경기 결과를 주최측에 전달</p>
        </div>
      </div>
      <div className="Plan">
        <div className="PlanTitle">
          <h2>🚩 대회 운영</h2>
        </div>
        <div className="PlanContent">
          <p>참가비: 팀당 15만원</p>
          <p>총금액: 120만원</p>
          <p>구장 예약비: 0원</p>
          <p>조명비: 총 28만원(총 28경기, 만원/시간)</p>
          <p>
            심판비: 총 112만원(총 28경기, 주심 1, 부심 2, 대기심 1, 만원/시간)
          </p>
          <p>상금: 총 30만원(1등: 15만원, 2등: 10만원, 3등: 5만원)</p>
          <p>물품 대여비: 0원</p>
          <p>
            필요 물품: 공, 부심기, 휘슬, 타이머, 카드, 조끼 등 교내 축구
            동아리와 협력하여 대여
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
