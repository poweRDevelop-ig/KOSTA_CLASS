
import { useState } from "react";
import { useEffect } from "react";
import {ColoredMessage} from "./components/ColoredMessage";

 //컴포넌트는 jsx로 작업하는게 국룰
 
 export const App = () => {     //익스포트는 컴포넌트를 밖으로 보낸다

    console.log("랜더링")

    //State 정의
    const[num, setNum] = useState(0);   //num은 상태값 state는..? 초기값을(0) 넣어줘야함
    //버튼 클릭 시 state를 증가(카운트업)   //매번 컴포넌트가 재랜더링을 함
    const onClickButton = () => {
        setNum(num+1);
    }
    useEffect(() => {
        alert();
    },[num])    //num값이 실행되면 alert가 실행됨

    //리턴하기f 전에 이벤트를 생성하고나서 리턴.
    // const onClickButton = () => {
    //     alert();
    // }
    // 객체로 넣는다
    // const contentStyle = {
    //     color : "blue",
    //     fontSize : "20px"
    // }

    // const contentPinkStyle ={
    //     color : "pink",
    //     fontSize: "20px"
    // }

    return(
        <>
            {console.log("TEST")}
            <h1 style={{ color : "red" }}>안녕마심?</h1> {/*css를 적용할 때 js의 객체로 들어감*/}
            <ColoredMessage color="blue">잘지내라고답할걸모두다</ColoredMessage>
            {/* <p style={contentStyle}>자알 지내시나요?? 저는 애매합니다</p> */}
            {/* <p style={contentPinkStyle}>자알 지내시나요?? 저는 애매합니다2</p> */}
            <ColoredMessage color="pink">내가잘사는줄다아니까</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
        </>
        
    );
};