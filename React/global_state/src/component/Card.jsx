import { EditButton } from "./EditButton"

const style = {
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#e9dbd0",
    dispaly: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};

export const Card = /*prop-->*/() => {
    //const {isAdmin} = props;  //프롭 삭제

    return (
        <div style={style}>
            <p>야마다 타로</p>
            <EditButton />
        </div>
    );
};