<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="dto.UserDTO"%>
<%@page import="dao.UserDAO"%>
<%@page import="util.Hash" %>
<% 
request.setCharacterEncoding("UTF-8");
String nickname = request.getParameter("userIdRegister");
String password = request.getParameter("passwordRegister");

Hash h = new Hash();
String passwordHash = h.getHash(password);

UserDTO dto = new UserDTO();
dto.setNickname(nickname);
dto.setPassword(passwordHash);
out.print(dto);

UserDAO dao = new UserDAO();
dao.insertUser(dto);

response.sendRedirect("index.jsp"); 
%>