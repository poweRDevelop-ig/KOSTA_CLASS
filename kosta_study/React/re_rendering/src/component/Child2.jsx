const style = {
    height: "50px",
    backgroundColor: "lightgray"
};

export const Child2 = () => {
    console.log("child2 랜더링");

    return (
        <div style={style}>
            <p>Child2</p>
        </div>
    )
}