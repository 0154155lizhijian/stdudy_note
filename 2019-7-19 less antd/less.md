- 安装less和less-loader
```
yarn add less
```

- webpack配置
```
{
    test:/.less$/,
    use:[{
        loader:'style-loader'
    },{
        loader:'css-loader'
    },{
        loader:'less-loader'
    },]
}
```

- 使用
```
import Style from './style/index.css';
```

- 语法
1. 变量
使用@+变量名的方式定义变量，使用变量时在变量名前加@,或者嵌套@
```@theme-backgroundcolor:black```
```
@name:'zs';
@content :'name';

a:after{
    content:@@content
}
```
2. 混合使用
将一些通用的属性集合用class封装起来，然后在另一个class中去引用这个class下的所有属性。当然，除了class，id属性集也可以以相同的方式引用。
```
.theme{
    background-color:#ccc;
    font-size:14px;
}
.footer{
    .theme;
    color:#0f0;
}
```

3. 带参数混合
@arguments变量，包含了所有传进来的参数，如果你不想单独处理每一个参数的话可以像这样写
```
.border-radius(@radius){
    border-radius:@radius;
}
.header{
    .border-radius;
    border:1px #foo solid;
}
```
4. 嵌套
为了让css代码简洁清晰，易维护，现在less允许我们以嵌套的方式编写层叠样式，子元素样式可以直接嵌套在父元素样式中：

```
.header{
    height:50px;
    p{
        font-size:16px;
        a{
            text-decoration:none;
        }
        &:hover{
            text-decoration:underline;
        }
    }
}
```
5. 运算      
在less中，任何数字、颜色或者变量都可以参与运算
```
@baseWidth：40px;
.text{
    width:@baseWidth * 2;
}
```

6. 函数
less提供了许多⽤于转换颜⾊，处理字符串和进⾏算术运算的函数。
```
@color:#000;
.func_test{
    background:fade(@color,50%)
}
```
7. 命名空间
命名空间可以用于组织我们的CSS，从而提高到另一个层次，我们将一些公用的样式创建分组，然后在使用的时候直接调用。例如，如果我们创建了一个名为“theme”的样式分组，我们就可以在使用到的时候直接从该组中调用:	
```
#theme{
    .foot{
        color:#000
    }
    .border{
        border:1px #000 solid
    }
}
.breader{
    #theme>.font;
}
```

8. 使用JavaScript表达式
```
@var: 'HELLO'.toLowerCase()
@hello `@{var} world`
```

9. 模式匹配
```
.background(dark,@color){
    color:@color
}
.model{
    .background(dark,#888)
}
```

10. 导引表达式 (其实就是比较表达式)
```
.mixin(@a when (@a>10),@a<-10>)
```

11. 导入
`@import 'lib.less'`
`@import lib`
若不想对其进行less处理，则可以
`import "lib.css"`