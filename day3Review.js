// 프로그래밍 : 데이터와 로직으로 이루어져잇다.
// 데이터는 하나로 구성된것이 아니고 하나 이상의 데이터로 구성되어잇다.
// 객체지향 언어에는 1 클래스 기반(java) 2 프로토타입 기반(js)
// 객체는 넓은 의미로 이야기 하면 메모리를 차지 하면 객체라고 한다.
// 객체는 좁은 의미로 이야기하면 비슷한 성격을 가진 클래스 들의 집합을 객체라고한다.
// 클래스는 비슷한 성격을 가진 변수와 메소드 들의 집합이고
// 인스턴스는 클래스들을 복사 해서 다른 클래스에서 사용하는것이다.

// 객체 literal 은 key and value 로 이루어져잇다. (묶는 것이다.)
// 객체 literal 을 사용하는 이유와 ? 무엇을 묶고 ? 어떻게 사용하는지 알아야한다.
// 사용하는 이유는 서로 연관된 데이터를 분류해서 단위별로 묶어 놓고 싶어서 이다.
// 객체 안에는 속성(attribute=property) 가 존재하고 그 값들을 속성값이라고 부른다.




// 어제 문제 KNN(영화 문제)

// 우리가 가진 데이터를 먼저 확인한다.
const movieArr = [
    {kiss : 2 , action : 12, category : 'A'}, //암살
    {kiss : 14 , action : 2, category : 'M'}, //어바웃 타임
    {kiss : 2 , action : 7, category : 'A'}, //토이스토리
    {kiss : 10 , action : 2, category : 'M'}, // 노팅힐
    {kiss : 15 , action : 6, category : 'M'}, // 타이타닉
]

// 우리가 궁극적으로 어떤 카테고리에 영화인지 확인하고 싶은 영화
const readlineSync = require('readline-sync');
const actionCut = parseInt(readlineSync.question("Action Seen"))
const kissCut = parseInt(readlineSync.question("kiss Seen"))
const target = {kiss : kissCut , action : actionCut}

// sort 해준다
// target 영화와 우리가 가진 데이터 사이에 거리를 구한다.
// 함수에서 중괄호가 없으면 그 값이 무조건 반환된 값이라고 생각하면 된다.
// 힘수에서 중괄호가 잇는것은 그 안에 여러가지 코드를 넣고 싶을때 사용하는것이고 중괄호를 사용하면 return 이라는 키워드를 사용해야한다.
movieArr.sort((a,b) => {
    const disA = Math.sqrt(Math.pow(a.action -target.action,2) + Math.pow(a.kiss - target.kiss,2))
    const disB = Math.sqrt(Math.pow(b.action -target.action,2) + Math.pow(b.kiss - target.kiss,2))

    return disA - disB > 0 ? 1 : -1
})
console.log(movieArr)
console.log(movieArr[1])

const knum = 3

const result = {actionCount : 0 , kissCount : 0}

for (let i = 0; i < knum; i++) {
    const moive = movieArr[i]
    if(moive.category === 'A'){
        result.actionCount +=1
    }else {
        result.kissCount +=1
    }
}

console.log(result)

const str = result.actionCount > result.kiss ? "액션영화" : "멜로영화"

console.log(`이영화는 : ${str} 영화인거 같다`)











