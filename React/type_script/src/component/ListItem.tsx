import type { FC } from "react";
import type { User } from "../types/user";

// type User = {
//     id: number;`
//     name: string;
//     age: number;
//     personalColor: string;
// }

export const ListItem: FC<User> = props => {    //listitem에 타입 함수 컴포넌트 붙인거
    const {id, name, age, personalColor, hobbies} = props;
    return (
        <p style={{color: personalColor}}>
            {id} : {name}({age}) {hobbies?.join(" / ")}
        </p>
    );
};

ListItem.defaultProps = {
    personalColor: "gray"
};