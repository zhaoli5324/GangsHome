package main.interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Scope;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Scope
public class InterceptorsMain extends HandlerInterceptorAdapter{
  /**
   * 预处理：Action（@Controller）之前执行
   * 可以进行编码，安全控制等处理
   */
  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    return super.preHandle(request, response, handler);
  }
  

  /**
   * 后处理（调用了Service并返回ModelAndView，但未进行页面渲染）：生成视图之前执行
   * 有机会修改ModelAndView
   */
  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
    ModelAndView modelAndView) throws Exception {
    super.postHandle(request, response, handler, modelAndView);
  }

  /**
   * 返回处理（已经渲染了页面）：最后执行，用于释放资源
   * 可以根据EX是否为null判断是否发生了异常，进行日志记录
   */
  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
    throws Exception {
    super.afterCompletion(request, response, handler, ex);
  }

  /**
   * 当有异步请求的时候，会走此方法（在preHanlder之后）
   */
  @Override
  public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response, Object handler)
    throws Exception {
    super.afterConcurrentHandlingStarted(request, response, handler);
  }

  
}
