var a;
function foo(a){
  console.log(a);
}

function bar(){
  var a;
  a= 3;
  foo(a);
}

a=2;
bar();


