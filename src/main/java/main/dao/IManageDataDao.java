package main.dao;

import java.util.List;

import main.pojo.ActivityLogPojo;

public interface IManageDataDao {
  /**
   * 查询活动积分日志
   * @param param
   * @return
   * @throws Exception
   */
  public List<ActivityLogPojo> queryActivityLog(ActivityLogPojo param) throws Exception;
}
