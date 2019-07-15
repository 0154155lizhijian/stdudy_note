# promsie
- promsie的用法
1. promsie.then()
```
let one =(resolve,reject)=> {
    setTimeout(()=>{
        resolve(1)
    },2000)
}
let two = (resolve,reject) => {
    setTimeout(()=>{
        resolve(2)
    },5000)
 
}
let three = (resolve,reject) => {
    setTimeout(()=>{
        resolve(3)
    },3000)
}
const start = Date.now()
// promise.then方法
new Promise(one)
    .then((value)=>{
        console.log(value)
        return new Promise(two)
    })
    .then((value)=>{
        console.log(value)
        return new Promise(three)
    })
    .then((value)=>{
        console.log(value)
    })
```

2. promsie.all()方法
```
//promise.all方法  它指的是全部任务同步运行后的结果，所以花费时间是最长的子任务花费时间
let onePromise = new Promise(one);
let twoPromsie = new Promise(two);
let threePromsie = new Promise(three);

Promise.all([onePromise,twoPromsie,threePromsie]).then(values=>{
    console.log(values)
})
//同理，若是要单个子任务异步处理，就可以
onePromise
  .then(()=> twoPromsie)
  .then(()=> threePromsie)
  .then(()=>{
    console.log('完成')
  })
```

3. async await方法
```
//async 的方式解决回调  运行时间是最大子进程运行时间

const dsp = async()=> {
    let result1 = await onePromise;
    let result2 = await twoPromsie;
    let result3 = await threePromsie;
    console.log(result1,result2,result3);
    console.log( Date.now()-start)  //5秒
}
dsp()
```

- promise分析
  - 它有三个状态 pendding ,fulfilled,rejected
  - 一旦状态改变后续操作不会影响状态   resolve()  reject()
  - Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
  - Promise.all([p1,p2,p3])方法 成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
 
- 简单原理
```
class Promise{
    constructor(executor){    //构造函数
        this.status = 'pending'; //new完了等待处理的状态
        this.value = undefined;
        this.reason = undefined;
        this.onResolveCallBacks = [];
        this.onRejectedCallBacks = [];
        let resolve = (value) => {
            this.status = 'resolved';
            this.value = value;
            // console.log(this.value)
            this.onResolveCallBacks.forEach(fn => fn(this.value))
        }
        let reject = (reason) => {
            this.status = 'rejected';
            this.value = reason;
            this.onRejectedCallBacks.forEach(fn =>fn())
        }
        executor(resolve,reject);
        // 开启promise
        // new 异步任务开始执行
    };
    then(onFullfield,onRejected){
        if(this.status === 'pending'){
            this.onResolveCallBacks.push(()=>{onFullfield()});
            this.onRejectedCallBacks.push(()=>{onRejected});
        }
        // if(this.status === 'resolved'){
        //     onFullfield(this.value)
        // }
        // if(this.status === 'rejected'){
        //     onRejected(this.value)
        // }
    }
}

module.exports = Promise;
```