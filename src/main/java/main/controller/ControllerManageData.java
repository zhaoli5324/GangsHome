package main.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import main.service.IManageDataService;

@org.springframework.stereotype.Controller
@RequestMapping("/data")
public class ControllerManageData implements Controller{

  @Autowired
  private IManageDataService manageDataServiceImpl;
  
  public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
    return null;
  }

  @RequestMapping(value = "/queryActivityLog", method = RequestMethod.POST,produces={"text/html;charset=UTF-8;","application/json;"})
  @ResponseBody
  public String mainPageInit(HttpServletRequest request, HttpServletResponse response) throws Exception {
    String param = request.getParameter("param");
    manageDataServiceImpl.queryActivityLog(param);
    System.out.println(param);
    return param;
  }
  
}
