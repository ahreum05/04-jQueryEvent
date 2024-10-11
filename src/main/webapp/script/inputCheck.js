$(function(){
	$("#join").submit(function(){
		// 아이디 입력검사
		if(!$("input[name='user_id']").val()) {
			alert("아이디를 입력하세요.");
			$("input[name='user_id']").focus();
			return false;
		}
		// 비밀번호
		if(!$("input[name='user_pw']").val()) {
			alert("비밀번호를 입력하세요.");
			$("input[name='user_pw']").focus();
			return false;
		}		
		// 주민번호
		if(!$("input[name='jumin_no']").val()) {
			alert("주민번호를 입력하세요.");
			$("input[name='jumin_no']").focus();
			return false;
		}
		// 라디오버튼
		// => $("라디오버튼").is(":checked") => 체크일 경우 : true
		if(!$("input[name='gender']").is(":checked")){
			alert("성별을 선택해 주세요");
			$("input[name='gender']:eq(0)").focus();
			return false;
		}
		// 이메일
		if(!$("input[name='email']").val()) {
			alert("이메일 주소를 입력하세요.");
			$("input[name='email']").focus();
			return false;
		}
		// url
		if(!$("input[name='url']").val()) {
			alert("홈페이지 주소를 입력하세요.");
			$("input[name='url']").focus();
			return false;
		}
		// 핸드폰
		if(!$("input[name='hpno']").val()) {
			alert("핸드폰 번호를 입력하세요.");
			$("input[name='hpno']").focus();
			return false;
		}
		// 취미
		if(!$("input[name='hobby']").is(":checked")){
			alert("취미를 선택해 주세요");
			$("input[name='hobby']:eq(0)").focus();
			return false;
		}
		// 직업
		if($("select[name='job'] > option:selected").index() < 1) {
			alert("직업을 선택해 주세요");
			$("select[name='job']").focus();
			return false;
		}
		/* 입력 내용을 body 쪽으로 출력 */
		var user_id = $("input[name='user_id']").val();
		var user_pw = $("input[name='user_pw']").val();
		var jumin_no = $("input[name='jumin_no']").val();
		var gender = $("input[name='gender']:checked").val();
		var email = $("input[name='email']").val();
		var url = $("input[name='url']").val();
		var hpno = $("input[name='hpno']").val();
		var job = $("select[name='job'] > option:selected").val();
		var hobby = $("input[name='hobby']:checked").val();
		// checkbox는 for문 사용해서 문자열들을 수집해야함
		var hobby = $("input[name='hobby']:checked");
		alert("hobby : " + typeof(hobby));
		
		var hobby_str = "";
		// each(function(){}) : 데이터가 있을 동안 함수가 호출되는 함수
		hobby.each(function(){
			// $(this) : 현재 선택되어진 태그
			hobby_str += $(this).val() + " ";
		});
		
		// 출력할 태그 문자열
		var result = "<ul>";
		result +="<li>아이디 : " + user_id + "</li>";
		result +="<li>비밀번호 : " + user_pw + "</li>";
		result +="<li>주민번호 : " + jumin_no + "</li>";
		result +="<li>성별 : " + gender + "</li>";
		result +="<li>이메일 : " + email + "</li>";
		result +="<li>홈페이지 : " + url + "</li>";
		result +="<li>핸드폰번호 : " + hpno + "</li>";
		result +="<li>취미 : " + hobby_str + "</li>";
		result +="<li>직업 : " + job + "</li>";
		result += "</ul>";
		
		// body 태그로 출력
		$("body").html(result);
		
		// submit으로 설정되어 있을 경우, 데이터가 전송되므로
		// 무효화를 시킨다.
		return false;
	});
});