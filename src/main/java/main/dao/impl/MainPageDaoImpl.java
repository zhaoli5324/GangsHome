/**
 * 
 */
/**
 * @author ZhaoLi
 *
 */
package main.dao.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import main.dao.IMainPageDao;
import main.pojo.MenuInfo;

@Repository("mainPageDaoImpl")
public class MainPageDaoImpl implements IMainPageDao{
  @Autowired
  private SqlSessionTemplate SqlSessionTemplate;

  public List<MenuInfo> queryMenuInfo(MenuInfo param) throws Exception {
    List<MenuInfo> menuInfoList = SqlSessionTemplate.selectList("queryMenuInfo", param);
    return menuInfoList;
  }
  
}