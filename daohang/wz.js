/* <script src="../jquery-3.6.0.js"> </script> */
//  <script src="../jquery-3.6.0.js" type="text/javascript" charset="utf-8"></script>
// <!-- 加载json文件 -->
window.onload = function () {

    init();


}

function init() {
    loadDoc();
    //移动端访问删除seach
    seachRemove();
    //设置活动标签
    actiiveTab();
}



/*   
   
function getXhr() {
var Xhr = null;
// 解决兼容问题
if (window.XMLHttpRequest) { xhr = new XMLHttpRequest(); }
else { xhr = new ActiveXObject("Microsoft.XMLHttpRequest()"); }
return Xhr;
}
function getAjax(url, fn) {
var xhr = getXhr();
// 注册于监听
// readyState（状态值）
// 0：请求初始化
// 1：服务器连接已建议
// 2：请求接受
// 3：请求处理
// 4：请求已完成，且响应已就绪
// Status 状态
// 200： “ok”
// 304： 文件未改变，页面缓存
// 404：页面未找到
// 500：后台的问题
xhr.readystatechange = function () {
if (xhr.readyState == 4 && xhr.status == 200) {

   var datajson = eval("(" + xhr.response.Text + ")");
   fn(datajson);
}
}
// 建立连接
xhr.open("get", url, true);
//   发送数据；      
xhr.send(null);
// xhr.send({"name":"one","age":23});

// }

getAjax("./data.json", function (data) { alert(1); console.log(data); });

*/




function loadDoc() {


    var xhttp;
    if (window.XMLHttpRequest) { xhttp = new XMLHttpRequest(); } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }



    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsoncountent = eval("(" + xhttp.responseText + ")");

            content(jsoncountent);



            // for (var i = 0; i < gs.length; i++) {

            //     var Gongs = gs[i].name;
            //     var Search = document.getElementById("Search").value;
            //     if (Gongs.indexOf(Search) != -1) {
            //         // 运行选择和颜色变动，双击赋值到input
            //         // console.log(Gongs);

            //         var liNeirong = document.createElement("li");
            //         var ulNeirong = document.getElementById('ulNeirong')
            //         liNeirong.innerHTML = Gongs;
            //         ulNeirong.appendChild(liNeirong);
            //         // 添加背景颜色，不让其他文字覆盖
            //         liNeirong.style.background = "white"; 

            //     }



            // }


        }

    };

    xhttp.open("GET", "./data.json", true);

    xhttp.send(null);



}

function content(jsoncountent) {


    var wz = jsoncountent;

    //历变对象 大类
    var dalei = [];
    Object.keys(wz).forEach((key, index) => {
        dalei.push(key);

        // l(wz);
        // l(wz[key][0].name);
        // mingxi(wz[key]);
    })


    //插入左侧连接大类
    //main-left-tail
    function tail() {
        var tail = document.getElementsByClassName('main-left')[0];
        //创建UL
        var ul = document.createElement('ul');
        //插入LI
        var li = ''

        for (var i = 0; i < dalei.length; i++) {
            /*
            
            
            var li=document.createElement('li');
            li.innerHTML=dalei[i];
            //添加class
            li.className=[i];
            //添加单击事件
            li.onclick=function(){tab(this);}
            // console.log(li);
            ul.appendChild(li);
            document.getElementsByClassName('main-left')[0].appendChild(ul);
            
            */

            // //添加活动标签
            // if(i==1){
            //    // li='<li list="1" onclick="tab(1)" class="liactive">连接</li>';
            //     li = "<li list=" + [i] + ' '+ 'class="liactive"'+' ' + "onclick= tab(" + [i] + ") >" + dalei[i] + "</li>";
            //     alert(li);
            //      }
            // else {
            li = "<li list=" + [i] + ' ' + "onclick= tab(" + [i] + ") >" + dalei[i] + "</li>";
            // }
            // l(li);
            ul.innerHTML += li;
        }

        //把ul插入到指定的div里
        document.getElementsByClassName('main-left')[0].appendChild(ul);
        // $('')
    }
    //执行
    tail();








    //content 主要内容插入
    function content() {
        // console.log(wz.连接[0]);
        // console.log(wz.连接[0].name);

        //要记录// wz.连接[0].name   普通
        //  如果是变量，添加括号  wz[li][0].name

        // var ul=document.getElementsByTagName[0];
        // 获取有ul
        var ul = document.getElementsByClassName('main-left')[0].getElementsByTagName('ul')[0]
        var li = ul.getElementsByTagName('li');
        // l(ul);
        // l(ul.li[0].);
        // [0].innerHTML
        // var zhi=li;
        // console.log(zhi);
        //   console.log(wz.zhi[0]);
        //   console.log(wz[li][0].name);
        //   console.log(wz.[li[0]][0].name);
        // 插入网址
        // l(li.length);
        //list 子项
        var listsub = '';

        var content = document.getElementById('content');
        for (i = 0; i < li.length; i++) {
            var liUrl = li[i].innerHTML;
            listsub = [i];

            // l(liUrl);
            // var name=wz[liurl][i].name;
            // l(name);
            var URL = wz[liUrl];
            var image = '';
            var ico = "";
            // 添加content的list
            for (j = 0; j < URL.length; j++) {
                // l(URL[j].name)
                // l(URL[j].URL)
                console.log(URL[j].ico);
                if (URL[j].ico) {

                    // <div class=ico style="background-image:url(./img/sougou.png)"></div>
                    ico = '<span class=ico style="' + 'background-image:url(./img/' + URL[j].ico + ')"></span>';
                }
                else {
                    //   截取ico第一个汉字
                    var hanzi = URL[j].name.slice(0, 1);
                    //小写转换为大写你     
                    hanzi = hanzi.toUpperCase();
                    //    background-color 随机 background-color: #555555width:56px;height:56px; line-height:56px;
                    var bg = background();
                    var ico = '<span  class=ico-hanzi style="color: #fff;' + bg + '">' + hanzi + '</span>';

                }
                // l(ico);
                // 添加备注text表述
                var text = '';
                // text =URL[j].text;
                if (URL[j].text) {
                    var text = '<p class=atext>' + URL[j].text + '</p>';
                }

                var a = "<div class='content-wz' list=" + listsub + "><a  target='blank' href=" + URL[j].URL + "> " + ico + URL[j].name + text + " </a> </div> ";
                // l(a);
                content.innerHTML += a;

            }

        }
    }
    content();



}



//引用

//点击菜单执行函数
function tab(param) {
// var param=param;
    // l(param);
    //清空颜色
    var liclear = document.getElementsByClassName('liactive')[0];
    // l(liclear);
    if (liclear) { liclear.className = ''; }


    //设置活动更新颜色
    var ul = document.getElementsByClassName('main-left')[0].getElementsByTagName('ul');
    // var li = ul.getElementsByTagName('li');
// const li=document.getElementsByClassName('main-left')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
   // Cannot read properties of undefined (reading 'getElementsByTagName')
   // 缺少 document. 前缀
// alert(li);
// alert(li[param]);


// document.getElementsByClassName('main-left')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[param].className = 'liactive';
    // li[param].className = 'liactive';
    // var a=ul[0].childNodes;
     var a = ul[0].getElementsByTagName("li");
    alert(a);
    //获取content下的span
    var aUrl = document.getElementById('content').getElementsByTagName('div');

    //历边list 需要显示还是隐藏
    for (i = 0; i < aUrl.length; i++) {

        //获取list值
        var listZhi = aUrl[i].getAttribute('list')
        //如果list值和param) 大类值相同显示，不等 隐藏
        if (listZhi == param) {
            // aUrl[i].className=' content-wz aactive'
            //显示
            aUrl[i].style.display = " inline-table";

        } else {
            // aUrl[i].className='content-wz noaactive'
            //隐藏
            aUrl[i].style.display = "none";

        }


    }



}
// tab('1');

// 随机生成一个背景颜色
function background() {
    // 随机数
    var a = '';
    a = Math.ceil(Math.random() * 5);
    //   l(a);

    var bg = ['background-color: #555555;', 'background-color: #555555;', 'background-color: #ffcc33;', 'background-color: #cc0000;', 'background-color: #0066cc;', 'background-color: goldenrod;'];
    // l(bg[a]);
    return bg[a];
}

function fresh() {
    // 框架内页面刷新：可实现局部刷新与整个页面重定向
    self.location.reload();  //刷新框架内页面
    // window.parent.location.href='http://koushuling.top'; //页面重定向 
}


//移动端删除seach
function seachRemove() {


    var a = isMobile();
    if (a) {
        var seach = document.getElementsByClassName('seach')[0];
        seach.remove();
    }
}

//判定是PC还是移动端
function isMobile() {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true; // 移动端
    } else {
        return false; // PC端
    }
}


// seachSelect 颜色变更和内容变更
function seachSelect(a) {
    //清空活动样式

    document.getElementsByClassName('seachSelectActive')[0].className = 'seach-select';
    // 设置活动样式
    a.className = 'seachSelectActive';

    if (a.value == 'sougou') { document.getElementsByClassName('seachFrom')[0].action = 'http://q.sogou.com/'; }
    if (a.value == 'baidu') { document.getElementsByClassName('seachFrom')[0].action = 'http://www.baidu.com'; }
    if (a.value == 'dali') { document.getElementsByClassName('seachFrom')[0].action = 'https://www.dalipan.com'; }


}


function actiiveTab() {


    // alert(1);
    tab(1);
    alert(2);



    // // var ul = document.getElementsByClassName('main-left')[0].getElementsByTagName('ul')[0];
    // // var li = ul.getElementsByTagName('li');
    // 
    // $(ul>li)[1].className=liactive;


    // li[1].className = 'liactive';
}