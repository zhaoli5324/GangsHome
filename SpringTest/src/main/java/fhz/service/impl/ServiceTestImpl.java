/**
 * 
 */
/**
 * @author ZhaoLi
 *
 */
package fhz.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fhz.dao.IDao2Mybatis;
import fhz.dao.IDaoTest;
import fhz.exception.BusiException;
import fhz.exception.ParamException;
import fhz.pojo.FhzTest;
import fhz.service.IServiceTest;

@Service("serviceTestImpl")
public class ServiceTestImpl implements IServiceTest{
  
  @Autowired
  private IDaoTest daoTestImpl;
  
  @Autowired
  private IDao2Mybatis dao2MybatisImpl;
	
	public void test() {
		System.out.println("serviceTestImpl.test()");
	}

  public void exception(Integer id) throws Exception {
    switch (id) {
    case 1:
      throw new BusiException("Service"+id);
    default:
      throw new ParamException("Service Parameter Error");
    }
  }

  public void daoException(Integer id) throws Exception {
    daoTestImpl.exception(id);
  }

  public FhzTest select() throws Exception {
    return dao2MybatisImpl.select();
  }
	
} 