import { useLayoutEffect, useState, useRef } from "react";

function C_UseLayoutEffect() {
  const boxRef = useRef(null); // yaha pr refrence variable bna rhe hai jo ki div me set kiye hai
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(boxRef.current.clientHeight) // yaha pr boxRef se div me se refrense variable de rhe hai aur current.clientHeight js ka method ha jo element ka hight lete hai.
  }, []);

  return (
    <div>
      <div>
        <div ref={boxRef} style={{ height: "70px", width: "200px", background: "#eee" }}>
          Hello wrold measure me
        </div>
        <p>Height: {height}</p>
      </div>
    </div>
  );
}

export default C_UseLayoutEffect;
