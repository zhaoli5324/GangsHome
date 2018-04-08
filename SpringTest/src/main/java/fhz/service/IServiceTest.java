package fhz.service;

import fhz.pojo.FhzTest;

public interface IServiceTest {
	
	public void test();

	public void exception(Integer id) throws Exception;
	
	public void daoException(Integer id) throws Exception;
	
	public FhzTest select() throws Exception;
}
