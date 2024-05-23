import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Homepage 입니다.</h1>
      <Link to="/detail/여기에 아무 값이나 입력하세요">
        Detail 페이지로 이동하기
      </Link>
    </div>
  );
};

export default Home;
