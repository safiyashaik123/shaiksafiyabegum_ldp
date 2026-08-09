import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

function CompareEffect() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = useState(0);


  
  // useEffect(() => {
  //   console.log("useEffect Executed");

  //   if (boxRef.current) {
  //     const measuredWidth = boxRef.current.offsetWidth;
  //     setWidth(measuredWidth);
  //   }
  // }, []);
  

  useLayoutEffect(() => {
    console.log("useLayoutEffect Executed");

    if (boxRef.current) {
      const measuredWidth = boxRef.current.offsetWidth;
      setWidth(measuredWidth);
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useEffect vs useLayoutEffect</h2>

      <div
        ref={boxRef}
        style={{
          width: "300px",
          padding: "20px",
          border: "2px solid blue",
          backgroundColor: "lightblue",
          marginBottom: "20px",
        }}
      >
        React Hooks Demo
      </div>

      <h3>Measured Width : {width}px</h3>
    </div>
  );
}

export default CompareEffect;