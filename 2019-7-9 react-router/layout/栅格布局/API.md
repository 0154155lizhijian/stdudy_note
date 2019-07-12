如何设计跨终端的网页栅格系统，4等分(pc),三等分(ipad),二等分(手机)

- Tiwtter Bootstrap 是自适应的前端框架，一份代码，随处可以运行。
  在一个col上定义多个尺寸，
  media query
  .col-lg-n  超大  >1200px min-width 1200px
  .col-md-n  中等电脑 笔记本电脑  >1000px  1000px-1200px  
  .col-sm-n  ipad 平板 >768px   768-1024px  
  .col-xs-n  手机   <768 max-width 767px

- .container
  .row
  .col-${n}

- float  具有更好的兼容性