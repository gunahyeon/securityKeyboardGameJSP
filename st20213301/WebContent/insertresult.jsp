<%@page import="java.net.URLEncoder"%>
<%@page import="java.util.List"%>
<%@page import="dao.LogDAO"%>
<%@page import="dto.LogDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
	<%
	System.out.println("called");
	request.setCharacterEncoding("UTF-8");
	String nickname = request.getParameter("nickname");
	String theme = request.getParameter("theme");
	String typeSec = request.getParameter("typeSec");
	String created_at = request.getParameter("created_at");
	String incorrect = request.getParameter("incorrect"); 
	String correctper = request.getParameter("correctper"); 
	String step = request.getParameter("step"); //
	String maxspeed = request.getParameter("maxspeed"); 
	System.out.println(nickname); //
	System.out.println(theme); //
	System.out.println(created_at); //
	System.out.println(incorrect); //
	System.out.println(correctper); //
	System.out.println(step); //
	System.out.println(maxspeed); //
	response.sendRedirect("index.jsp");
	
	if(nickname == null) {
		nickname = "익명의 유저";
	}
	if(step == null) {
		step = "";
	}
	LogDTO dto = new LogDTO();
	dto.setNickname(nickname);
	dto.setTheme(theme + " " + typeSec);
	dto.setStep(step);
	dto.setIncorrect(incorrect);
	dto.setMaxspeed("");
	dto.setCorrectper(correctper+"%");
	dto.setCreated_at(created_at);
	
	// 5. DAO를 사용해서 CRUD
	LogDAO dao = new LogDAO();
	dao.insertLog(dto);
	dao.close();
	/* 
	response.sendRedirect("dashboard.jsp"); */
	%>
