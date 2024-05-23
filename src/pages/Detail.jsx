import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(`Detail Page ID: ${id}`);

  return (
    <div>
      <h1>Detail Page입니다.</h1>
      <p>Id: {id}</p>
    </div>
  );
};

export default Detail;
