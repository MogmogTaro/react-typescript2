import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { Todotype } from "./types/todo";
import { Text } from "./Texs";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "うちだま",
  hobbies: ["映画", "ゲーム"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<Todotype>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<Todotype>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color={"red"} fontSize={"18px"}>
        テキストだよ
      </Text>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
