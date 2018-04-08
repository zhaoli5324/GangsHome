/**
 * 
 */
/**
 * @author ZhaoLi
 *
 */
package fhz.test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map.Entry;
import java.util.Set;

public class Test{
  
  public static void main(String[] args) {
//    NullPointerException  RuntimeException
//    SQLException  Exception
    ArrayList<String> list  = new ArrayList<String>();
    list.add("a");
    list.add("a");
    System.out.println(list.size());
    System.out.println(list.get(0)+"|"+list.get(1));
    HashSet<String> set = new HashSet<String>();
    set.add("a");
    set.add("a");
    set.add("b");
    System.out.println(set.size());
    Iterator<String> ite = set.iterator();
    while (ite.hasNext()) {
      System.out.println(ite.next());
      
    }
    
    HashMap<String, String> map = new HashMap<String, String>();
    map.put("a", "1");
    map.put("b", "2");
    
    Set<Entry<String, String>> ss = map.entrySet();
    for(Entry<String, String> s:ss){
      System.out.println(s.getKey()+"|"+s.getValue());
      if("a".equals(s.getKey())){
        s.setValue("3");
        System.out.println(s.getValue());
      }
    }
  }
  
  
  public void test() throws Exception{}
}

class privateException extends Exception{

  /**
   * 
   */
  private static final long serialVersionUID = 1L;
  
}