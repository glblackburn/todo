const uuidv1 = require('uuid/v1')
const sprintf = require('sprintf-js').sprintf

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
    //console.log(`getById: id=[${id}] todo=[${todo}]`)
    return todo
}

function deleteById( id ) {
    var todo = getById(id)
    //console.log(`removeById: id=[${id}] todo=[${todo}]`)
    var newTodoList = todoList.filter(function(value, index, arr){ return value.id != id;})
    todoList = newTodoList
    return todo
}

function getTodoList() {
    return todoList
}

function showTodoList() {
    var format = '%-40s | %-20s'
    console.log(sprintf(format, 'ID','Text'))
    for (var i = 0 ; i < todoList.length ; i++) {
	console.log(sprintf(format, todoList[i].id, todoList[i].text))
    }
}

function loadTestData() {
    add("test data 1")
    add("test data 2 complete the about function and add to menu options.")
    add("test data 3 add a spinner to delete")
    add("test data 4")
}

exports.add = add;
exports.get = getById;
exports.deleteById = deleteById;
exports.getTodoList = getTodoList;
exports.showTodoList = showTodoList;
exports.loadTestData = loadTestData;
