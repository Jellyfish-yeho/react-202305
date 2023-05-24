import { useState } from "react"

//input 검증 hook : 초기값 Mr., @입력 불가
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue)
    const onChange = event => {
        const {
            target : {value}
        } = event
        let willUpdate = true;
        if(typeof validator == "function"){
            willUpdate = validator(value)
        }
        if(willUpdate){
            setValue(value)
        }
    }
    return {value, onChange}
}


function Input (){
    const note = (value) => !value.includes("@")
    const name = useInput("Mr.", note)
    return (
        <div>
            <h1>Input</h1>
            <input type="text" placeholder="Input name..." {...name}/>
        </div>
    )
}

export default Input