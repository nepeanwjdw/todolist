$(document).ready(function() {
  var todoList = new TodoList();

   $('#add').submit(function(event){
     event.preventDefault();
     var name = $('#todotext').val();
     var todo = new Todo(name);
     addTodo(todo);
     displayTodos();
   });

   function displayTodos() {
     $('#todos').append("<li>todoList.todos.name</li>");
   };

   function addTodo(todo) {
     todoList.add(todo);
   };
});
