import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function CountPage() {
    const dispatch = useDispatch()
    const {sum} = useSelector(state => state)

    const [number1, setNumber1] = useState({num1: 0})
    const [number2, setNumber2] = useState({num2: 0})

    const plus = () => {
        dispatch({
            type: "PLUS",
            num1: number1,
            num2: number2
        })
        if(number1.num1 === 0){
            alert("number1 пустое")
        }
        else if (number2.num2 === 0){
            alert("number2 пустое")
        }
    };

    const minus = () => {
        dispatch({
            type: "MINUS",
            num1: number1,
            num2: number2
        })
        if(number1.num1 === 0){
            alert("number1 пустое")
        }
        else if (number2.num2 === 0){
            alert("number2 пустое")
        }
    };

    const umnojenie = () => {
        dispatch({
            type: "M",
            num1: number1,
            num2: number2
        })
        if(number1.num1 === 0){
            alert("number1 пустое")
        }
        else if (number2.num2 === 0){
            alert("number2 пустое")
        }
    };

    const delenie = () => {
        dispatch({
            type: "D",
            num1: number1,
            num2: number2
        })
        if(number1.num1 === 0){
            alert("number1 пустое")
        }
        else if (number2.num2 === 0){
            alert("number2 пустое")
        }
    };

    return (
        <>
            <div>
                <input type="number" placeholder="number1" name="num1" onChange={(event) => setNumber1(event.target.value)} className="input"/>
                <input type="number" placeholder="number2" name="num2" onChange={(event) => setNumber2(event.target.value)}/>
            </div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={umnojenie}>*</button>
            <button onClick={delenie}>/</button>
            <h1>{sum}</h1>
        </>
    );
}

export default CountPage;