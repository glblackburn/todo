// trying a fancy version following this example
// https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const productName = "A better TODO!"


function banner() {
    clear();
    console.log(
	chalk.green(
	    figlet.textSync(productName, { horizontalLayout: 'full' })
	)
    );
}

function deleteTodos(todos) {
    console.log('Deleting TODOs:')
    console.log(JSON.stringify(todos, null, '  '));
    todos.deletes.forEach(todo => {
	//console.log(todo)
	todo_dao.deleteById(todo)
    })
    console.log('Deleted TODOs:')
}

banner();

const todo_dao = require('./todo-dao')
todo_dao.loadTestData()

const inquirer  = require('./lib/inquirer');

const run = async () => {
    var running = true
    while (running) {
	const mainMenu = await inquirer.askMainMenu();
	banner();
	switch (mainMenu.choice) {
	case 'List':
            todo_dao.showTodoList()
            break;
	case 'Create':
	    const todo = await inquirer.askTodoData();
	    console.log('Adding TODO:')
	    console.log(JSON.stringify(todo, null, '  '));
	    todo_dao.add(todo.text);
	    console.log('Added TODO:')
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
