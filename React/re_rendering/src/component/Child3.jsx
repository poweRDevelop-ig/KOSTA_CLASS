const style = {
    height: "50px",
    backgroundColor: "lightgray"
};

export const Child3 = () => {
    console.log("child3 랜더링");

    return (
        <div style={style}>
            <p>Child3</p>
        </div>
    )
}