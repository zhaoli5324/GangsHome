$(function(){
  console.log(2);
  $('#datetimepicker').datetimepicker({
    language:  'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
  });
  $manageMenu.init();
});

var $manageMenu = {
  init:function(){
    this.layout.init();
    this.service.init();
  },
  attr:{},
  layout:{
    
    init:function(){
      $(".panel").hide();
      $("#body-point").show();
      this.cssInit();
      this.eventInit();
      this.initPointTable();
    },
    
    cssInit:function(){
      $("#manageMenu").css({
        "position":"absolute",
        "left":"10%",
        "top":"7%",
        "z-index":999+"",
        "width":"0",
        "height":"0"
      });
      $("#manageMenu").animate({width:'80%',opacity:'1'},"slow");
      $("#manageMenu").animate({height:'90%',opacity:'1'},"slow");
    },
    
    eventInit:function(){
      $("#nav-menu ul li").bind("click",function(){
        //设置点击样式
        $("#nav-menu ul li").removeClass("active");
        $(this).addClass("active");
        //设置点击效果
        $(".panel").hide();
        var id = $(this).attr("id").replace("nav","body");
        $("#"+id).show();
      });
    },
    
    initPointTable:function(){
      var options = new Object();
      var column = [
        {title:"序号",align:"center",width:"10%"},
        {title:"成员",align:"center",width:"10%"},
        {title:"日常活动1",align:"center",width:"10%"},
        {title:"成员",align:"center",width:"10%"},
        {title:"本周总分数",align:"center",width:"10%"},
        {title:"日常参与百分比",align:"center",width:"10%"}
        ];
      options.columns = column;
      options.pagination = true;
      options.pageSize = 20;
//      options.columns = ;
      $("#tb_departments").bootstrapTable(options);
    }
    
  },
  service:{
    init:function(){
      this.queryData();
    },
    
    collectQryParam:function(){
      var queryParam = new Object();
      var member_name = $("#member_name").val();
      var start_time = $("#start_time").val();
      var end_time = $("#end_time").val();
      
      if($common.isNotEmptyStr(member_name)){
        queryParam.memberName = member_name;
      }
      
      if($common.isNotEmptyStr(start_time)){
        queryParam.startTime = start_time;
      }
      
      if($common.isNotEmptyStr(end_time)){
        queryParam.endTime = end_time;
      }
      queryParam.relativeTemplate = "1";
      return queryParam;
    },
    
    queryData:function(){
      var queryParam = $manageMenu.service.collectQryParam();
      var param = {
        url:path+"/data/queryActivityLog",
        type:"POST",
        data:queryParam,
        success:function(data){
          console.log(data);
        }
      };
      $common.ajax(param);
    },
    
    addData:function(){},
    
    updateData:function(){},
    
    deleteData:function(){}
  }
}