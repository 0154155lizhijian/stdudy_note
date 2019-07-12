var a=5;
(function(){
    var a=4
    console.log(a);
})();


//var声明的全局变量不可用delete删除、隐式全局变量可以
var a=1;
b=2;
function fn(){
    delete a
    return a
}
fn()
console.log(a);//1,因为无法删除
console.log(b);


var a=1;
function fn2(){
    console.log(a);//undefined,变量提升
    var a=2;
    console.log(a);//2
};
fn2()