// 일반형
// - 매개변수 -> {함수코드}
func_arrow1 = (str) => {
    return "출력1 : " + str
};

// 매개변수가 나하일때는 () 생략 가능
// 매개변수 => {함수 코드}
func_arrow2 = str => {
    return "출력2 : " + str
};

// 함수코드가 return문 하나일 경우 괄호 및 return 생략
// 매개변수 => 반환값
func_arrow3 = str => "출력3 : " + str
console.log(func_arrow1(fal));
console.log(func_arrow2(fal));
console.log(func_arrow3(fal));

// arrow function 과 function의 차이점