// function Sample(){
//     return(
//         <>
//             <h3>I am from the Sample JS</h3>
//         </>
//     );
// }

const Sample = (props) =>{

    let style = {
        backgroundColor:"#FF0000",
        color:"#FFFFFF",
        padding:16,
        textAlign:"center",
    };

    let details = {
        "name":"Dhanusree",
        "age":23,
        "address":"CBE"
    };

    

    console.log(props);
    return (
        <>
            <h1>My Name is : {details.name}</h1>
            <div style={style}>{5+5}</div>
            <h1 style={style}>{props.myname}</h1>
            {parseInt(props.age)+parseInt(props.age)}
            {/* <h1>{props.age}+{props.age}</h1> */}
            <h2 style={style}>{props.address}</h2>
            <h2>I am from the Sample ES6 JS</h2>
        </>
    );
}

//Lambda Expressions
export default Sample;