// 1. db 테이블 조회하여 가져온 리스트 
hangullist = ["어머님, 하나 이름과, 봄이 경, 봅니다.",
"아름다운 이름과, 가득 청춘이 이름을 슬퍼하는 봅니다.",
"이름과 보고, 하나에 무엇인지 헤는 둘 있습니다.",
"가득 어머님, 다하지 프랑시스 언덕 같이 있습니다.",
"겨울이 하나에 한 이름자 별이 사랑과 별 듯합니다.",
"소학교 별들을 겨울이 마리아 시와 불러 그리고 있습니다. 부끄러운 내 추억과 우는 있습니다.",
"이름자를 아스라히 아름다운 무엇인지 새워 가슴속에 라이너 거외다.",
"않은 멀리 위에 위에 무성할 하나 이 우는 별 봅니다.",
"북간도에 별 그러나 불러 추억과 거외다.",
"위에 별 이름자 것은 아직 까닭이요, 이런 듯합니다.",
"별 밤을 이런 말 별들을 벌써 가슴속에 가난한 거외다.",
"계집애들의 사랑과 쉬이 없이 듯합니다.",
"별 그리워 위에 계십니다.",
"멀듯이, 하나에 북간도에 멀리 봅니다.",
"묻힌 새워 하나에 불러 노새"]; //db내용

// 2. 조회한 리스트 섞어주기
const shuffle = (array) => {
    array.sort(() => Math.random()-0.5);
}
shuffle(hangullist);

// 3. db encrypt/decrypt 요청후 리스트로 받기.
hiddenlist = ['ab','abc','avd','xr=','rd','fds','fdg','fds','1fr','dyh=','457','dhgf','fdf','7yjg','3ewd'];

// 4. 전역 변수선언
var index = 0; // 인덱스
var accuracyBar = 100/(hangullist.length); // 정확도 value
var processBar = 100/(hangullist.length); // 진행도 value
var time = 300; // 기준시간
var min = ""; // 분
var sec = ""; // 초
var keySpeed = 0;
var keyMaxSpeed = 0;

// 5. 초기작업
// 5-1. 보드판 초기작업
document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
<h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--del-color); opacity: 30%;"></h6></h1>
<h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 30px; background-color: var(--ins-color);">${hangullist[0]}</h6><small id="blank1" style=" font-size: 20px; opacity: 30%;"></small></h1>
<h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;">${hangullist[1]}</h6><small id="blank2" style=" font-size: 20px; opacity: 30%;"></small></h1>
<h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;">${hangullist[2]}</h6><small id="blank3" style=" font-size: 20px; opacity: 30%;"></small></h1>
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
    // 현재타수, 최고타수
    document.querySelector("#keySpeed").innerHTML = '현재타수 : ' + ++keySpeed;
    keySpeed = keySpeed + 5;

    if(event.key === 'Enter' && index <= (hangullist.length-4)){
        // 6-2 호출
        var result = check(event.target.value, hangullist[index], hiddenlist[index]);
        document.querySelector("#keyboardList").innerHTML = '';
        document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
        ${result}
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 30px; background-color: var(--ins-color);">${hangullist[index+1]}</h6><small id="blank1" style="font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;">${hangullist[index+2]}</h6><small id="blank2" style="font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;">${hangullist[index+3]}</h6><small id="blank3" style="font-size: 20px; opacity: 30%;"></small></h1>
        `);
        if (keySpeed > keyMaxSpeed) {
            document.querySelector("#keyMaxSpeed").innerHTML = '최고타수 : ' + keySpeed;
            keyMaxSpeed = keySpeed;
        }
        index++;
    }
    else if(event.key === 'Enter' && index == (hangullist.length-3)){
        // 6-2 호출
        var result = check(event.target.value, hangullist[index], hiddenlist[index]);
        document.querySelector("#keyboardList").innerHTML = '';
        document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
        ${result}
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 30px; background-color: var(--ins-color);">${hangullist[index+1]}</h6><small id="blank1" style="font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;">${hangullist[index+2]}</h6><small id="blank2" style="font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;"></h6><small id="blank3" style="font-size: 20px; opacity: 30%;"></small></h1>
        `);
        if (keySpeed > keyMaxSpeed) {
            document.querySelector("#keyMaxSpeed").innerHTML = '최고타수 : ' + keySpeed;
            keyMaxSpeed = keySpeed;
        }
        index++;
    }
    else if(event.key === 'Enter' && index == (hangullist.length-2)){
        // 6-2 호출
        var result = check(event.target.value, hangullist[index], hiddenlist[index]);
        document.querySelector("#keyboardList").innerHTML = '';
        document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
        ${result}
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 30px; background-color: var(--ins-color);">${hangullist[index+1]}</h6><small id="blank1" style="font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;"></h6><small id="blank3" style="font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;"></h6><small id="blank2" style="font-size: 20px; opacity: 30%;"></small></h1>
        `);
        if (keySpeed > keyMaxSpeed) {
            document.querySelector("#keyMaxSpeed").innerHTML = '최고타수 : ' + keySpeed;
            keyMaxSpeed = keySpeed;
        }
        index++;
    }
    else if(event.key === 'Enter' && index == (hangullist.length-1)){
        // 6-2 호출
        var result = check(event.target.value, hangullist[index], hiddenlist[index]);
        document.querySelector("#keyboardList").innerHTML = '';
        document.querySelector("#keyboardList").insertAdjacentHTML("afterbegin",`
        ${result}
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 30px; background-color: var(--ins-color);"></h6><small id="blank1" style="font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;"></h6><small id="blank2" style="font-size: 20px; opacity: 30%;"></small></h1>
        <h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--secondary); opacity: 30%;"></h6><small id="blank3" style="font-size: 20px; opacity: 30%;"></small></h1>
        `);
        if (keySpeed > keyMaxSpeed) {
            document.querySelector("#keyMaxSpeed").innerHTML = '최고타수 : ' + keySpeed;
            keyMaxSpeed = keySpeed;
        }
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
        return `<h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--ins-color); opacity: 30%;">${question}</h6><small style="font-size: 20px; opacity: 30%;">${hidden}</small></h1>`
    } 
    else if (answer !== hidden) {
        return `<h1 style="margin-bottom: 8px;"><h6 style="margin-bottom: 0px; font-size: 24px; background-color: var(--del-color); opacity: 30%;">${question}</h6><small style="font-size: 20px; opacity: 30%;">${answer}</small></h1>`
    }    
}

// 7. 미리보기(연속), 진행도표시
document.querySelector("#inputAnswer").addEventListener("change", (event)=>{

    document.querySelector("#processBar").value += processBar;
    document.querySelector("#processText").innerHTML = '';
    document.querySelector("#processText").innerHTML = '진행도 : ' + index + '/' + hangullist.length;
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
    else if(index == (hiddenlist.length)){
        alert("done!");
    }
    event.target.value = '';
})

// 8. 타이머
var timer = setInterval(()=>{
    min = parseInt(time/60);
    sec = time%60;

    document.querySelector("#timer").innerHTML = '남은시간 : ' + min + '분 ' + sec + '초';
    time--;

    // 타임아웃
    if(time < 0) {
        clearInterval(timer);
        alert("done!");
    }
},1000);

// 타수
setInterval(()=>{
    if(keySpeed < 1) {
        keySpeed = 0;
        document.querySelector("#keySpeed").innerHTML = '현재타수 : 0';
    } else {
        document.querySelector("#keySpeed").innerHTML = '현재타수 : ' + --keySpeed;
    }
},500);