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

    const workingLists = lists.filter((list) => !list.isDone);
    const doneLists = lists.filter((list) => list.isDone);

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
