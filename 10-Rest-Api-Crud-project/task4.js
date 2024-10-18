const updateTodo = {
    userId:1,
    id:1,
    title: "et porro tempora",
    completed: false
}

const options = {
    method: 'PUT',
    body: JSON.stringify(updateTodo),
    headers: {
        'Content-Type': 'application/json',
    },    
}
    
fetch("https://jsonplaceholder.typicode.com/todos/" + updateTodo.id, options)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));

