describe("TodoList", function() {
  var todoList;
  var todo;

  beforeEach(function() {
    todoList = new TodoList();
    todo = new Todo("Go to Gym");
  })

  it("should allow a new todo to be created", function() {
    todoList.add(todo);
    expect(todoList.todos).toEqual([todo.name]);
  })
})
