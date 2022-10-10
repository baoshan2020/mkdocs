function remvoeshengyin() {

   var  span = document.getElementsByTagName('span');
    for (i = 0; i < span.length; i++) {
     var spantext = span[i].textContent; //获取span 的内容
    console.log(spantext);
    //如果等于打开声音,删除span的父节点
    if (spantext == "打开声音") {

        span[i].parentNode.remove()
        // console.log(i);
        //divr=span[i].parentNode
        //divr.remove();
    }
    else if (spantext == "instructions") {
        span[i].parentNode.remove()
    }

    }
  

   
        }




    function addHome(){




          //电脑
    var fbtopbarPC=document.getElementById('fbTopBar');
    if(fbtopbarPC!=null ){
        var div='<div class="home" style="margin-top: 10px; margin-left:5px "><a href="http://book.thsolar.com/productmanual/index.html"><img style="width: 25px;" src="./zhuye.png" alt=""></a></div>'
        fbtopbarPC.innerHTML+=div    
}
//手机
    var fbtopbarPhone=document.getElementsByClassName('phoneTopBar');
    if(fbtopbarPhone!=null){
        var div='<div class="home" style="margin-top: 6px; margin-left:5px "><a href="http://book.thsolar.com/productmanual/index.html"><img style="width: 25px;" src="./zhuye.png" alt=""></a></div>'

        fbtopbarPhone[0].innerHTML+=div    
}

 
    //手机显示菜单不同

   // style="margin-top: 10px;"
    }
setTimeout("remvoeshengyin()",1000)
setTimeout("addHome()",1000)
    