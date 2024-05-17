import ToDoItem from "./ToDoItem";

const ToDoList = ({ lists, title, setLists }) => {
    return (
        <section>
            <h2>{title}</h2>
            <ul>
                {lists.map((list) => {
                    return <ToDoItem key={list.id} list={list} setLists={setLists} />;
                })}
            </ul>
        </section>
    );
};

export default ToDoList;
