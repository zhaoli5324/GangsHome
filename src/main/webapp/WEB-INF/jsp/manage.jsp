<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/manage/manageMenu.js"></script>
<div id="manageMenu" style="background: white;">
	<div>
		<button type="button" id="close" class="close" style="width:30px;height:30px;"></button>
		<h4 id="myModalLabel" class="lead">
			活动管理
		</h4>
	</div>
	<div id="mainPlace" style="width:95%;margin-left: auto;margin-right: auto;">
		<nav class="navbar navbar-default" role="navigation" id="nav-menu">
			<ul class="nav navbar-nav">
				<li class="active" id="nav-point"><a href="#"><h1>积分管理</h1></a></li>
				<li id="nav-person"><a href="#"><h1>成员管理</h1></a></li>
				<li id="nav-activity"><a href="#"><h1>活动管理</h1></a></li>
			</ul>
		</nav>
		
		<!-- 积分管理 -->
		<div id="body-point" class="panel panel-default">
			<h1>积分管理</h1>
			<div class="panel-body" style="padding-bottom:0px;">
		        <div >
		            <div class="panel-body">
		                <form id="formSearch" class="form-horizontal">
		                    <div class="form-group" style="margin-top:15px">
		                        <label class="control-label col-sm-1" for="txt_search_departmentname">成员名称</label>
		                        <div class="col-sm-2">
		                            <input type="member_name" class="form-control" id="txt_search_departmentname">
		                        </div>
		                        
		                        <label class="control-label col-sm-1" for="txt_search_statu">开始时间</label>
		                        
								<div class="col-sm-2">
					                <div id="datetimepicker" class="controls input-append date form_control" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
					                    <input style="width:200px;height:34px;" class="form_control" size="32" type="text" value="2018-01-01" readonly>
										<span class="add-on"><i class="icon-th"></i></span>
					                </div>
									<input type="hidden" id="start_time" value="2018-01-01" /><br/>
					            </div>

		                        <label class="control-label col-sm-1" for="txt_search_statu">结束时间</label>
		                        <div class="col-sm-2">
					                <div id="datetimepicker" class="controls input-append date form_control" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
					                    <input style="width:200px;height:34px;" class="form_control" size="32" type="text" value="2018-01-01" readonly>
										<span class="add-on"><i class="icon-th"></i></span>
					                </div>
									<input type="hidden" id="end_time" value="2018-01-01" /><br/>
					            </div>
		                        
		                        <div class="col-sm-3">
		                        	<button type="button" class="">查询</button>
		                        </div>
		                        
		                    </div>
		                </form>
		            </div>
		        </div>       
		
		        <div id="toolbar" class="btn-group">
		            <button id="btn_add" type="button" class="btn btn-default">
		                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
		            </button>
		            <button id="btn_edit" type="button" class="btn btn-default">
		                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
		            </button>
		            <button id="btn_delete" type="button" class="btn btn-default">
		                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
		            </button>
		        </div>
		        <table id="tb_departments"></table>
		    </div>
		</div>
		<!-- 成员管理 -->
		<div id="body-person" class="panel panel-default"><h1>成员管理</h1></div>
		<!-- 活动管理 -->
		<div id="body-activity" class="panel panel-default"><h1>活动管理</h1></div>
	</div>
</div>