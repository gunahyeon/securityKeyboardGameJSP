// 1. db 테이블 조회하여 가져온 랜덤리스트 
console.log("imcold")
hangullist =[];
hiddenlist =[];
beforelist = document.getElementsByName("keyboardList");
beforehiddenlist = document.getElementsByName("hiddenList");
for(var i=0;i<beforelist.length;i++){
	hangullist.push(beforelist[i].value);
	hiddenlist.push(beforehiddenlist[i].value);
}
console.log(hangullist);
console.log(hiddenlist);
// 2. 조회한 리스트 섞어주기
/*const shuffle = (array) => {
	array.sort(() => Math.random()-0.5);
}
shuffle(hangullist);*/
		
// 3. db encrypt/decrypt 요청후 리스트로 받기.
//hiddenlist = ['ab','abc','avd','xr=','rd','fds','fdg','fds','1fr','dyh=','457','dhgf','fdf','7yjg','3ewd'];

// 4. 전역 변수선언
var index = 0; // 인덱스
var errCount = 0; // 오타수
var accuracyBar = 100/(hangullist.length); // 정확도 value
var processBar = 100/(hangullist.length);

// 5. 초기작업
// 5-1. 보드판 초기작업
document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
<h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--del-color); opacity: 30%;"></b></h1>
<h1 style="margin-bottom: 8px;"><b style="font-size: 80px; background-color: var(--ins-color);">${hangullist[0]}</b><small id="blank1" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
<h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;">${hangullist[1]}</b><small id="blank2" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
<h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;">${hangullist[2]}</b><small id="blank3" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
`);

// 5-2. 미리보기 초기작업
$('#preview').click(()=>{
    var checked = $('#preview').is(':checked');
    document.querySelector("#inputAnswer").focus();
    if (checked === true) {
        document.querySelector("#blank1").insertAdjacentHTML('afterbegin',`${hiddenlist[index]}`);
        document.querySelector("#blank2").insertAdjacentHTML('afterbegin',`${hiddenlist[index+1]}`);
        document.querySelector("#blank3").insertAdjacentHTML('afterbegin',`${hiddenlist[index+2]}`);
    }
    else {
        document.querySelector("#blank1").innerHTML = '';
        document.querySelector("#blank2").innerHTML = '';
        document.querySelector("#blank3").innerHTML = '';
    }
});

// 6. 입력값 검사
// 6-1. [enter]를 누를 때마다 입력값에 대한 결과, 앞으로 입력 할 값 보여주기
document.querySelector("#inputAnswer").addEventListener('keypress', (event)=>{
    if(event.key === 'Enter' && index <= (hangullist.length-4)){
        // 6-2 호출
        var result = check(event.target.value, hangullist[index], hiddenlist[index]);
        document.querySelector("#keyboardList").innerHTML = '';
        document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
        ${result}
        <h1 style="margin-bottom: 8px;"><b style="font-size: 80px; background-color: var(--ins-color);">${hangullist[index+1]}</b><small id="blank1" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;">${hangullist[index+2]}</b><small id="blank2" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;">${hangullist[index+3]}</b><small id="blank3" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        `);
        index++;
    }
    else if(event.key === 'Enter' && index == (hangullist.length-3)){
        // 6-2 호출
        var result = check(event.target.value, hangullist[index], hiddenlist[index]);
        document.querySelector("#keyboardList").innerHTML = '';
        document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
        ${result}
        <h1 style="margin-bottom: 8px;"><b style="font-size: 80px; background-color: var(--ins-color);">${hangullist[index+1]}</b><small id="blank1" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;">${hangullist[index+2]}</b><small id="blank2" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;"></b><small id="blank3" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        `);
        index++;
    }
    else if(event.key === 'Enter' && index == (hangullist.length-2)){
        // 6-2 호출
        var result = check(event.target.value, hangullist[index], hiddenlist[index]);
        document.querySelector("#keyboardList").innerHTML = '';
        document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
        ${result}
        <h1 style="margin-bottom: 8px;"><b style="font-size: 80px; background-color: var(--ins-color);">${hangullist[index+1]}</b><small id="blank1" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;"></b><small id="blank2" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;"></b><small id="blank3" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        `);
        index++;
    }
    else if(event.key === 'Enter' && index == (hangullist.length-1)){
        // 6-2 호출
        var result = check(event.target.value, hangullist[index], hiddenlist[index]);
        document.querySelector("#keyboardList").innerHTML = '';
        document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
        ${result}
        <h1 style="margin-bottom: 8px;"><b style="font-size: 80px; background-color: var(--ins-color);"></b><small id="blank1" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;"></b><small id="blank2" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--secondary); opacity: 30%;"></b><small id="blank3" style="margin-left:8px; font-size: 20px; opacity: 30%;"></small></h1>
        `);
        index++;
    }
})

// 6-2. 입력값 비교(입력값, 제시한문제, 문제에 대한 정답)
const check = (answer, question, hidden) => {
    console.log(answer,question);
    if(answer === hidden) {
        document.querySelector("#accuracyBar").value += accuracyBar;
        document.querySelector("#accuracyText").innerHTML = '';
        document.querySelector("#accuracyText").innerHTML = '정확도 : ' + parseInt(document.querySelector("#accuracyBar").value) + '%';
        return `<h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--ins-color); opacity: 30%;">${question}</b><small style="margin-left:8px; font-size: 20px; opacity: 30%;">${hidden}</small></h1>`
    } 
    else if (answer !== hidden) {
        document.querySelector("#errCount").innerHTML = '';
        document.querySelector("#errCount").innerHTML = '오타수 : ' + ++errCount;
        return `<h1 style="margin-bottom: 8px;"><b style="font-size: 60px; background-color: var(--del-color); opacity: 30%;">${question}</b><small style="margin-left:8px; font-size: 20px; opacity: 30%;">${answer}</small></h1>`
    }    
}

// 7. 미리보기(연속), 진행도표시
document.querySelector("#inputAnswer").addEventListener("change", (event)=>{
    document.querySelector("#processBar").value += processBar;
    document.querySelector("#processText").innerHTML = '';
    document.querySelector("#processText").innerHTML = '진행도 : ' + parseInt(document.querySelector("#processBar").value) + '%';
    console.log("imcalled")
    var checked = $('#preview').is(':checked');
    console.log(checked);
    if (checked === true && index <= (hiddenlist.length-3)) {
        document.querySelector("#blank1").insertAdjacentHTML('afterbegin',`${hiddenlist[index]}`);
        document.querySelector("#blank2").insertAdjacentHTML('afterbegin',`${hiddenlist[index+1]}`);
        document.querySelector("#blank3").insertAdjacentHTML('afterbegin',`${hiddenlist[index+2]}`);
    } 
    else if(checked === true && index == (hiddenlist.length-2)){
        document.querySelector("#blank1").insertAdjacentHTML('afterbegin',`${hiddenlist[index]}`);
        document.querySelector("#blank2").insertAdjacentHTML('afterbegin',`${hiddenlist[index+1]}`);
    }
    else if(checked === true && index == (hiddenlist.length-1)){
        document.querySelector("#blank1").insertAdjacentHTML('afterbegin',`${hiddenlist[index]}`);
    }
    else if(index == (hangullist.length)){
        alert("연습 끝! [확인]: 통계 페이지로 이동합니다.");
		$.ajax({
			type:"post",
			url:"insertresult.jsp",
			data:{
				nickname:document.querySelector("#nickname").value,
				theme:document.querySelector("#theme").value,
				incorrect:errCount,
				correctper:parseInt(document.querySelector("#accuracyBar").value),
				created_at:new Date().toLocaleString(),
				step:"",
				maxspeed:""
				},
			success : (res)=> {
				console.log("success");
				location.href = "dashboard.jsp";
			},
			error : (err)=>{
				console.log(err);
			}
		});
    }
    event.target.value = '';
})

