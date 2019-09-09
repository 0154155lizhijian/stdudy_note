function Parent (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
function Child (age) {
  // Parent.call(this, name);
  this.age = age;
}