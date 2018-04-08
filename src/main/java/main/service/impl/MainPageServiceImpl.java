/**
 * @author ZhaoLi
 *
 */
package main.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.common.CommonTool;
import main.dao.IMainPageDao;
import main.pojo.MenuInfo;
import main.service.IMainPageService;
import net.sf.json.JSONArray;

@Service("mainPageServiceImpl")
public class MainPageServiceImpl implements IMainPageService{
  @Autowired
  private IMainPageDao mainPageDaoImpl;

  public String queryMenuInfo(String param) throws Exception {
    MenuInfo info = null;
    List<MenuInfo> infoList = null;
    try {
      if(param==null||"".equals(param)){
        return "error";
      }else{
        //首先把参数JSON字符串改造成实体类
        info =  (MenuInfo) CommonTool.JSONStr2JSONObj(param,new MenuInfo());
        infoList = mainPageDaoImpl.queryMenuInfo(info);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    //把返回实体类改造成JSON字符串
    return JSONArray.fromObject(infoList).toString();
  }
  
  @Test
  public void test(){
    List<MenuInfo> infoList = new ArrayList<MenuInfo>();
    MenuInfo a = new MenuInfo();
    a.setParentId("0");
    infoList.add(a);
    System.out.println(JSONArray.fromObject(infoList).toString());
  }
  
}
