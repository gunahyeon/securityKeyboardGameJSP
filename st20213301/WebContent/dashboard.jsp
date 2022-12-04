<%@page import="java.net.URLEncoder"%>
<%@page import="java.util.List"%>
<%@page import="dao.LogDAO" %>
<%@page import="dto.LogDTO" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>보안과컴퓨터👀 :: 통계</title>
<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</head>
<body>
<main class="container">
<section style="text-align: center;">
    <h4 style="margin: 0;">보안과컴퓨터👀</h4>
    <h1><mark>::통계</mark></h1>
</section>
<% 
	LogDAO dao = new LogDAO(); 
	List<LogDTO> loglist = dao.logList();
%>
<article style="padding: 0;">
    <table role="grid">
        <thead>
	        <tr>
	        <th scope="row">닉네임 </th>
	        <td>테마 </td>
	        <td>단계 </td>
	        <td>오타수 </td>
	        <td>최고타수 </td>
	        <td><ins>정확도 </ins></td>
	        <td>날짜 </td>
	        </tr>
        </thead>
        <tbody>
		<%for(LogDTO dto : loglist) {%>
        <tr>
	        <th scope="row"><%=dto.getNickname() %></th>
	        <td><%=dto.getTheme() %></td>
	        <td><%=dto.getStep() %></td>
	        <td><%=dto.getIncorrect() %></td>
	        <td><%=dto.getMaxspeed() %></td>
	        <td><ins><%=dto.getCorrectper() %></ins></td>
	        <td><%=dto.getCreated_at() %></td>
        </tr>
        <% }%>
        </tbody>
    </table>
</article>
</main>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<!-- <script src="/practice.js"></script> -->
</body>
</html>