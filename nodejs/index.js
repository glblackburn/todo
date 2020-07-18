const productName = "A Better TODO!"
// trying a fancy version following this example.
// https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
// the first version is in index_old.js

const npm_libraries = [];
const chalk = require('chalk');
npm_libraries.push({name: 'chalk'})
const clear = require('clear');
npm_libraries.push({name: 'clear'})
const figlet = require('figlet');
npm_libraries.push({name: 'figlet', note: 'figlet font options: http://patorjk.com/software/taag/#p=testall&h=0&v=0&f=Rectangles&t=A%20Better%20TODO!'})

const todo_dao = require('./lib/todo-dao')
const inquirer  = require('./lib/inquirer');


function banner() {
    clear();
    console.log(
	chalk.green(
	    figlet.textSync(productName, {
		font: 'Big Money-se',
		horizontalLayout: 'full' })
	)
    );
}

function showAbout() {
    console.log('node.js npm libraries')
    npm_libraries.forEach(lib => {
	console.log(`  ${lib.name}`)
	console.log(`    ${lib.note}`)
    })
    
    console.log('figlet font options: http://patorjk.com/software/taag/#p=testall&h=0&v=0&f=Rectangles&t=A%20Better%20TODO!')
}

function showTodos() {
    console.log('List the TODOs')
    todo_dao.showTodoList()
}

function addTodo(todo) {
    console.log('Create a TODO')
    console.log(JSON.stringify(todo, null, '  '));
    todo_dao.add(todo.text);
    console.log('TODO Created')
}

// TODO: would love to have a spinner added here.
// https://github.com/nathanpeck/clui#spinnerstatustext
function deleteTodos(todos) {
    console.log('Deleting TODOs')
    console.log(JSON.stringify(todos, null, '  '));
    todos.deletes.forEach(todo => {
	//console.log(todo)
	todo_dao.deleteById(todo)
    })
    console.log('TODOs Deleted')
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
	case 'About':
	    showAbout()
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
            console.log(`TODO: '${mainMenu.choice}' has not been implemented.`);
            break;
	}
    }
};

run();
