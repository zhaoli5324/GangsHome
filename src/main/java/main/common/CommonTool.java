package main.common;


import net.sf.json.JSONObject;

public class CommonTool {
  @SuppressWarnings("unchecked")
  public static <T> T JSONStr2JSONObj(String jsonStr,T c){
    JSONObject a1 = JSONObject.fromObject(jsonStr);
    T t2 = (T) JSONObject.toBean(a1, c.getClass());
    /////////////////////
    return t2;
  };
  
  public static String JSONObj2JSONStr(Class<?> c){
    JSONObject b = JSONObject.fromObject(c);
    return b.toString();
  };
}
