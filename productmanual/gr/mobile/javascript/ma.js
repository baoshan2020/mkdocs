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

          //添加返回首页
    var fbtopbar=document.getElementById('fbTopBar').firstChild;
    // style="margin-top: 10px;"

    var div='<div><a href="http://book.thsolar.com/productmanual/index.html"><img style="width: 25px;" src="./zhuye.png" alt=""></a></div>'

    fbtopbar.innerHTML=div;

    }
setTimeout("remvoeshengyin()",1000)
setTimeout("addHome()",1000)
    