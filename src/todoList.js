function TodoList() {
  this.todos = []
}
TodoList.prototype.add = function(todo) {
  this.todos.push(todo);
}
TodoList.prototype.delete = function(todo) {
  this.todos.splice(todo, 1);
}
