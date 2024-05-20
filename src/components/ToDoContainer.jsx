import { useState } from "react";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoContainer = () => {
    const initialState = [
        { id: 0, title: "test1", content: "test1", isDone: false },
        { id: 1, title: "test1", content: "test1", isDone: true },
    ];
    const [lists, setLists] = useState(initialState);

    // 다른 값의 데이터 전달해주기
    const workingLists = lists.filter((list) => !list.isDone); // isDone이 false인 것만 담긴 배열
    const doneLists = lists.filter((list) => list.isDone); // isDone이 true인 것만 담긴 배열

    return (
        <div>
            <Header />
            <ToDoForm setLists={setLists} />
            <div>
                <ToDoList lists={workingLists} title="Working" setLists={setLists} />
                <ToDoList lists={doneLists} title="Done" setLists={setLists} />
            </div>
        </div>
    );
};

export default ToDoContainer;
