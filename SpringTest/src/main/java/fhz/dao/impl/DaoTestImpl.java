package fhz.dao.impl;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.junit.Test;
import org.springframework.stereotype.Repository;

import fhz.dao.IDaoTest;
import fhz.exception.BusiException;
import fhz.exception.ParamException;

@Repository("daoTestImpl")
public class DaoTestImpl implements IDaoTest{
  
  public void exception(Integer id) throws Exception{
    switch (id) {
    case 1:
      throw new BusiException("Dao"+id);
    default:
      throw new ParamException("Dao Parameter Error");
    }
  }

  /**
   * 测试MySQL JDBC连接
   */
  @Test
  public void testMysqlConn() throws Exception {
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test?serverTimezone=UTC",
      "root","123456");
    System.out.println("与数据库建立连接");
    Statement state = conn.createStatement();
    String sql = "SELECT fhz_test.co1,fhz_test.co2 FROM fhz_test ";
    ResultSet rs = state.executeQuery(sql);
    while(rs.next()){
      //获取emp表中的字段
      String col1 = rs.getString("co1");
      System.out.println(col1);
      String col2 = rs.getString("co2");
      System.out.println(col2);
    }
    //与数据库断开连接
    conn.close();
//    MapperScannerConfigurer
  }

}
