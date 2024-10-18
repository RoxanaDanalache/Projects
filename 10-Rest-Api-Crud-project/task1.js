const fetchToDoList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const toDoList = await response.json();
    return toDoList;
};

fetchToDoList().then((toDoList) => console.log(toDoList));