# 使用原生javascript编写的ajax插件
## 请引入此ajax.js
> 然后如下调用
```
Ajax({
    url:"js/data.json",
    type:"get",
    dataType:"json",
    data:{"name":"gaoxiang","lastName":"lyx"},
    beforeSend:function(){},
    success:function(data){},
    fail:function(ex){
        console.log(ex);
    }
});
```