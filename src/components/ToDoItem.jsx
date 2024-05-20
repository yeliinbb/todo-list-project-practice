const ToDoItem = ({ list, setLists }) => {
    // console.log(list);
    const { title, content, id, isDone } = list;

    const deleteButton = () => {
        // 선택한 id를 제외한 나머지 배열만 새롭게 넣어줌.
        setLists((prev) => prev.filter((list) => list.id !== id));
    };
    const toggleButton = () => {
        //todo.id와 내가 선택한 요소의 id가 일치하면 isDone을 반대로 바꿔줌
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
