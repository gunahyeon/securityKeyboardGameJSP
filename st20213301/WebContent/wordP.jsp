<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>보안과컴퓨터👀 :: 낱말 연습</title>
<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</head>
<body>
<main class="container">
<section style="text-align: center;">
    <h4 style="margin: 0;">보안과컴퓨터👀</h4>
    <h1><mark>::낱말 연습</mark></h1>
</section>
<section>
    <article style="margin: 0; padding : 0 5px; display: flex;">
        <div style="width: 10%; margin-right: 30px;">
            <small id="processText">진행도 : 0%</small><br>
            <small><ins id="accuracyText">정확도 : 0% </ins></small><br>
            <small id="errCount">오타수 : 0</small>
        </div>
        <div style="width: 100%;">
            <progress id="processBar" style="margin-top: 10px; border-radius: 0;" value="0" max="100"></progress><br>
            <progress id="accuracyBar" style="border-radius: 0;" value="0" max="100"></progress><br>
        </div>
    </article>
</section>
<div style="margin-bottom: 16px;">
    <article id="keyboardList" class="grid" style="margin: 0; padding: 10px; text-align: center; align-items: end;">
    </article>
</div>
<section style="margin: 0; padding : 0 5px;">
    <!-- Switches -->
    <fieldset> 
        <input type="checkbox" id="preview" name="sec" style="margin-left: 8px;">
        <label for="preview">암호화 미리보기</label>
    </fieldset>
    <input type="text" id="inputAnswer" placeholder="입력 후 [Enter]를 누르세요." autofocus>
</section>
</main>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="./js/practice.js"></script>
</body>
</html>