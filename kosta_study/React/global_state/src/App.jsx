//import { useState } from "react"
import { Card } from "./component/Card"
import { useContext } from "react";
import { AdminFlagContext } from "./component/providers/AdminFlagProvider";

export const App = () => {
    //관리자 플래그
    //const [isAdmin, setIsAdmin] = useState(false);
    const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);

    //전환 클릭시
    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <>
            {/* 관리자 플래그가 true일 때와 그렇지 않을 때 문자열 출력 구분 */}
            {isAdmin ? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
            <button onClick={onClickSwitch}>전환</button>
            <Card isAdmin={isAdmin} />
        </>
    );
}; 