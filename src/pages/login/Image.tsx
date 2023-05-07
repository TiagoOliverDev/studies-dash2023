import * as React from "react";
import GridRegister from "../../shared/components/GridRegister/GridRegister";


export default function Image(props: any) {
  return (
    <div style={{ height: "100vh", backgroundColor: "#0B0B0B" }}>
      <div       
       style={{
          position: "absolute",
          width: "700px",
          height: "100%",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          overflow: 'hidden'
        }}>
          
        <img
          src={props.path}
          alt="Imagem"
          style={{
            height: "100%",     
            borderRadius: "40px 0 0 40px",
          }}
        />
      </div>
    </div>
  );
}
