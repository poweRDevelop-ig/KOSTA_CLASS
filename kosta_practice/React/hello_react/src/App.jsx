import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

    const onClickButton = () => {
        alert();
    }

    return(
        <div>
            {console.log("TEST")}
            <h1 style={{ color : "red" }}>안녕하새우</h1>
            <ColoredMessage color="blue">안녕하시봉</ColoredMessage>
            <ColoredMessage color="pink">안녕하핑크퐁</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
        </div>
    )
}