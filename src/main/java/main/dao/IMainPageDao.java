/**
 * 
 */
/**
 * @author ZhaoLi
 *
 */
package main.dao;

import java.util.List;

import main.pojo.MenuInfo;

public interface IMainPageDao{
  /**
   * 查询菜单配置信息
   * @param param
   * @return
   * @throws Exception
   */
  public List<MenuInfo> queryMenuInfo(MenuInfo param) throws Exception;
}