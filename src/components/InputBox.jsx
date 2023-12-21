import React, {useState} from 'react'
import TextField from '@mui/material/TextField';

const InputBox = ({valueDefault, setInputValueChild}) => {

    const [inputValue, setInputValue] = useState(valueDefault);

    const updateValues = (value) => {
        setInputValueChild(value * 2);
        setInputValue(value);
    }

    return (
        <div className="Home">
            <TextField id="standard-basic" label="Input 1 Filho" variant="standard" value={inputValue}
                       onChange={e => updateValues(e.target.value)} defaultValue={inputValue}/>
        </div>
    )
}

export default InputBox