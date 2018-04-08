package fhz.test;

import java.util.ArrayList;

public class Test001 {
  public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<String>();
    for(int i=0;i<1000000;i++){
      list.add("0"+i);
    }
    long nowMemory = Runtime.getRuntime().totalMemory()-Runtime.getRuntime().freeMemory();
    System.out.println(nowMemory);
    long nowMemory1 = 0l;
    for (int i = 0; i < list.size(); i++){
      list.get(i);
      nowMemory1 = Runtime.getRuntime().totalMemory()-Runtime.getRuntime().freeMemory();
      System.out.println(nowMemory1);
    }
    System.out.println(nowMemory1-nowMemory);
    
  }
}
