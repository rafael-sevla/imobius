import React, {useState} from 'react'
import InputBox from "../components/InputBox";

const Home = props => {
    const [inputValueChild, setInputValueChild] = useState();

    return (
        <div className="Home">
            <h1>Início</h1>
            <h2>Bem vindo!</h2>
            <h2>{inputValueChild}</h2>
            <InputBox valueDefault={2} setInputValueChild={setInputValueChild}/>
        </div>
    )
}

export default Home