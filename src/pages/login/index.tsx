import * as React from "react";
// import GridRegister from "../../shared/components/GridRegister/GridRegister";
import Image from "./Image";
import Form from "./Form";
// import '../../stylesGlobal.css';

export default function Index() {

  let path = "/images/baner.svg"

  return (
    <div style={{background: "#0B0B0B", height: "100%" }} >
      {/* <Image path = {path}/> */}
      <Form/>
    </div>
  );
}
