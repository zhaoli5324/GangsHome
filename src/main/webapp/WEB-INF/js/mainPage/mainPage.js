$(function(){
  $mainPage.init();
});

var $mainPage = {
  init:function(){
    this.service.init();
    this.layout.init();
  },
  attr:{
    allMenuInfo:null
  },
  layout:{
    init:function(){
      $("#manageMenu").hide();
    },
    initMenu:function(data){
      $mainPage.attr.allMenuInfo = data;
      for(var i=0;i<data.length;i++){
        var menuInfo = data[i];
        $("div .cells").before('<div id="'+menuInfo.divId+'" class="'+menuInfo.divCss+'"><div class="show"><div class="thumb">'+menuInfo.id+'</div>'+
        '<div class="small-thumb"></div><div class="title">'+menuInfo.menuName+'</div><div class="close"></div></div></div>');
        $("#"+menuInfo.divId).css("background",menuInfo.backgroudColor);
        //根据坐标设置位置
        var xy = menuInfo.menuArray.split("-");
        $("#"+menuInfo.divId).css("left",xy[0]*99-1+"px");
        $("#"+menuInfo.divId).css("top",xy[1]*99-1+"px");
        $("#"+menuInfo.divId).css("opacity",xy[2]+"");
      }
      $mainPage.layout.initBtnEvent();
    },
    initBtnEvent:function(){
      $(".item").bind("mouseover",function(){
        $(this).css("opacity","1");
      });
      $(".item").bind("mouseout",function(){
        $(this).css("opacity","0.3");
      });
      $(".item").bind("click",function(){
        var id = $(this).attr("id");
        //根据ID打开菜单页面
        $("#"+id+"Menu").show();
        $manageMenu.init();
      });
    },
    openChildMenu:function(){
      
    }
  },
  service:{
    init:function(){
      this.getMenuInfo();
    },
    getMenuInfo:function(){
      var param = {
        url:path+"/page/mainPage",
        type:"POST",
        data:{parentId:'0'},
        success:function(data){
          $mainPage.layout.initMenu(data);
        }
      };
      $common.ajax(param);
    }
  }
};