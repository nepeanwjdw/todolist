function Todo(name) {
  this.name = name;
  this.isCompleted = false;
}
Todo.prototype.toggleCompleted = function() {
  this.isCompleted = !this.isCompleted;
}
