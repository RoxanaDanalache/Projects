const fetchToDo = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const todos = await response.json();
        return todos;
    } catch (error) {
        console.log(error);
    }
};

fetchToDo(1).then((todos) => console.log(todos));


