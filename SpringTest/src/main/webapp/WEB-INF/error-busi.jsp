<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>错误！</title>
</head>
<body>
	<h1>异常名称：业务异常</h1>
	<hr>
	<h2>异常信息：${requestScope.ex.getMessage()} </h2>
	<h3>详细信息：${requestScope.ex.getDetailMsg()}</h3>
</body>
</html>