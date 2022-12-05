document.querySelector("#keyboardP").addEventListener('click',()=>{
    document.querySelector("#content").innerHTML = '';
    document.querySelector("#content")
    .insertAdjacentHTML("afterbegin", `
        <article style="margin:0">
            <h6>
                보안 글자판의 위치를 익히는 곳입니다. Base64코드 암산에 익숙하지 않다면 제일 먼저 자리 연습을 합니다.
            </h6>
            <h6>
                화면에서 연습할 글쇠를 미리 볼 수 있으며, [정답 미리보기]의 도움을 받을 수 있습니다.
            </h6>
			<form action="keyboardP.jsp" method="get">
				<input type="hidden" name="nickname" value="<%=nickname%>">
	            <button class="contrast" type="submit" name="theme" value="encrypt">
	            암호화 연습하기
	            </button>
			</form>
			<form action="keyboardP.jsp" method="get">
				<input type="hidden" name="nickname" value="<%=nickname%>">
	            <button class="contrast" type="submit" name="theme" value="decrypt">
	            복호화 연습하기
	            </button>
			</form>
        </article>
`);
})
document.querySelector("#wordP").addEventListener('click',()=>{
    document.querySelector("#content").innerHTML = '';
    document.querySelector("#content")
    .insertAdjacentHTML("afterbegin", `
    <article style="margin:0">
    <h6>
        낱말 연습은 자리 연습에서 익힌 보안글쇠를 낱말로 다시 연습하는 곳입니다.
    </h6>
    <h6>
        자리 연습처럼 단계별로 연습할 수 있으며, 다음 누를 글쇠를 미리 보여 줍니다. 낱말 입력을 완료하면 [Enter] 글쇠를 눌러 다음 낱말을 입력합니다. [정답 미리보기]의 도움을 받을 수 있습니다.
    </h6>
    <button class="contrast"
    data-target="step_encrpyt_word"
    onClick="toggleModal(event)">
    암호화 연습하기
    </button>
    <button class="contrast"
    data-target="step_decrypt_word"
    onClick="toggleModal(event)">
    복호화 연습하기
    </button>
    </article>
`);
})
document.querySelector("#sentenceP").addEventListener('click',()=>{
    document.querySelector("#content").innerHTML = '';
    document.querySelector("#content")
    .insertAdjacentHTML("afterbegin", `
    <article style="margin:0">
    <h6>
        짧은 글을 해독하여 보안 해독력을 확인할 수 있습니다. Base64코드 암산에 익숙하다면 활용해보실 수 있습니다.
    </h6>
    <h6>
        짧은 글 연습은 5분 동안 연습할 수 있으며, 빠르기를 측정할 수 있습니다.
        화면에서 연습할 글쇠를 미리 볼 수 있으며, [정답 미리보기]의 도움을 받을 수 있습니다.
    </h6>
		<form action="sentenceP.jsp" method="post">
			<input type="hidden" name="nickname" value="유저" >
            <button class="contrast" type="submit" name="theme" value="encrypt">
            암호화 연습하기
            </button>
		</form>
		<form action="sentenceP.jsp" method="post">
			<input type="hidden" name="nickname" value="유저">
            <button class="contrast" type="submit" name="theme" value="decrypt">
            복호화 연습하기
            </button>
		</form>
    </article>
`);
})