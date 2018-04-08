package fhz.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import fhz.pojo.FhzTest;
import fhz.pojo.TestPojo;
import fhz.service.IServiceTest;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@org.springframework.stereotype.Controller
@RequestMapping("/Test")
public class ControllerTest implements Controller {
  @Autowired
  private IServiceTest serviceTestImpl;

  @RequestMapping("/hello")
  public ModelAndView handleRequest(HttpServletRequest req, HttpServletResponse res) throws Exception {
    System.out.println("Hello!!");
    serviceTestImpl.test();
    Map<String,Object> model = new HashMap<String, Object>();
    model.put("test", "*******Test******");
    return new ModelAndView("hello",model);
  }

  /**
   * 
   * produces={"text/html;charset=UTF-8;","application/json;"} 解决浏览器接受中文乱码问题
   * 
   */
  @RequestMapping(value = "/ajaxGet", method = RequestMethod.GET,produces={"text/html;charset=UTF-8;","application/json;"})
  @ResponseBody
  public String testAjaxGet(HttpServletRequest req, HttpServletResponse res) {
    System.out.println("ajax请求GET进入成功！");
    TestPojo pojo = new TestPojo();
    pojo.setStr1("赵力");
    pojo.setStr2("男");
    JSONObject b = JSONObject.fromObject(pojo);
    return b.toString();
  }
  
  @RequestMapping(value = "/ajaxPost", method = RequestMethod.POST,produces={"text/html;charset=UTF-8;","application/json;"})
  @ResponseBody
  public String testAjaxPost(HttpServletRequest req, HttpServletResponse res) {
    System.out.println("ajax请求POST进入成功！");
    String param = req.getParameter("param");
    System.out.println(param);
    return param;
  }

  @Test
  public void test() {
    TestPojo pojo = new TestPojo();
    pojo.setStr1("赵力");
    pojo.setStr2("男");
    JSONArray a = JSONArray.fromObject(pojo);
    System.out.println(a.toString());

    JSONObject b = JSONObject.fromObject(pojo);
    System.out.println(b.toString());
    //
    /* s */
    String tp = "{'str1':'找','str2':'里'}";
    JSONObject a1 = JSONObject.fromObject(tp);
    TestPojo t2 = (TestPojo) JSONObject.toBean(a1, TestPojo.class);
    System.out.println(t2.getStr1() + t2.getStr2());
  }
  
  
  @RequestMapping(value = "/mybatis", method = RequestMethod.GET,produces={"text/html;charset=UTF-8;","application/json;"})
  @ResponseBody
  public String testMybatis(){
    FhzTest ft = new FhzTest();
    try {
      ft = serviceTestImpl.select();
    } catch (Exception e) {
      e.printStackTrace();
    }
    System.out.println(ft.toString());
    return ft.toString();
  }

}
