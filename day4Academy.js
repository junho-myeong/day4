// 절차지향적 패러 다임에서 함수형 패러다임(재사용이 가능하게 하는)으로 진화했다
// 모든 함수에는 이름이 존재해야하고 입력값이 있어야 하고 반환값이 있어야한다.


// 원의 넓이 구하는 공식
// 함수의 기본 방식 function 함수이름(parameter : 매개변수) {

// }
// return은 무조건 반환을 하기 위해서 사용하는것은아니다. 즉 return은 실행의 제어권을 반납한다는 뜻이다.
//
// 함수는 변수랑 똑같다 , 즉 함수라는 이름이 존재하고 그 안에 코드가 존대한다. 즉 변수도 똑같이 변수 이름이 있고 그안에 값이 존재 한다는 뜻이기 때문이다.
// 그리고 함수나 객체나 성질이 똑같다. 함수는 즉 나중에 사용할것이다 이말이고
// 함수는 배열이랑은 다른것은
// 함수는 변수에도 담을수잇다.


function roundArea(radius) {
    return Math.PI*Math.pow(radius,2)
}

// 함수안에 함수도 호출 가능하다
function getTotal(r1 ,r2) {
    return Math.abs(roundArea(r1) - roundArea(r2))
}

// ()를 하는 순간 function 이라는 구조체를 별도의 메모리(stack이라고 부른다)!!!에서 실행하게 한다. 재사용 해서 사용하기 때문에 원본을 훼손 하지 않기위해서
// 지역변수는 함수가 실행되는 동안 잠시 만들어 지는 변수를 말한다.
// 함수는 로직을 위해서 코드(문,식)을 묶어 놓은 덩어리 그래서 변수로 할당하고 => 변수명이 함수의 이름이 되는것이다, 그리고 함수는 () 하면 실행하게 되고 => 여기서 메모리 공간을 사용한다. => 그리고 실행될때 필요한 변수가 생기고 그것을 사용하고 없앤다 => 그것을 지역 변수라고 부른다.
// 그래서 사실 변수나 함수나 같다(JS에서) 그래서 js에서는 firstclass object(1급 객체) 라고 부른다
// 그래서 js 에서는 변수에서 함수를 넣을수잇다.
const f1 = roundArea
console.log(f1)


console.log(f1(20))
console.log(roundArea(10))
console.log(getTotal(20,10))

// 문제 2 시침과 분침의 각도 차이



// 시침 구하는 함수( 입력 몇시? ,출력 각도)
// function hourAngle(hour) {
//     let Angle = hour*30
//     if(Angle => 360) {
//         Angle = Angle -360
//     }
//     return Angle
// }
// console.log(hourAngle(12))
// // 분침 구하는 함수
// function minAngle(min) {
//     let Angle = 6*min
//     return Angle
// }
// console.log(minAngle(38))
//
// //화살표함수로도 위에 것을 나타낼수잇다 여기서 min이 매개 변수가 되고 화살표 뒤에가 return 이 되는것이다.
// // const minAngle = min => (360/60) * min
//
// // 분침에 따라 시침을 이동하는 함수
// function totalHourAngle(hour,min){
//     return hourAngle(hour) + min*(1/2)
// }
// console.log(totalHourAngle(12 , 38))
// // 12:38분 기준으로
// function totalAngle(hour , min) {
//     return Math.abs(totalHourAngle(hour,min) - minAngle(min))
// }
//
// console.log(totalAngle(12, 38))

function calcTotal (hour , min) {
    function hourAngle(hour) {
        let Angle = hour*30
        if(Angle => 360) {
            Angle = Angle -360
        }
        return Angle
    }
    console.log(hourAngle(12))
// 분침 구하는 함수
    function minAngle(min) {
        let Angle = 6*min
        return Angle
    }
    console.log(minAngle(38))

//화살표함수로도 위에 것을 나타낼수잇다 여기서 min이 매개 변수가 되고 화살표 뒤에가 return 이 되는것이다.
// const minAngle = min => (360/60) * min

// 분침에 따라 시침을 이동하는 함수
    function totalHourAngle(hour,min){
        return hourAngle(hour) + min*(1/2)
    }
    console.log(totalHourAngle(12 , 38))
// 12:38분 기준으로
    function totalAngle(hour , min) {
        return Math.abs(totalHourAngle(hour,min) - minAngle(min))
    }
    return totalAngle(hour,min)
}
console.log(calcTotal(12,38))

// 이따 공부할거 js 함수



