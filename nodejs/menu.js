const sprintf = require('sprintf-js').sprintf
const todo_dao = require('./todo-dao')

function loadTestData() {
    todo_dao.add("test data 1")
    todo_dao.add("test data 2")
    todo_dao.add("test data 3")
}

function showWelcome() {
    loadTestData()
    console.log('Welcome to A better TODO!')
    console.log('================================================================================')
}

function showThankYouMessage() {
    console.log('Thank you for using A better TODO!')
    console.log('================================================================================')
}

function showMenu() {
    console.log('What would you like TODO?')
    console.log('================================================================================')
    console.log('l. List the TODOs')
    console.log('c. Create a TODO')
    console.log('r. Retrieve a TODO')
    console.log('u. Update a TODO')
    console.log('d. Delete a TODO')
    console.log('x. Exit')
    console.log('>')
}

function showTodoList() {
    var todoList = todo_dao.getTodoList()
    var format = '%-40s | %-20s'
    console.log(sprintf(format, 'ID','Text'))
    for (var i = 0 ; i < todoList.length ; i++) {
	console.log(sprintf(format, todoList[i].id, todoList[i].text))
    }
}

function processCommand() {
    const readline = require('readline');

    const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'Enter letter >'
    });

    showMenu()
    rl.prompt()

    rl.on('line', (line) => {
	var selection=line.trim()
	switch (selection) {
	case 'l':
	    console.log('l. List the TODOs')
            showTodoList()
            break;
	case 'c':
	    console.log('c. Create a TODO')
            break;
	case 'r':
	    console.log('r. Retrieve a TODO')
            break;
	case 'u':
	    console.log('u. Update a TODO')
            break;
	case 'd':
	    console.log('d. Delete a TODO')
            break;
	case 'x':
	    rl.close()
            break;
	default:
            console.log('');
            console.log(`Unknown option: '${selection}'`);
            break;
	}
	showMenu()
	rl.prompt();
    }).on('close', () => {
	showThankYouMessage()
	process.exit(0);
    });
}


exports.showWelcome = showWelcome
exports.showMenu = showMenu
exports.processCommand = processCommand
exports.loadTestData = loadTestData
