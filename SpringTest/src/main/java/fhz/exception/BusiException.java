package fhz.exception;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
/**
 * 自定义业务异常类
 * @author ZhaoLi
 *
 */
public class BusiException extends Exception {

  private static final long serialVersionUID = 1L;
  
  public BusiException(String msg){
    super(msg);
  }
  
  /**
   * 把异常信息转换成字符串
   * @return
   */
  public String getDetailMsg(){
    Writer result = new StringWriter();
    PrintWriter pw = new PrintWriter(result);
    super.printStackTrace(pw);
    return result.toString();
  }

}
