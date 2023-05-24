import { useReducer } from "react";

function UseReducer(){
    function reducer(state, action){
        switch (action.type){
            case "INCREMENT" :
                return state + action.step
            case "DECREMENT" : 
                return state - action.step
            default : 
                return state;
        }
    }
    //dispatch : action을 발생시키는 함수
    const [number, dispatch] = useReducer(reducer, 0)
    const onIncrease = () => {
        dispatch({type : "INCREMENT", step: 2})
    }
    const onDecrease = () => {
        dispatch({type: "DECREMENT", step: 5})
    }

    return (
        <div>
        <h1>{number}</h1>
        <button onClick={onDecrease}>DECREMENT -5</button>
        <button onClick={onIncrease}>INCREMENT +2</button>
      </div>
    )
}

export default UseReducer