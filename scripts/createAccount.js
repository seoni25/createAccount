function input(inputElement) {
	inputElement.value="";
}

/*아이디 유효성 검사*/
function checkValidId(){
	/*검사 순서: 공백->길이->중복*/
	let id = document.getElementById("id").value;
	let idArray = ["abcdef"];
	let validation1 = false;/*공백 검사*/
	let validation2 = false;/*길이 검사*/
	let validation3 = false;/*중복 검사*/

	/*1.공백검사
		1-1.만약 공백이 있으면->공백 있다고 알리고 입력칸을 비운다.
		1-2.공백이 없으면 다음 조건 체크로 넘어간다.
	*/
	for(var i = 0; i < id.length; i++){
		if(id[i] == ' '){
			alert("공백제외 6자에서 20자 사이의 문자와 숫자만 사용가능합니다");
			validation1 = false;
			id = "";
		}else{
			validation1 = true;
		}
	}

	/*2. 길이 검사
		2-1. 만약 길이가 6자~20자 사이가 아니라면 조건을 알리고, 입력칸을 비운다.
		2-2. 만약 길이가 맞다면, 다음 조건 체크로 넘어간다.
	*/
	if(validation1 == true){
		if(id.length < 6 || id.length > 20){
			alert("6자에서 20자 사이의 문자와 숫자만 사용가능합니다");
			id = "";
			validation2 = false;
		} else {
			validation2 = true;
		}
	}

	/*3. 중복 검사
		3-1. id가 이미 존재할 때
		3-2. id가 존재하지 않을 때 -> 배열에 id를 넣기
	*/
	if(validation2 == true){
		if(idArray.includes(id)){
			alert("이미 존재하는 아이디입니다.");
			id="";
			validation3 = false;
		} else {
			alert("사용할 수 있는 아이디입니다.");
			validation3 = true;
		}
	}

	if(validation3 == true){
		idArray.push(id);
	}

	console.log(idArray); /*--> 확인용*/
}

/*비밀번호 유효성 검사*/
function checkValidPW(){
	/*검사 순서: 공백->길이*/
	let password = document.getElementById("password").value;
	let validation1 = false;/*공백 검사*/
	let validation2 = false;/*길이 검사*/

	/*1.공백검사
		1-1.만약 공백이 있으면->공백 있다고 알리고 입력칸을 비운다.
		1-2.공백이 없으면 다음 조건 체크로 넘어간다.
	*/
	for(var i = 0; i < password.length; i++){
		if(password[i] == ' '){
			alert("공백제외 8자에서 20자 사이의 문자와 숫자만 사용가능합니다");
			validation1 = false;
			password = "";
		}else{
			validation1 = true;
		}
	}

	/*2. 길이 검사
		2-1. 만약 길이가 8자~20자 사이가 아니라면 조건을 알리고, 입력칸을 비운다.
		2-2. 만약 길이가 맞다면, 다음 조건 체크로 넘어간다.
	*/
	if(validation1 == true){
		if(password.length < 8 || password.length > 20){
			alert("8자에서 20자 사이의 문자와 숫자만 사용가능합니다");
			password = "";
			validation2 = false;
		} else {
			validation2 = true;
			alert("유효한 비밀번호 입니다");
		}
	}
}

/*비밀번호 재검사*/
function checkPW(){

}