describe("TodoList", function() {
  var todoList;
  var todo;

  beforeEach(function() {
    todoList = new TodoList();
    todo = new Todo();
  })

  it("should display a list of todos", function() {
    expect(todoList.list).to
  })

  it("should allow a new todo to be created", function() {
    todoList.add(todo);
    expect(todoList.list).toEqual(todo);
  })
})
