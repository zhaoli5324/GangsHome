package fhz.exception;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;

public class ParamException extends Exception {

  /**
   * 
   */
  private static final long serialVersionUID = 1L;
  
  public ParamException(String msg){
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
