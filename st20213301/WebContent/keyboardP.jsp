<%@page import="java.net.URLEncoder"%>
<%@page import="java.util.List"%>
<%@page import="util.EncodeOrDecode"%>
<%@page import="dao.KeyboardPlaintextDAO"%>
<%@page import="dto.KeyboardPlaintextDTO"%>
<%@page import="dao.KeyboardEncrypttextDAO"%>
<%@page import="dto.KeyboardEncrypttextDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>보안과컴퓨터👀 :: 자리 연습</title>
<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
<%	
	request.setCharacterEncoding("UTF-8");
	String theme = request.getParameter("theme");	
	String nickname = request.getParameter("nickname");	
	System.out.println(nickname);
	System.out.println(theme);
%>
</head>
<body>
<main class="container">
<section style="text-align: center;">
    <h4 style="margin: 0;">보안과컴퓨터👀</h4>
    <h1><mark>::자리 연습</mark></h1>
</section>
<section>
    <article style="margin: 0; padding : 0 5px; display: flex;">
        <div style="width: 10%; margin-right: 30px;">
            <small id="processText" >진행도 : 0%</small><br>
            <small><ins id="accuracyText">정확도 : 0% </ins></small><br>
            <small id="errCount">오타수 : 0</small>
            <input id="theme" type="hidden" name="theme" value="자리 연습 ">
            <input id="nickname" type="hidden" name="nickname" value="<%=nickname %>">
        </div>
        <div style="width: 100%;">
            <progress id="processBar" style="margin-top: 10px; border-radius: 0;" value="0" max="100"></progress><br>
            <progress id="accuracyBar" name="correctper" style="border-radius: 0;" value="0" max="100"></progress><br>
        </div>
    </article>
</section>
<div style="margin-bottom: 16px;">
    <article id="keyboardList" class="grid" style="margin: 0; padding: 10px; text-align: center; align-items: end;">
    	<% 
		KeyboardPlaintextDAO dao = new KeyboardPlaintextDAO(); 
		List<KeyboardPlaintextDTO> keyboardList = dao.keyboardList();
	
		KeyboardEncrypttextDAO dao1 = new KeyboardEncrypttextDAO();
		List<KeyboardEncrypttextDTO> keyboardList1 = dao1.keyboardList();
		
			if (theme.equals("decrypt")) {
				for(KeyboardEncrypttextDTO dto1 : keyboardList1){
					EncodeOrDecode encodeOrDecode = new EncodeOrDecode();
					String hidden = new String();
					hidden = encodeOrDecode.decrypt(dto1.getKeyboard_char());
				%>
				<input type="hidden" class="keyboardList" style="margin-bottom: 8px;" name="keyboardList" value="<%=dto1.getKeyboard_char() %>">
	    		<input type="hidden" class="keyboardList" style="margin-bottom: 8px;" name="hiddenList" value="<%=hidden %>">
			<%}
			}
		
			if(theme.equals("encrypt")) {
				for(KeyboardPlaintextDTO dto : keyboardList){
					EncodeOrDecode encodeOrDecode = new EncodeOrDecode();
					String hidden = new String();
					hidden = encodeOrDecode.encrypt(dto.getKeyboard_char());		 
		%>
			<input type="hidden" class="keyboardList" style="margin-bottom: 8px;" name="keyboardList" value="<%=dto.getKeyboard_char() %>">
    		<input type="hidden" class="keyboardList" style="margin-bottom: 8px;" name="hiddenList" value="<%=hidden %>">
		<%}
				}%>	
    </article>
</div>
<section style="margin: 0; padding : 0 5px;">
    <!-- Switches -->
    <fieldset> 
        <input type="checkbox" id="preview" name="sec" style="margin-left: 8px;">
        <%if(theme.equals("decrypt")){%>
        	<label for="preview">복호화 미리보기</label> 
        <%} %>
        <%if(theme.equals("encrypt")){%>
       		<label for="preview">암호화 미리보기</label> 
        <%} %>
    </fieldset>
    <input type="text" id="inputAnswer" placeholder="입력 후 [Enter]를 누르세요." autofocus>
</section>
</main>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="./js/practice.js"></script>
</body>
</html>