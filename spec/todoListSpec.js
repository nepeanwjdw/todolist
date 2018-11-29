describe("TodoList", function() {
  var todoList;
  var todo;

  beforeEach(function() {
    todoList = new TodoList();
    todo = new Todo("Go to Gym");
    todo1 = new Todo("Post Letter");
  })

  it("should allow a new todo to be added to the todoList", function() {
    todoList.add(todo);
    expect(todoList.todos).toEqual([todo]);
  })

  it("should allow a todo to be deleted from the todoList", function() {
    todoList.add(todo);
    todoList.add(todo1);
    todoList.delete(todo);
    expect(todoList.todos).toEqual([todo1]);
  })
})
