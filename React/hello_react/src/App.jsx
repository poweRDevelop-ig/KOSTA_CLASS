
import {ColoredMessage} from "./components/ColoredMessage";

 //컴포넌트는 jsx로 작업하는게 국룰
 
 export const App = () => {     //익스포트는 컴포넌트를 밖으로 보낸다

    //리턴하기f 전에 이벤트를 생성하고나서 리턴.
    const onClickButton = () => {
        alert();
    }
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
        <div>
            {console.log("TEST")}
            <h1 style={{ color : "red" }}>안녕마심?</h1> {/*css를 적용할 때 js의 객체로 들어감*/}
            <ColoredMessage color="blue">잘지내라고답할걸모두다</ColoredMessage>
            {/* <p style={contentStyle}>자알 지내시나요?? 저는 애매합니다</p> */}
            {/* <p style={contentPinkStyle}>자알 지내시나요?? 저는 애매합니다2</p> */}
            <ColoredMessage color="pink">내가잘사는줄다아니까</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
        </div>
        
    );
};