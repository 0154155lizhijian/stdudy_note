import React from "react";
import Potal from "./PortalTest";

// function ComponentTest(props) {
//   return <h1>hello, 函数组件</h1>;
// }

class PortalComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Potal 组件</h1>
        {/* {
          (()=>{
            if(5>1){
              return <div>函数</div>
            }
          })()
        } */}
        <Potal style={{ background: "#000", color: "#fff" }}>
          <div>这是portal中的文本11</div>
        </Potal>
      </div>
    );
  }
}

export default PortalComponent;
