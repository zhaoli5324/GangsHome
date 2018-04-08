/**
 * 
 */
/**
 * @author ZhaoLi
 *
 */
package main.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import main.service.IMainPageService;

@org.springframework.stereotype.Controller
@RequestMapping("/page")
public class ControllerPage implements Controller{
  
  @Autowired
  private IMainPageService mainPageServiceImpl;

  @RequestMapping(value = "/in", method = RequestMethod.GET,produces={"text/html;charset=UTF-8;","application/json;"})
  public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
    return new ModelAndView("mainPage");
  }
  
  @RequestMapping(value = "/mainPage", method = RequestMethod.POST,produces={"text/html;charset=UTF-8;","application/json;"})
  @ResponseBody
  public String mainPageInit(HttpServletRequest request, HttpServletResponse response) throws Exception {
    String result = mainPageServiceImpl.queryMenuInfo(request.getParameter("param"));
    return result;
  }
  
}