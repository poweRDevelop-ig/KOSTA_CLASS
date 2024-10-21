//import
import { useContext } from "react";
//작성한 context를 임포트
import { AdminFlagContext } from "./providers/AdminFlagProvider";


const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px"
}

export const EditButton = () => {
    const {isAdmin} = useContext(AdminFlagContext);
    //isAdmin이 false일 때(관리자가 아닐 때) 버튼을 비활성화 한다

    // useContext의 인수에 참조할 context를 지정
    //const contextValue = useContext(AdminFlagContext);
    //console.log(contextValue);  //{sampleValue: "테스트"}
    
    return (
        <button style={style} disabled={!isAdmin}>
            수정
        </button>
    )
}