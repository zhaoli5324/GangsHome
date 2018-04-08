$(function() {
  console.log("11111111");
});

var $PublicMethod = {
    init : function() {
      $PublicMethod.method.initAjaxDefaultParam();
    },
    attr : {
      ajaxDefaultParam:null
    },
    method : {
      jqAjax : function(param) {
        var a = {str1:"赵力",str2:"男"};
        var param1 = {
            url:path+"/ajaxPost",
            type:"POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            data:{param:JSON.stringify(a)},
            dataType:"text",
            beforeSend:function(){
              console.debug("请求发送前！");
              console.log(arguments);
            },
            success:function(data,state){
              console.debug("请求成功！");
              console.debug(arguments);
            },
            error:function(){
              console.debug("请求失败！失败信息如下：");
              console.debug(arguments);
            },
            complete:function(){
              console.debug("请求结束！");
              console.debug(arguments);
            },
            dataFilter:function(data,type){
              console.debug("返回数据如下：");
              console.debug(arguments);
              
              console.debug("开始进行数据处理：");
              var dataJson = JSON.parse(data);
              console.debug(dataJson);
              return dataJson;
            }
        };
        $.ajax(param1);
      }
    },
    /**
     * 初始化Ajax所需的参数
     */
    initAjaxDefaultParam:function(){
      $PublicMethod.attr.ajaxDefaultParam = {
        options:null,
        async:true,
        beforeSend:null,
        cache:true,
        complete:function(){
          console.log("当前请求回调");
        },
        contentType:"application/x-www-form-urlencoded",
        context:null,
        data:null,
        dataFilter:null,
        dataType:"text",
        error:function(){
          console.log("发生错误！跳转到错误页面！");
        },
        global:true,
        ifModified:false,
        jsonp:null,
        jsonpCallback:null,
        password:null,
        processData:true,
        scriptCharset:null,
        success:function(){
          console.log("调用成功！");
        },
        traditional:false,
        timeout:30000,
        type:"GET",
        url:null,
        username:null,
        xhr:null
      }
    },
    handleAjaxParam:function(param){
      return {
        // 类型：Object。Ajax请求设置（意义暂时不明）
        options : param.options?param.options:$PublicMethod.attr.ajaxDefaultParam.options,
        // 是否异步请求，默认为true
        async : param.async ? param.async : true,
        // 发送请求前可修改XMLHTTPRequest对象的函数，如添加自定义HTTP头
        beforeSend : param.beforeSend ? param.beforeSend : null,
        // 默认为true，dateType为script和jsonp时默认为false
        cache : param.cache ? param.cache : true,
        // 请求完成后的回调函数（请求成功或失败之后均可调用）
        complete:param.complete
      }
      
    }
};