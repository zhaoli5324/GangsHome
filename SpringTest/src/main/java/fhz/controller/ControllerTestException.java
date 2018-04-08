package fhz.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import fhz.exception.BusiException;
import fhz.exception.ParamException;
import fhz.service.IServiceTest;

@org.springframework.stereotype.Controller
@RequestMapping("/TestException")
public class ControllerTestException{
  @Autowired
  private IServiceTest serviceTestImpl;
  
  @RequestMapping("/controller")
  public void exception(HttpServletResponse response, Integer id) throws Exception {
    switch (id) {
    case 1:
      throw new BusiException("Controller"+id);
    default:
      throw new ParamException("Controller Parameter Error");
    }
  }

  @RequestMapping("/service")
  public void serviceException(HttpServletResponse response, Integer id) throws Exception {
    serviceTestImpl.exception(id);
  }
  
  @RequestMapping("/dao")
  public void daoException(HttpServletResponse response, Integer id) throws Exception {
    serviceTestImpl.daoException(id);
  }

}
