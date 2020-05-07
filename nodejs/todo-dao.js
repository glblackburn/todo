// https://github.com/uuidjs/uuid
const uuidv1 = require('uuid/v1')

var todoList = []

function createId() {
    return uuidv1()
}

function add( todoText ) {
    var newTodo = {}
    newTodo.id = createId()
    newTodo.text = todoText
    todoList.push(newTodo)
    return newTodo
}

function getById( id ) {
    var todo = todoList.find(a => a.id === id)
    console.log(`getById: id=[${id}] todo=[${todo}]`)
    return todo
}

function deleteById( id ) {
    var todo = getById(id)
    console.log(`removeById: id=[${id}] todo=[${todo}]`)
    var newTodoList = todoList.filter(function(value, index, arr){ return value.id != id;})
    todoList = newTodoList
    return todo
}

function getTodoList() {
    return todoList
}

exports.add = add;
exports.get = getById;
exports.deleteById = deleteById;
exports.getTodoList = getTodoList;
