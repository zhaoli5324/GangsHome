<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<script type="text/javascript">
	var path = "${pageContext.request.contextPath}";
</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/hello.js"></script>
</head>
<body>
	Hello！！！TTTTTTT
	<img alt="" src="${pageContext.request.contextPath}/img/圣堂刺客-半身.jpg">
	<!-- 获取ModelAndView传值的第一种方式 -->
	<h1>${requestScope.test}</h1>
	<!-- 获取ModelAndView传值的第二种方式 -->
	<h2><%=request.getAttribute("test") %></h2>
</body>
</html>