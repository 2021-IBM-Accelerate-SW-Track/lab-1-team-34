import React from "react";
import Header from "../../component/header/header"; // no target file, targets index.js
import Input from "../../component/Input";
import "../../component/fontawesome";

function page(props) {
  return (
    <div>
      <Header />
      <Input />
    </div>
  );
}

export default page;
