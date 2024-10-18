    const todo = {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    }
        
    fetch('https://jsonplaceholder.typicode.com/todos', options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return console.log(data);
    })
    .catch((error) => {
        return console.log(error);
    });
