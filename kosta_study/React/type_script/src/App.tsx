import { useEffect, useState } from "react"
import { ListItem } from "./component/ListItem";
import axios from "axios";
import type { User } from "./types/user";

// type User = {
//     id: number;
//     name: string;
//     age: number;
//     personalColor: string;
// }

 export const App = () => {
    //얻는 사용자 정보
    // const [users, setUsers] = useState([]); <--삭제
    const [users, setUsers] = useState<User[]>([]);

    //화면어ㅔ 표시될 때 사용자 정보 얻기
    useEffect(() => {
        // axios.get("https://example.com/users").then((res) => {setUsers(res.data);
        axios.get<User[]>("https://example.com/users").then((res) => {                    
            setUsers(res.data);
        })
    }, []);

    return (
        <>
            {users.map(user => (
                <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor} hobbies={user.hobbies} />
            ))}
        </>
    )
}