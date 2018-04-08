$common = {
  ajax:function(param){
    var param1 = {
        url:param.url,
        type:param.type,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data:{param:JSON.stringify(param.data)},
        dataType:"text",
        beforeSend:function(){
//          console.debug("请求发送前！");
//          console.log(arguments);
        },
        success:param.success,
        error:function(){
//          console.debug("请求失败！失败信息如下：");
//          console.debug(arguments);
        },
        complete:function(){
//          console.debug("请求结束！");
//          console.debug(arguments);
        },
        dataFilter:function(data,type){
//          console.debug("返回数据如下：");
//          console.debug(arguments);
          
//          console.debug("开始进行数据处理：");
          var dataJson = JSON.parse(data);
//          console.debug(dataJson);
          return dataJson;
        }
    };
    $.ajax(param1);
  },
  isNotEmptyStr:function(str){
    if(str!=null&&str.trim()!=""){
      return true;
    }else{
      return false;
    }
  },
  table:{
    getColumns:function(){
      
    }
  }
};
