import { useEffect, useRef } from "react";

//FadeIn Hook
const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      console.log("NOT NUMBER");
      return;
    }
    if (element.current) {
      console.log(element);
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

function FadeIn() {
  const fade1 = useFadeIn(2);
  const fade2 = useFadeIn(2, 2);

  return (
    <div>
      <h1 {...fade1}>Hello 1</h1>
      {/* <h1 ref={fade1.ref} style={fade1.style}>
        Hello 1
      </h1> */}
      <h2 {...fade2}>Hello 2</h2>
    </div>
  );
}

export default FadeIn;
