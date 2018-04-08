package main.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.common.CommonTool;
import main.dao.IManageDataDao;
import main.pojo.ActivityLogPojo;
import main.service.IManageDataService;

@Service("manageDataServiceImpl")
public class ManageDataServiceImpl implements IManageDataService{

  @Autowired
  private IManageDataDao manageDataDaoImpl;
  
  public String queryActivityLog(String param) throws Exception {
    ActivityLogPojo queryPojo = (ActivityLogPojo)CommonTool.JSONStr2JSONObj(param,new ActivityLogPojo());
    try {
      queryPojo.setMemberName("%一%");
      queryPojo.setStartTime("201803");
      queryPojo.setEndTime("201805");
      List<ActivityLogPojo> resultList = null;
      //查询活动配置表
      
      //组装活动配置 
      
      //查询活动积分日志-关联成员表
      resultList = manageDataDaoImpl.queryActivityLog(queryPojo);
      //组装活动配置和活动积分日志
      
    } catch (Exception e) {
      e.printStackTrace();
    }
    
    return null;
  }

}
