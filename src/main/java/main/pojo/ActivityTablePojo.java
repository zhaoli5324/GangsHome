package main.pojo;

import java.util.List;

public class ActivityTablePojo {
  private String id;
  private String memberName;
  private List<ActivityConfigPojo> activitys;
  private String totalPoint;
  private String timeWeek;
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public String getMemberName() {
    return memberName;
  }
  public void setMemberName(String memberName) {
    this.memberName = memberName;
  }
  public List<ActivityConfigPojo> getActivitys() {
    return activitys;
  }
  public void setActivitys(List<ActivityConfigPojo> activitys) {
    this.activitys = activitys;
  }
  public String getTotalPoint() {
    return totalPoint;
  }
  public void setTotalPoint(String totalPoint) {
    this.totalPoint = totalPoint;
  }
  public String getTimeWeek() {
    return timeWeek;
  }
  public void setTimeWeek(String timeWeek) {
    this.timeWeek = timeWeek;
  }
  
}
