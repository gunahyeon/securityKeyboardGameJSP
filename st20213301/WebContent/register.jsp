<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="dto.UserDTO"%>
<%@page import="dao.UserDAO"%>
<%@page import="util.Hash" %>
<% 
request.setCharacterEncoding("UTF-8");
String nickname = request.getParameter("userIdRegister");
String password = request.getParameter("passwordRegister");
String passwordConfirm = request.getParameter("passwordConfirm");
System.out.println(password+ " " + passwordConfirm);


Hash h = new Hash();
String passwordHash = h.getHash(password);

UserDTO dto = new UserDTO();
dto.setNickname(nickname);
dto.setPassword(passwordHash);
out.print(dto);

if(password.equals(passwordConfirm)) { 
	UserDAO dao = new UserDAO();
	dao.insertUser(dto);
%>
<script>
	alert("계정 생성이 완료 되었습니다. 로그인하여 주십시오.");
	location.href="index.html"; 
</script>
<% } else { %>
<script>
	alert("비밀번호 확인이 일치하지 않습니다. 다시 입력하여 주십시오.");
	history.back();
</script>
<% }

%>