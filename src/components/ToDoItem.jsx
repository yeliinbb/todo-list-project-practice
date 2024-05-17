const ToDoItem = ({ list, setLists }) => {
    // console.log(list);
    const { title, content, id, isDone } = list;

    const deleteButton = () => {
        setLists((prev) => prev.filter((list) => list.id !== id));
    };
    const toggleButton = () => {
        setLists((prev) => prev.map((list) => (list.id === id ? { ...list, isDone: !list.isDone } : list)));
    };

    return (
        <li>
            <h2>{title}</h2>
            <p>{content}</p>
            <div>
                <button onClick={deleteButton}>Delete</button>
                <button onClick={toggleButton}>{isDone ? "Cancel" : "Complete"}</button>
            </div>
        </li>
    );
};

export default ToDoItem;
