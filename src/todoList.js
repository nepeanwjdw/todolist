function TodoList() {
  this.todos = []
}
TodoList.prototype.add = function(todo) {
  this.todos.push(todo.name);
}
