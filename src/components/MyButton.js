import {useState} from 'react';
const MyButton = () =>{

    const [name,setName] = useState("");

    const clickListener = () =>{
        alert("Clicked Me");
    }

    const myTextValue = (e)=>{
        console.log(e);
        console.log(e.target.value);
        setName(e.target.value);
    }

    return(
        <>
            <div onClick={clickListener}>
                Click Me
            </div>
            <input type="text" onChange = {myTextValue} value={name}/>
            <h1>{name}</h1>
        </>
    );
}
export default MyButton;