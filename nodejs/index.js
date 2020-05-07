const productName = "A better TODO!"
// trying a fancy version following this example.
// https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
// the first version is in index_old.js

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const todo_dao = require('./lib/todo-dao')
const inquirer  = require('./lib/inquirer');

function banner() {
    clear();
    console.log(
	chalk.green(
	    figlet.textSync(productName, { horizontalLayout: 'full' })
	)
    );
}

function showTodos() {
    todo_dao.showTodoList()
}

function addTodo(todo) {
    console.log('Adding TODO:')
    console.log(JSON.stringify(todo, null, '  '));
    todo_dao.add(todo.text);
    console.log('Added TODO:')
}

// TODO: would love to have a spinner added here.
// https://github.com/nathanpeck/clui#spinnerstatustext
function deleteTodos(todos) {
    console.log('Deleting TODOs:')
    console.log(JSON.stringify(todos, null, '  '));
    todos.deletes.forEach(todo => {
	//console.log(todo)
	todo_dao.deleteById(todo)
    })
    console.log('Deleted TODOs:')
}

const run = async () => {
    banner();
    todo_dao.loadTestData()
    var running = true
    while (running) {
	const mainMenu = await inquirer.askMainMenu();
	banner();
	switch (mainMenu.choice) {
	case 'List':
	    showTodos()
            break;
	case 'Create':
	    const todo = await inquirer.askTodoData();
	    addTodo(todo)
            break;
	case 'Delete':
	    const todos = await inquirer.askDeleteTodos(todo_dao.getTodoList());
	    deleteTodos(todos)
            break;
	case 'Quit':
	    running = false
	    console.log('Exiting');
            break;
	default:
            console.log(`Unknown option: '${mainMenu.choice}'`);
            break;
	}
    }
};

run();
