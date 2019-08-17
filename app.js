fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((data)=> {
    console.log("Api Data", data)
    return fetch('https://jsonplaceholder.typicode.com/todos/1/users')
})
.then((users) => {
    console.log("fetch users", users)
})
.catch((err)=> {
    console.log("rejected", err)
})
.finally(()=> {
    console.log("finally called")
})