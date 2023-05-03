import * as React from "react";
// import GridRegister from "../../shared/components/GridRegister/GridRegister";
import Image from "./Image";
import Form from "./Form";

export default function Index() {

  let path = "/images/baner.svg"

  return (
    <div>
      <Image path = {path}/>
      <Form />
    </div>
  );
}
