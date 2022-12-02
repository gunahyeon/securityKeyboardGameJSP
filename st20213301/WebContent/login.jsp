<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="dao.UserDAO"%>
<%@page import="util.Hash" %>
<% 
request.setCharacterEncoding("UTF-8");
String nickname = request.getParameter("userIdLogin");
String password = request.getParameter("passwordLogin");

Hash h = new Hash();
String passwordHash = h.getHash(password);

UserDAO dao = new UserDAO();
Boolean result = dao.loginUser(nickname,passwordHash);

if(result == false) {
%>
	<script>
	alert("비밀번호가 일치하지 않습니다. 다시 입력해 주세요. ");
	history.back();
	</script>
<%
} else {
	response.sendRedirect("index.jsp"); 
}
%>