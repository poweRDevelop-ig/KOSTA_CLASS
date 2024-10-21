// export const ColoredMessage = (props) => {
//     console.log(props);

//     const {color, children} =props;
export const ColoredMessage = ({color, children}) => {
    // console.log(props);

    const contentStyle = {
        color,// color : color,// color : props.color,
        fontSize : "20px"
    };


    // return <p style={contentStyle}>{props.message}</p>
    // return <p style={contentStyle}>{props.children}</p>
    return <p style={contentStyle}>{children}</p>
}

//[[[  최종  ]]]
// export const ColoredMessage = ({color, children}) => {

//     const contentStyle = {
//         color,
//         fontSize : "20px"
//     };

//     return <p style={contentStyle}>{children}</p>
// }

// [[React에서 Prop이란 무엇일까요?]]
// Prop은 Property의 줄임말로, React 컴포넌트에서 부모 컴포넌트에서 자식 컴포넌트로 
// 데이터를 전달하는 데 사용되는 속성입니다. 마치 부모가 자식에게 선물을 주는 것처럼, 
// 부모 컴포넌트가 자식 컴포넌트에게 필요한 정보를 제공하는 것이죠.

// [[Prop의 특징]]
// 단방향 데이터 흐름: 부모 컴포넌트에서 자식 컴포넌트로 데이터가 전달되는 일방향입니다. 
// 즉, 자식 컴포넌트에서 부모 컴포넌트의 props를 직접 수정할 수 없습니다.
// 읽기 전용: 자식 컴포넌트는 props의 값을 읽어서 사용할 수 있지만, 값을 변경할 수는 없습니다.
// 재사용성: props를 사용하면 컴포넌트를 재사용하기 쉽습니다. 동일한 컴포넌트에 
// 다른 props를 전달하여 다양한 형태로 활용할 수 있습니다.