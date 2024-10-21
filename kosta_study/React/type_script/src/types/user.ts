export type User = {
    id: number;
    name: string;
    age: number;
    personalColor?: string; //?는 생략 가능하다는 의미
    hobbies?: string[];
}