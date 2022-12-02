<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="dto.UserDTO"%>
<%@page import="dao.UserDAO"%>
<% 
request.setCharacterEncoding("UTF-8");
String nickname = request.getParameter("userIdRegister");
String password = request.getParameter("passwordRegister");

UserDTO dto = new UserDTO();
dto.setNickname(nickname);
dto.setPassword(password);
out.print(dto);

UserDAO dao = new UserDAO();
dao.insertUser(dto);

response.sendRedirect("index.jsp"); 
%>