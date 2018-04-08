/**
 * 
 */
/**
 * @author ZhaoLi
 *
 */
package main.pojo;

import java.io.Serializable;

public class MenuInfo implements Serializable{

  private static final long serialVersionUID = 1L;
  
  private String id;
  private String menuName;
  private String menuUrl;
  private String divId;
  private String divCss;
  private String menuArray;
  private String backgroudColor;
  private String parentId;
  private String remark;
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public String getMenuName() {
    return menuName;
  }
  public void setMenuName(String menuName) {
    this.menuName = menuName;
  }
  public String getMenuUrl() {
    return menuUrl;
  }
  public void setMenuUrl(String menuUrl) {
    this.menuUrl = menuUrl;
  }
  public String getDivId() {
    return divId;
  }
  public void setDivId(String divId) {
    this.divId = divId;
  }
  public String getDivCss() {
    return divCss;
  }
  public void setDivCss(String divCss) {
    this.divCss = divCss;
  }
  public String getMenuArray() {
    return menuArray;
  }
  public void setMenuArray(String menuArray) {
    this.menuArray = menuArray;
  }
  public String getBackgroudColor() {
    return backgroudColor;
  }
  public void setBackgroudColor(String backgroudColor) {
    this.backgroudColor = backgroudColor;
  }
  public String getParentId() {
    return parentId;
  }
  public void setParentId(String parentId) {
    this.parentId = parentId;
  }
  public String getRemark() {
    return remark;
  }
  public void setRemark(String remark) {
    this.remark = remark;
  }
  public static long getSerialversionuid() {
    return serialVersionUID;
  }
  @Override
  public String toString() {
    return "MenuInfo [id=" + id + ", menuName=" + menuName + ", menuUrl=" + menuUrl + ", divId=" + divId + ", divCss="
      + divCss + ", menuArray=" + menuArray + ", backgroudColor=" + backgroudColor + ", parentId=" + parentId
      + ", remark=" + remark + "]";
  }
  
}