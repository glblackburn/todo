const inquirer = require('inquirer');
const productName = "A Better TODO!"

module.exports = {
  askTodoData: () => {
    const questions = [
      {
        name: 'text',
        type: 'input',
        message: 'Enter TODO text:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter TODO text.';
          }
        }
      },
//      {
//          name: 'priority',
//          type: 'list',
//          message: 'Enter TODO priority:',
//	  choices: ['High', 'Medium', 'Low'],
//	  filter: function(val) {
//	      return val.toLowerCase();
//	  }
//      }
    ];
    return inquirer.prompt(questions);
  },
  askMainMenu: () => {
    const questions = [
      {
          name: 'choice',
          type: 'expand',
          message: 'Select your option:',
	  choices: [
	      {
		  key: 'l',
		  name: 'List the TODOs',
		  value: 'List'
	      },
	      {
		  key: 'c',
		  name: 'Create a TODO',
		  value: 'Create'
	      },
	      {
		  key: 'r',
		  name: 'Retrieve a TODO',
		  value: 'Retrieve'
	      },
	      {
		  key: 'u',
		  name: 'Update a TODO',
		  value: 'Update'
	      },
	      {
		  key: 'd',
		  name: 'Delete a TODO',
		  value: 'Delete'
	      },
	      {
		  key: 'q',
		  name: `Quit ${productName}`,
		  value: 'Quit'
	      },
	  ]
      }
    ];
    return inquirer.prompt(questions);
  },
  askDeleteTodos: (todoList) => {
      var choices = []
      for (var i = 0 ; i < todoList.length ; i++) {
	  choices.push(
	      {
		  value: todoList[i].id,
		  name: todoList[i].text
	      }
	  )
      }

      const questions = [
      {
          name: 'deletes',
          type: 'checkbox',
          message: 'Select TODOs to delete:',
	  choices: choices
      }
    ];
    return inquirer.prompt(questions);
  }
};
