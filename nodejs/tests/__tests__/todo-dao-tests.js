jest.setTimeout(60000)

const lib_dir = '../..'
const todo_dao = require(`${lib_dir}/todo-dao`)

describe('todo DAO CRUD tests', () => {
    beforeAll(async () => {
    }, 600000)

    afterAll(async () => {
    }, 600000)

    it('parallel: should be able to add todo item', async function() {
	var addedTodo = todo_dao.add("blah blah")
	expect(addedTodo.text).toBe("blah blah")
    })

    it('parallel: should be able to get todo item', async function() {
	var todoText = "foo"
	var addedTodo = todo_dao.add(todoText)
	expect(addedTodo.text).toBe(todoText)
	var resultTodo = todo_dao.get(addedTodo.id)
	expect(resultTodo.id).toBe(addedTodo.id)
	expect(resultTodo.text).toBe(addedTodo.text)
    })

    it('parallel: should be able to delete todo item', async function() {
	var todoText = "foo"
	var addedTodo = todo_dao.add(todoText)
	var deletedTodo = todo_dao.deleteById(addedTodo.id)
	expect(deletedTodo.id).toBe(addedTodo.id)
	var resultTodo = todo_dao.get(addedTodo.id)
	expect(resultTodo).toBeUndefined()
    })

    it('parallel: should not create a repeat id', async function() {
	var firstTodo = todo_dao.add("blah blah")
	var secondTodo = todo_dao.add("blah blah")
	expect(firstTodo.id).not.toBe(secondTodo.id)
    })
})
