import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios'

const reducer = (state, action ) => {
    switch(action.type) {
        case "INCREMENT":
             return {count: state.count + 1, showText: state.showText}
        case "toggleShowText":
             return {count: state.count, showText: !state.showText}
        default:
            return state
    }   
}

const EffectTutorial = () =>{

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() =>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            // console.log(response);
            setData(response.data[0].email);
            console.log("API WAS CALLED");
        });
    }, []);
}

const ReduceTutorial = () => {
    const [state, dispatch] = useReducer(reducer, {count:0 , showText: true})

    return(
        <div>
           <h1> {state.count} </h1>
           {EffectTutorial()}
           <button onClick={() => {

                dispatch({type: "INCREMENT"})
                dispatch({type: "toggleShowText"})

           }}>Click Here</button>
           {state.showText && <p>This is a text</p>}
        </div>
    );
};
 export default ReduceTutorial
