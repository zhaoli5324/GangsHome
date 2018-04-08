$(function(){
  ca.init.initPage();
  window.addEventListener("load", ca.method.ca.toDataURL());
});

var ca = {
  attr:{
    con2d:null,
    con3d:null,
    con3d2:null,
    conbit:null
  },
  init:{
    initPage:function(){
      ca.init.initData();
    },
    /**
     * 初始化canvas的context（上下文），用来生成对应的对象
     * 注意：每个canvas只能生成一个context（上下文），比如生成了2d对象，就无法再生成3d等其他对象
     */
    initData:function(){
      var canvas2d = document.getElementById("canvas2d");
      ca.attr.con2d = canvas2d.getContext("2d");
      var canvas3d = document.getElementById("canvas3d");
      ca.attr.con3d = canvas3d.getContext("webgl");
      var canvas3d2 = document.getElementById("canvas3d2");
      ca.attr.con3d2 = canvas3d2.getContext("webgl2");
      var canvasbit = document.getElementById("canvasbit");
      ca.attr.conbit = canvasbit.getContext("bitmaprenderer");
    }
  },
  method:{
    /**
     * canvas 对象的常用方法
     */
    ca:{
      /*
       *  描述：将canvas的内容转化为图片缓存或者保存。
       *  参考网址：https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toBlob
       */
      toBlob:function(){
        var canvas = document.getElementById("canvas2d");
        canvas.toBlob(function(blob){
          var newImg = document.createElement("img"),
          url = URL.createObjectURL(blob);
          
          newImg.onload = function(){
            URL.revokeObjectURL(url);
          };
          
          newImg.src = url;
          document.body.appendChild(newImg);
        });
      },
      /*
       * 描述：将返回一个包含图片展示的data URL
       * https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL
       */
      toDataURL:function(){
        var canvas = document.getElementById("canvas2d"); 
        var dataURL = canvas.toDataURL(); 
//        console.log(dataURL);
      }
    },
    /**
     * CanvasRenderingContext2D的一些常用方法
     */
    c2d:{
      /*
       * 绘制矩形的三个方法
       */
      drawSquareness:{
        /*设置指定矩形区域内（以点 (x,y) 为起点，范围是 （width,height） 所有像素变成透明，并擦除之前绘制的所有内容*/
        claerRect:function(){
          var c2d = ca.attr.con2d;
          c2d.beginPath();
          c2d.moveTo(20,20);
          c2d.lineTo(200,20);
          c2d.lineTo(120,120);
          c2d.closePath(); // draws last line of the triangle
          c2d.stroke();
          //起点x，起点y，宽，高
          c2d.clearRect(10, 10, 100, 100);
        },
        /*绘制填充矩形，矩形的起点在(x,y)位置，矩形的尺寸是width和height*/
        fillRect:function(){
          var c2d = ca.attr.con2d;
          var gradient = c2d.createLinearGradient(0,0,50,50);
          gradient.addColorStop(1,"green");
          gradient.addColorStop(0,"white");
//          c2d.fillStyle = "green";
          c2d.fillStyle = gradient;
          c2d.fillRect(10, 10, 100, 100);
        },
        /*在canvas中，使用当前的绘画样式，描绘一个起点在(x,y)，宽度为w，高度为h的矩形*/
        strokeRect:function(){
          var c2d = ca.attr.con2d;
          c2d.strokeStyle = "green";
          c2d.strokeRect(10, 10, 100, 50);
        }
      },
      /*
       * 绘制文本的三个方法
       */
      drawText:{
        /*在(x,y)位置绘制（填充）文本*/
        fillText:function(){
          var c2d = ca.attr.con2d;
          c2d.font = "40px serif";
          c2d.fillText("Hello Canvas",10,100,100);
        },
        /*在(x,y)位置绘制（描边）文本*/
        strokeText:function(){
          var c2d = ca.attr.con2d;
          c2d.font = "50px serif";
          c2d.strokeText("Hello Canvas",10,100,150);
        },
        /*返回 TextMetrics 对象*/
        measureText:function(){
          var c2d = ca.attr.con2d;
          var text = c2d.measureText("foo");
          console.log(text);
        }
      },
      /*
       * 绘制线的相关属性和方法
       */
      drawLine:function(){
        var c2d = ca.attr.con2d;
        
        c2d.beginPath();
        c2d.moveTo(0,0);
        //1.设置线的宽度
        c2d.lineWidth = 20;
        //2.设置线末端的属性
        c2d.lineCap = "round";
        //3.用来设置两条线相交的样式属性
        c2d.lineJoin = "miter";
        //4.只有当lineJoin='miter'时才有效
        c2d.miterLimit = 10;
        //5.设置虚线的宽度和间距数组，必须为偶数数量
        c2d.setLineDash([5,20]);
        //6.获取虚线的设置数组
        var lineDash = c2d.getLineDash();
        console.log(lineDash);
        c2d.lineTo(120, 80);
        c2d.lineTo(0,150);
        c2d.stroke();
        
        c2d.lineWidth = 1;
        var offset = 0;
        function draw() {
          c2d.clearRect(145,5, 110, 110);
          c2d.setLineDash([4, 4]);
          //7.设置虚线的起始位置，经典的用来实现跑马灯效果
          c2d.lineDashOffset = offset;
          c2d.strokeRect(150,10, 100, 100);
        }

        function march() {
          offset++;
          if (offset > 16) {
            offset = 0;
          }
          draw();
          setTimeout(march, 20);
        }

        march();
      }
    }
    
  }
};