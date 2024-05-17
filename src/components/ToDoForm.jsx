const ToDoForm = ({ setLists }) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log(event.target);
        const formData = new FormData(event.target);
        const title = formData.get("title");
        const content = formData.get("content");
        console.log(title, content);

        if (title === "" || content === "") {
            alert("제목과 내용을 입력해주세요.");
            return;
        }

        const nextList = {
            id: Date.now(),
            title,
            content,
            isDone: false,
        };

        setLists((prev) => [nextList, ...prev]);
        event.target.reset();
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="content">Title</label>
            <input type="text" id="content" name="content" />
            <button type="submit">Add</button>
        </form>
    );
};

export default ToDoForm;
