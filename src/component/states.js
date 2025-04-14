import { useState } from "react";

const States = () =>{

    // useState is a hook that allows you to add state to a functional component.

    const [likeCount, setLikeCount] = useState(0);
    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');

    const handleUserName = (e) =>{
        console.log(userName)
        setUserName(e.target.value);
    }

    const handleEmail = (e) =>{
        setUserEmail(e.target.value)
    }

    const displayValues = () =>{

    }

    const handleLike = () =>{
        let currentCount = likeCount + 1;
        setLikeCount(currentCount);
        //Network call to update the like count in the database
    }

    return(
        <>
            <div>Today's Post</div>
            <div>Current Likes {likeCount}</div>
            <div><button onClick = {()=>handleLike()}>Like Me</button></div>
            <div> Enquiry Form</div>
            <div>

                <form>
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text" id="name" name="name" onChange={(e)=>handleUserName(e)} value={userName}/><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" name="email" onChange={(e)=>handleEmail(e)} value={userEmail}/><br/>
                    <button>Submit</button>
                </form>
                <h1>User Name : {userName}</h1>
                <h1>User Email : {userEmail}</h1>

            </div>
            <h2>IPL Match,</h2>
            <p>IPL is a cricket tournament held in India every year. It is one of the most popular T20 leagues in the world.</p>
            <h2>World Cup</h2>
            <p>The ICC Cricket World Cup is the international championship of One Day International (ODI) cricket. It is organized by the International Cricket Council (ICC).</p>
            <h2>Test Match</h2>
            <p>A Test match is the longest form of the sport of cricket. It is played over five days between two teams, each with two innings.</p>
            <h2>T20 Match</h2>
            <p>A T20 match is a form of limited overs cricket in which each team has a single innings and bats for a maximum of 20 overs.</p>
        </>
    );
}
export default States;
    