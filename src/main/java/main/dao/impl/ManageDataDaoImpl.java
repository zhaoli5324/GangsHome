package main.dao.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import main.dao.IManageDataDao;
import main.pojo.ActivityLogPojo;

@Repository("manageDataDaoImpl")
public class ManageDataDaoImpl implements IManageDataDao{
  @Autowired
  private SqlSessionTemplate SqlSessionTemplate;
  
  public List<ActivityLogPojo> queryActivityLog(ActivityLogPojo param) throws Exception {
    List<ActivityLogPojo> list = SqlSessionTemplate.selectList("queryActivityLog", param);
//    SqlSessionFactory.getConfiguration().getMappedStatement("TreasureOrder.queryVenderDzDetailTotalFee").getBoundSql(map).getSql();
    return list;
  }

}
