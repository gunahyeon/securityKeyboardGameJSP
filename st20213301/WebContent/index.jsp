<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>보안과컴퓨터👀</title>
<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
<link rel="stylesheet" href="./css/flow.css">
</head>
<body>
<main class="container">
<section style="text-align: center;">
    <h4 style="margin: 0;">보안과컴퓨터👀</h4>
    <h1><mark>해독 연습</mark></h1>
</section>
<section id="dashboardList" class="flow-container">
    <article class="flow-text" style="margin: 0; padding: 0 5px; text-align: center;">
        <small class="flow-wrap">👩🏻 아아, <b>[통계 최근 기록]</b> 짧은글 연습, 진행도 : 3/30, 최고타수 : 140, 목표타수 : 100, <ins>정확도 : 100%</ins> </small>
    </article>
    <!-- <article style="margin: 0; padding: 0 5px; text-align: center;">
        <small>👩🏻 아아, <b>[통계 최근 기록]</b> 자리 연습, 단계 : 1,진행도 : 18%, 오타수 : 1, <ins>정확도 : 95%</ins> </small>
    </article> -->
</section>
<section class="grid">
    <div>
        <button id="keyboardP">자리 연습</button>
        <button id="wordP">낱말 연습</button>
        <button id="sentenceP">짧은글  연습</button>
        <form action="dashboard.jsp">
            <button type="submit" id="dashboard">통계</button>
        </form>
        <button class="secondary">로그아웃</button>
    </div>
    <div id="content">
        <article style="margin:0">
            <h6>
                보안 글자판의 위치를 익히는 곳입니다. Base64코드 암산에 익숙하지 않다면 제일 먼저 자리 연습을 합니다.
            </h6>
            <h6>
                화면에서 연습할 글쇠를 미리 볼 수 있으며, [정답 미리보기]의 도움을 받을 수 있습니다.
            </h6>
            <button class="contrast"
            data-target="step_encrpyt_keyboard"
            onClick="toggleModal(event)">
            암호화 연습하기
            </button>
            <button class="contrast"
            data-target="step_decrypt_keyboard"
            onClick="toggleModal(event)">
            복호화 연습하기
            </button>
        </article>
    </div>
</section>
</main>
<!-- Modal -->
<dialog id="login-modal">
<div style="width: 600px;">
    <a href="#close"
    aria-label="Close"
    class="close"
    data-target="login-modal"
    onClick="toggleModal(event)">
    </a>
    <h3 style="text-align: center;">보안과 컴퓨터👀</h3>
    <form action="#" method="post">
        <label>닉네임</label>
        <input type="text" id="userIdLogin">
        <label>비밀번호</label>
        <input type="password" id="passwordLogin">
    </form>
    <footer style="text-align: center;">
    <a href="#cancel"
        role="button"
        class="secondary"
        data-target="login-modal"
        onClick="toggleModal(event)">
        뒤로가기
    </a>
    <a href="#confirm"
        role="button"
        data-target="login-modal"
        onClick="toggleModal(event)">
        로그인
    </a>
    </footer>
</div>
</dialog>
<dialog id="register-modal">
    <div style="width: 600px;">
        <a href="#close"
        aria-label="Close"
        class="close"
        data-target="register-modal"
        onClick="toggleModal(event)">
        </a>
        <h3 style="text-align: center;">보안과 컴퓨터👀</h3>
        <form action="index.jsp" method="post">
            <label>닉네임</label>
            <input type="text" id="userIdRegister">
            <label>비밀번호</label>
            <input type="password" id="passwordRegister">
            <label>비밀번호 확인</label>
            <input type="password" id="passwordConfirm">
        </form>
        <footer style="text-align: center;">
        <a href="#cancel"
            role="button"
            class="secondary"
            data-target="register-modal"
            onClick="toggleModal(event)">
            뒤로가기
        </a>
        <a href="#confirm"
            role="button"
            data-target="register-modal"
            onClick="toggleModal(event)">
            생성 완료
        </a>
        </footer>
    </div>
</dialog>
<dialog id="step_encrpyt_keyboard">
    <article style="width: 600px;">
        <a href="#close"
        aria-label="Close"
        class="close"
        data-target="step_encrpyt_keyboard"
        onClick="toggleModal(event)">
        </a>
        <h3 style="text-align: center;">암호화 단계 선택👀</h3>
        <form action="/keyboardP.html" method="get">
            <button type="submit" class="secondary">1단계</button>
            <button type="submit" class="secondary">2단계</button>
            <button type="submit" class="secondary">3단계</button>
            <button type="submit" class="secondary">4단계</button>
            <button type="submit" class="secondary">5단계</button>
        </form>
    </article>
</dialog>
<dialog id="step_decrypt_keyboard">
    <article style="width: 600px;">
        <a href="#close"
        aria-label="Close"
        class="close"
        data-target="step_decrypt_keyboard"
        onClick="toggleModal(event)">
        </a>
        <h3 style="text-align: center;">복호화 단계 선택👀</h3>
        <form action="/keyboardP.html" method="get">
            <button type="submit" class="secondary">1단계</button>
            <button type="submit" class="secondary">2단계</button>
            <button type="submit" class="secondary">3단계</button>
            <button type="submit" class="secondary">4단계</button>
            <button type="submit" class="secondary">5단계</button>
        </form>
    </article>
</dialog>
<dialog id="step_encrpyt_word">
    <article style="width: 600px;">
        <a href="#close"
        aria-label="Close"
        class="close"
        data-target="step_encrpyt_word"
        onClick="toggleModal(event)">
        </a>
        <h3 style="text-align: center;">암호화 단계 선택👀</h3>
        <form action="/wordP.html" method="get">
            <button type="submit" class="secondary">1단계</button>
            <button type="submit" class="secondary">2단계</button>
            <button type="submit" class="secondary">3단계</button>
            <button type="submit" class="secondary">4단계</button>
            <button type="submit" class="secondary">5단계</button>
        </form>
    </article>
</dialog>
<dialog id="step_decrypt_word">
    <article style="width: 600px;">
        <a href="#close"
        aria-label="Close"
        class="close"
        data-target="step_decrypt_word"
        onClick="toggleModal(event)">
        </a>
        <h3 style="text-align: center;">복호화 단계 선택👀</h3>
        <form action="/wordP.html" method="get">
            <button type="submit" class="secondary">1단계</button>
            <button type="submit" class="secondary">2단계</button>
            <button type="submit" class="secondary">3단계</button>
            <button type="submit" class="secondary">4단계</button>
            <button type="submit" class="secondary">5단계</button>
        </form>
    </article>
</dialog>
<script src="/js/modal.js"></script>
<script src="/js/index.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
</body>
</html>