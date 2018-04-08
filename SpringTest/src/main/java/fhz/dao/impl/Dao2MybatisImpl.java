package fhz.dao.impl;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fhz.dao.IDao2Mybatis;
import fhz.pojo.FhzTest;

@Repository("dao2MybatisImpl")
public class Dao2MybatisImpl implements IDao2Mybatis {

  @Autowired
  private SqlSessionTemplate SqlSessionTemplate;
  
  public FhzTest select() throws Exception {
    return SqlSessionTemplate.selectOne("select");
  }

}
