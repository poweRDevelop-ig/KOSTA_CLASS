import { Child2 } from "./Child2"
import { Child3 } from "./Child3"
import { memo } from "react";

const style = {
    heihgt: "200px",
    backgroundColor: "lightblue",
    padding: "8px"
};

export const Child1 = memo((props) => {
    console.log("child1 랜더링")

    const {onClickReset} = props;
    
    return (
        <div  style={style}>
            <p>Child1</p>
            {/* 전달되는 함수를 실행하는 버튼 설정 */}
            <button onClick={onClickReset}>리셋</button>
            <Child2 />
            <Child3 />
        </div>
    );
});