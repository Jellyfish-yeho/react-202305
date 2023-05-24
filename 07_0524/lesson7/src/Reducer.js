//액션에 따라 상태값을 업데이트 하는 것이 state와의 차이점

function Reducer() {
  function counterReducer(state, action) {
    if (action === "INCREMENT") {
      return state + 1;
    } else if (action === "DECREMENT") {
      return state - 1;
    } else {
      return state;
    }
  }

  let state = 0;
  function INCREMENT() {
    state = counterReducer(state, "INCREMENT");
    console.log(state);
  }
  function DECREMENT() {
    state = counterReducer(state, "DECREMENT");
    console.log(state);
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={DECREMENT}>DECREMENT</button>
      <button onClick={INCREMENT}>INCREMENT</button>
    </div>
  );
}

export default Reducer;
