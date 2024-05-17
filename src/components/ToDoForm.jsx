const ToDoForm = ({ setLists }) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();

        // form 태그가 new ForData라는 새로운 API에 들어와서 forData로 값을 받음.
        // 이 때 new formData() 안에는 html 폼이 들어가야 하기 때문에 event.target을 받음.
        // console.log(event.target);
        const formData = new FormData(event.target);
        const title = formData.get("title");
        const content = formData.get("content");
        // console.log(title, content);

        if (!title.trim() || !content.trim()) {
            return alert("제목과 내용을 입력해주세요.");
        }

        // 새롭게 만들어질 form 객체
        const nextList = {
            id: Date.now(),
            title,
            content,
            isDone: false,
        };

        // useState의 비동기성(잠재적인 오류의 위험)을 막고,
        // 추가적으로 lists(props)를 가져오지 않기 위해,
        // 익명콜백함수를 사용해서 기존의 값을 가져와서 넣어줌.
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
