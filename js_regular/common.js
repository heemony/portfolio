/*------------------------(1) h1 애니메이션 프로그램 ------------------------*/
var subject = document.querySelector('h1'); //전역변수로 선언했을 때 -> (3)프로그램에서도 사용이 가능.

function ani(params){
    //var subject = document.querySelector('h1'); //지역변수로 선언했을 때 (1)에서만 사용 가능. (3)에서는 이걸 사용할 수 없음.
    subject.addEventListener('click', work); //감지장치 

    function work(){
        if(subject.className === ''){
            subject.className = 'on';
        }else {
            subject.className = '';
        }
    }
}
// ani();





/*------------------------(2) 드롭다운 프로그램 ------------------------*/
function dropDown(){
    var btn = document.querySelector('.dropdown > a');
    var target = document.querySelector('.dropdown > ul');

    btn.addEventListener('click', showDropdown); 
    // addEventListener -> 감지장치 ('원하는 동작', '동작의 이름')

    function showDropdown(){
        if(target.className==='on'){
            target.className = '';
        }else{
            target.className ='on';
        }
    }
}
//dropDown();






/*------------------------(3) 나이구별 프로그램 ------------------------*/
function ageDetect(params){
    var subject = document.querySelector('h1'); //이렇게 선언해줘야함.
    var a = {
        name : 'heemyun', 
        age: null, 
        구분: 'null'
    };
    a.age = prompt();
    if (a.age > 28){
        a.구분 = 'YOUNG!!';
    }else {
        a.구분 = 'very YOUNG!!';
    }
    subject.children[0].textContent = '당신은 ' + a.구분+ '합니당당'
}
//ageDetect();







/*------------------------(4) 글자 다루는 도구 연습 ------------------------*/
function textToolEx(){
    var jj = 'sdgsfggrt_schooltrrfwere';
    var num = jj.indexOf('_') + 1;
    
    var first = jj.substring(0, 2);
    var last = jj.substr(num, 6);
    console.log(last);
}
//textToolEx();





/*------------------------(5) 그래프 길이 자동 추가 프로그램 0617------------------------*/
function setWidth(){
    var blueBar = document.querySelector('.blue');
    var yellowBar = document.querySelector('.yellow');
    var greenBar = document.querySelector('.green');
    var redBar = document.querySelector('.red');
        //메모리에 넣어주고 나서 실행 뒤에는 메모리에서 없어진다라는걸 알아두세여~!
    //var blueVal = blueBar.children[1].textContent;
    blueBar.희면 = '코딩';

    blueBar.style.width = blueBar.children[1].textContent;
    yellowBar.style.width = yellowBar.children[1].textContent;
    greenBar.style.width = greenBar.children[1].textContent;
    redBar.style.width = redBar.children[1].textContent;
    //블루바.스타일.위드값 = 블루바.자식요소의 2번째 자식에 있는 컨텐츠(%값) 을 불러와서 저장.
    //css로 width값 주지 않고 html에 적힌 값을 js로 불러와서 조절하기
}
setWidth(); 



/*------------------------(6) 일반객체 연습------------------------*/
    /* [선언 폼 2가지.] 
    선언 폼1) var 특기 = new Object(); 
    선언 폼2) 이것도 같은 말. 
    var 특기 = {
        가르치기 : '거의매일',
        배우기 : '코드',
        취미 :  ['독서', ['코딩', '디자인'], '운동', '만들기'],
        독서 : {소설 : '쓰기', 에세이 : '읽기'}
    }
    var 대답 = prompt('당신의 특기를 적으시오.');
    //console.log(특기.대답); //에러. ".표기법"에서는 변수를 넣을 수 없다.
    console.log('여기=> ' + 특기[대답]);*/



    /* [콘솔로 확인하기.]
    console.log(특기.가르치기);
    console.log(특기.배우기);
    console.log(특기.가르치기 +' '+ 특기.배우기); */

    /* [항목 추가하기 2가지와 키워드로 항목 제거하기.]
    //항목 추가하기 1) .으로 찍어서
    특기.운동하기 = '가끔';
    console.log(특기);

    //항목 제거하기. 키워드 delete
    delete 특기.배우기; 
    console.log(특기);
    

    //항목 추가하기 2) 중괄호 쳐서
    특기.독서['특기안에독서안에추가되는거'] = 'ㅇㅇ';
    특기['특기안에잠자기추가'] = '코~';

    console.log(특기);
    console.log(특기['가르치기']);
    console.log(특기.독서.소설);
    */


    /* 그냥내가해본거..
    //항목 추가하기 - 확인하기
    특기.독서.문학 = '음미하기';
    console.log(특기.독서);
    */

/*------------------------(7) 배열객체 연습------------------------*/

var 취미 = ['독서', ['코딩', '디자인'], {골프 : '재밌다'}, '만들기', '먹기' ,'싸기' ,'운동하기'];
//console.log(취미[1][1]);
//console.log(취미);
//console.log(취미[1]);

/*
var num = prompt('0~3까지 골라요'); 
console.log(취미[num]);
*/

//var num2 = 취미.length - 1;
//console.log(취미[num2]);


    /* 항목 추가하기 
    취미[4] = '영화보기';
        //손으로 하나하나 치면 너무 귀찮으니까 키워드를 사용해보자 'push' 
    취미.push('카페가기');
    console.log(취미.length);*/
  
/*------------------------(8) [원시형]과 [래퍼런스형식]의 실험 0618------------------------*/

/* [원시형] 데이터값을 메모리에 직접 넣는 원시형의 경우, 원본은 변하지 않는다.
var 이름1 = '송희면';
var 이름2 = '송혜교';
이름2 = 이름1; //이름2를 바꿔줘도
console.log(이름2); 
console.log(이름1); //이름1이 변하지는 않는다. => 원시타입
//기존의 이름2의 송혜교가 지워지고 송희면이 들어감.  */


/* 객체의 특징 - [레퍼런스형] 메모리에 객체를 참조하는 주소가 담긴 경우, 어느 하나를 수정하면 다 같이 수정됨.
var 희면특기 = {행동1 : '먹기',행동2 : '자기',행동3 :  '놀기',행동4 :  '공부하기'};
var 혜교특기 = 희면특기; //희면특기와 혜교특기는 같은 객체를 참조하고 있다. 
혜교특기.행동3 = '여러번'; //해당 객체의 주소에게 가서 데이터를 변경하므로
console.log(혜교특기);
console.log(희면특기); //혜교특기를 변경하면 희면특기도 당연히 변함.
console.log(희면특기 === 혜교특기); //참조하는 주소가 같으니꼐~
//혜교특기를 바꿔줬으면 희면특기도 바뀐다. 
//희면특기는 객체를 가르키는 주소를 가지고 있다.
//혜교특기도 객체를 가르키는 주소를 가지고 있다.*/ 



/*------------------------(9)객체와 배열 ------------------------*/

//배열 
var 멤버 = ['정송이', '정강이', '김달식','송강호',['유호성', '서강서', '김이례'] ,'김이해', '원미현', '강동원'];

/*
멤버.splice(멤버.length - 1, 1);
멤버.splice(-1, 1);
멤버.pop(); 
console.log(멤버); // 셋 다 모두 강동원 삭제.

console.log(멤버.indexOf('김달식'));*/


    /*----(9-1)객체와 배열에서 값 넣고 해당하는 값 없애기----
    var 멤버2 = 멤버.slice(); //원본 복사뜸.

    var 지우기 = prompt('지우고 싶은 사람 이름을 쓰셔요.'); console.log(지우기);
    var 어딨니 = 멤버.indexOf(지우기); console.log(어딨니);
    멤버.splice(어딨니, 1); console.log(멤버); */

/*
//객체 
var 멤버3 = {
    0: '정송이',
    1 : '정강이',
    2 : '김달식',
    3 : '송강호',
    4 : ['유호성','서강서','김이래'],
    5 : '김이해',
    6 : '원미현',
    7 : '강동원',
    length: 8 //유사배열은 반드시 length값을 가져야하므로 원시적인 방법이니 유사배열은 가급적 자제하는 것이 좋다.
}

//찐배열인지 아닌지 확인하기.
console.log(Array.isArray(멤버));
console.log(Array.isArray(멤버3));


//문자와 함께 쓸 때에...
console.log('여기 => ' + 멤버);  // 배열은 잘 불러온다.
console.log('여기 => ' + 멤버3); //에러
console.log('여기 => ' , 멤버3); //console.log('여기 => ' , obj); 가 맞는 문법.

//여러개 가져오기
var divElems = document.querySelectorAll('.graph > div'); //tip) querySelectorAll 할 때는 변수이름으로 s를 붙이면 구분하기 편하겠지!
console.log(divElems);
console.log(divElems.length);

console.log('여기 => '+ divElems);
console.log(divElems.length);

//한개 가져오기
var divElem = document.querySelector('.graph > div'); 
console.log(divElem);
console.log('여기 =>' + divElem);


//querySelector로 가져온 애는 배열일까 아닐까?
console.log(Array.isArray(divElems)); //결과 => false. 가짜배열에 담아서 준다.

*/


/*------------------------(10) 함수 기초------------------------*/
/*
//함수 폼1) 선언형 함수 선언과 호출
console.log(heehee()); //선언형함수는 호이스팅 가능. 실행 ㅇㅇ. 즉 미리 준비가 되어진다.


var kkk = ['absc'];
console.log(kkk[ heehee() ]);

function heehee(){
    console.log('난 선언형이야')
    return 0;
}


//함수 폼2) 리터럴형 함수 선언과 호출
//heehee1(); 리터럴형함수는 호이스팅 불가능. 그래서 실행 ㄴㄴ.
//TypeError: heehee1 is not a function => 즉 폼1과같은 함수가 아니라는 뜻. (폼1은 호이스팅으로 인해 가능)
var heehee1 = function(){
    console.log('난 리터럴형이야')
};
heehee1();



if (hoho() > 0){
    console.log('ok!');
}
function hoho(){
    return 8;
}




var age = 9;
function heihei(age){ //age 는 매개변수 = parameter
    var k = 10;

    return age
}
console.log(heihei(age));




var value = heihei(89);
function heihei(age2){ //age 는 매개변수 = parameter
    var k = 10;
   // console.log(age + k);
    return age2+k;
}
console.log(heihei(value)); //리턴값 받아오기.




var value2 = add(1,2,3);
console.log('여기 => ' + value2);

function add(a,b,c){
    return a+b+c;
}



//kk의 결과값은? => 7.
var value3 = hing(3);
var kk = 7;

function hing(age){
    kk = kk + age;
}

*/


//값을 받아서 리턴값으로 돌려주기.

/*
방법1)
var 값 = prompt('원하는 숫자를 입력하세요. 두배로 만들어 드릴게요!');
console.log(double(값));
function double(a){
    return a*2;
}

방법2)
var 값 = prompt('원하는 숫자를 입력하세요. 두배로 만들어 드릴게요!');
double();
function double(){
    console.log(값*2);
}
*/


/*값 받아다가 함수객체에 저장하고 출력하기. 
var name = prompt('당신의 이름은?');
var age = prompt('당신의 나이는?');
var gender = prompt('당신의 성별은?');


profile(name, age, gender);

function profile(a, b, c){
    var heemony = {
        name : a,
        age : b,
        gender : c
    }
    console.log(heemony);
}*/




//값 받아다가 함수객체에 저장하고 출력하기.





/*------------------------(11) 0622 ------------------------*/


// var btn = document.querySelector('.y_and_o > a');
// btn.addEventListener('click', 나셋팅);


// function yAndO(age){
//     if(age > 40){
//         console.log(age + '살 이네요. 40보다 많아요.');
//     }else{
//         console.log(age + '살 이네요. 40보다 적어요.');
//     }
// }

// function 나셋팅(){
//     var 나 = {
//         이름 : prompt('당신의 이름은?'),
//         나이 : prompt('당신의 나이는?'),
//         성별 : prompt('당신의 성별은?'),
//     }
//     yAndO(나.나이); //나객체의 나이만 쓸 경우에는 이렇게 해도 됨. 
// } 





// var btn = document.querySelector('.y_and_o > a');
// btn.addEventListener('click', 나셋팅);

// function yAndO(me){
//     if(me.나이 > 40){
//         console.log(me.이름 + '님은 익어가는 중입니다..');
//     }else{
//         console.log(me.이름 + '님은 아직 젊어욤');
//     }
// }

// function 나셋팅(){
//     var 나 = {
//         이름 : prompt('당신의 이름은?'),
//         나이 : prompt('당신의 나이는?'),
//         성별 : prompt('당신의 성별은?'),
//     }
//     yAndO(나); //객체로 넘겨줘야 위 yAndO에서 나객체에 있는 속성값들을 사용할 수 있다.
// }

/*------------------------(12) ------------------------*/
// var btn = document.querySelector('.y_and_o > a');
// btn.addEventListener('click', isYoung);



// function isYoung(){
//     var pBox = document.querySelector('.y_and_o > p#text');
//     var 나 = {
//         이름 : prompt('당신의 이름은?'),
//         나이 : prompt('당신의 나이는?'),
//         성별 : prompt('당신의 성별은?'),
//     } //객체 만들기

//     function agePrint(me){
//         if(me.나이 > 50){
//             pBox.textContent = me.이름 + '님은 익어가는 중입니다..';
//         }else{
//             pBox.textContent = me.이름 + '님은 아직 젊어욤';
//         }
//     } //선언형 함수

//     agePrint(나); 
//     //객체로 넘겨줘야 위 yAndO에서 나객체에 있는 속성값들을 사용할 수 있다.
// }
// agePrint 함수에서 파라미터로 '나'라는 이름으로 쓴다면, isYoung함수에서의 값도 바뀌게 되므로
// 적절하지가 못하다. 파라미터로 쓸 때에는 다른 이름으로 받는 것이 좋음.

/*------------------------(13) ------------------------*/

// var btn = document.querySelector('.y_and_o > a');
// btn.addEventListener('click', isYoung);



// function isYoung(){
//     var root = document.querySelector('.y_and_o');
//     var pBox = document.createElement("p"); //직접적으로 html에 만들지 않고, DOM을 이용하여 js로 html태그를 만들어보자.
//     pBox.class = "";

//     var 나 = {
//         이름 : prompt('당신의 이름은?'),
//         나이 : prompt('당신의 나이는?'),
//         성별 : prompt('당신의 성별은?'),
//     } //객체 만들기

//     function agePrint(me){
//         if(me.나이 > 50){
//             pBox.textContent = me.이름 + '님은 익어가는 중입니다..';
//             pBox.className = 'old';
//         }else{
//             pBox.textContent = me.이름 + '님은 아직 젊어욤';
//             pBox.className = 'young';
//         }
//         root.appendChild(pBox);
//     } //선언형 함수
//     agePrint(나); 
//     //객체로 넘겨줘야 위 yAndO에서 나객체에 있는 속성값들을 사용할 수 있다.
// }


/*------------------------(14) innerHTML ------------------------*/
// var btn = document.querySelector('.y_and_o > a');
// btn.addEventListener('click', isYoung);


// function isYoung(){
//     var root = document.querySelector('.y_and_o');
//     var hideP = document.querySelector('.y_and_o > p');
//     var pBox = document.createElement("p"); //직접적으로 html에 만들지 않고, DOM을 이용하여 js로 html태그를 만들어보자.


//     // 1) 만약 처음 눌렀다면, hideP === null
//     if (hideP === null){
//         start();
//     } else {
//     // 2) 두번째 눌렀다면 else
//         hideP.remove();
//         start();
//     }
    
//     //만드는 일) 
//     function start() {
//         var 나 = {
//                 이름 : prompt('당신의 이름은?'),
//                 나이 : prompt('당신의 나이는?'),
//                 성별 : prompt('당신의 성별은?'),
//             } //객체 만들기

//             function agePrint(me){
//                 if(me.나이 > 50){
//                     pBox.innerHTML = me.이름 + '님은 <span>익어가는</span> 중입니다.. ';
//                     pBox.className = 'old';
//                 }else{
//                     pBox.innerHTML = me.이름 + '님은 아직 <span>젊어</span>욤 ';
//                     pBox.className = 'young';
//                 }
//                 root.appendChild(pBox);
//             } //선언형 함수
//             agePrint(나); 
//         //객체로 넘겨줘야 위 yAndO에서 나객체에 있는 속성값들을 사용할 수 있다.
//     }
// }


// var btn = document.querySelector('.y_and_o > a');
// btn.addEventListener('click', isYoung);



/*------------------------(15) 14를 더 깔끔쓰하게 ------------------------*/
// function isYoung(){
//     var root = document.querySelector('.y_and_o');
//     var hideP = document.querySelector('.y_and_o > p');
//     var pBox = document.createElement("p"); //직접적으로 html에 만들지 않고, DOM을 이용하여 js로 html태그를 만들어보자.


//     // 
//     if (hideP != null){
//         hideP.remove();
//     }
    

//     //만드는 일) 
//     var 나 = {
//             이름 : prompt('당신의 이름은?'),
//             나이 : prompt('당신의 나이는?'),
//             성별 : prompt('당신의 성별은?'),
//         } //객체 만들기

//         function agePrint(me){
//             if(me.나이 > 50){
//                 pBox.innerHTML = me.이름 + '님은 <span>익어가는</span> 중입니다.. ';
//                 pBox.className = 'old';
//             }else{
//                 pBox.innerHTML = me.이름 + '님은 아직 <span>젊어</span>욤 ';
//                 pBox.className = 'young';
//             }
//             root.appendChild(pBox);
//         } //선언형 함수
//         agePrint(나); 
//     //객체로 넘겨줘야 위 yAndO에서 나객체에 있는 속성값들을 사용할 수 있다.
    
// }


/*------------------------(16)------------------------*/

//var inputNum = prompt('원하는 값을 넣어주세요.');
//for(var num = 1; num < 10; num++){
//    console.log(`${inputNum} * ${num} = ${inputNum*num}`)
//}


//구구단()
//function 구구단(){
//    var num = prompt('원하는 구구단의 숫자를 넣어주세요.')
//    var 완성 = '';
//    for(var i = 1; i < 10; ++i){
//        완성 += `${num} * ${i} = ${num*i}\n`
//    }
//    alert(완성)
//}

/*------------------------(17 AND 연산자)------------------------*/
// var a = [0]; //좌변이 true이면
// var b = 1; //우변값을 넘겨준다.
// console.log(a&&b); 
// //좌 false -> 좌변 반환
// //좌 true -> 우변 반환

/*------------------------(18 OR 연산자)------------------------*/
// var c = false; //좌변이 false면 우변값을 넘겨주고,
// var d = 1; //좌변이 true이면 좌변값을 넘겨준다.
// console.log(c||d);
// //좌변 flase -> 우변 반환
// //좌변 true -> 좌변 반환


// var e = 0;
// var f = 1;
// console.log(!e); //true

/*------------------------(19)------------------------*/
// var 양치여부 = false;
// var 아침여부 = true;
// var 세수여부 = false
// var 회사가도되나 = 아침여부 && (양치여부 || 세수여부);
// console.log(회사가도되나);
/*------------------------(20)------------------------*/
// 구구단()
// function 구구단(){
//     // var num = prompt('몇단을 원하세요?');
//     var ulElem = document.querySelector('.gugu > ul');
//     for(var i = 1; i < 10; ++i){
//         var item = document.createElement('li');
//         item.textContent = `${num} * ${i} = ${num*i}\n`
//         ulElem.appendChild(item)
//     }
// }
/*------------------------(21)------------------------*/
구구단()
function 구구단(){
    // var num = prompt('몇단을 원하세요?');
    var ulElem = document.querySelector('.gugu > ul');
    var btn = document.querySelector('.gugu > button');
    var inputElem = document.querySelector('.gugu > input');
    btn.addEventListener('click', work);


    function work(){    
        //만약에 자식이 없다면 처음이니까 지우지말고 li를 넣어라.
        //만약 자식이 있다면 두번째니까 지우고 li를 넣어라.
        if(ulElem.children.length === 0){
            guguRotate();
        }else{
            ulElem.innerHTML = '';
            guguRotate();
        }

        function guguRotate(){
            var num = inputElem.value;
            for(var i = 1; i < 10; ++i){
                var item = document.createElement('li');
                item.textContent = `${num} * ${i} = ${num*i}\n`
                ulElem.appendChild(item)
            }
        }
    }
    
}

/*------------------------(22)------------------------*/

//var a = '';

// if(a === ''){
//     console.log('빈문자에요.');
// } else {
//     if (typeof a === 'number') {
//         console.log('숫자여라~~~');
//     } else {
//          if( a === null ){
//              console.log('입력안했자너');
//          } else{
//                console.log('뭔가 아니네요..');
//          }
//     }
// }

//if( a === ''){
//   console.log('빈문자임다.');
//} else if (typeof a === 'number'){
//    console.log('숫자여라~~');
//} else if ( a === null ){
//    console.log('입력안했자너');
//} else {console.log('뭔가 아니네요..');}


/*------------------------(23) 음식고르기 시리즈~------------------------*/
//음식고르기 1번
// var 메뉴 = prompt('김치찌개/ 라면/ 치킨/ 피자 중 하나를 적으세요.');

// function 음식고르기(){
//     var pick = 메뉴;
//     console.log(pick+'(을)를 고르셨습니다.');
// }
// 음식고르기(메뉴);


//음식고르기 2번
// var 메뉴1 = prompt('김치찌개/ 라면/ 치킨/ 피자 중 하나를 적으세요.');

// function 음식고르기(전달자){
//     if(메뉴1 === '김치찌개'){
//         console.log('김찌 골랐어요.')
//     }else if(메뉴1 === '라면'){
//         console.log('라면 골~')
//     }else if(메뉴1 === '치킨'){
//         console.log('치킨 골~')
//     }else if(메뉴1 === '피자'){
//         console.log('피자 골~')
//     }else console.log('제대로 골라 짜싁아~~');
// }
// 음식고르기(메뉴1);


//음식고르기 3번 
// var 고르기 = prompt('김찌, 라면, 치킨, 피자 중 하나를 골라주세요.');
// var 메뉴2 = ['김치찌개', '라면', '치킨', '피자'];
// var result = "";
// try {
//     메뉴2.forEach(function(elm){ 
//         console.log(elm);

//         if (elm == 고르기){
//             result = 고르기 + '(을)를 고르셨군요.';
//             throw new ex(); // break

//         }else{
//             result = "잘 골라주세요.";
//         }
//     })
// } catch(e){
// }
// console.log(result);


//음식고르기 4번
// var 메뉴1 = prompt('김치찌개/ 라면/ 치킨/ 피자 중 하나를 적으세요.');

// function 음식고르기(전달자){
//     if(메뉴1 === '김치찌개'||메뉴1 === '라면'||메뉴1 === '치킨'||메뉴1 === '피자'){
//         console.log(메뉴1+' 골랐어요.');
//     }else{
//         console.log('다시골라잉');
//     }
// }

//음식고르기 5번 객체
// var 메뉴3 = {
//     0 : '김치찌개',
//     1 : '라면',
//     2 : '치킨',
//     3 : '피자',
//     length: 4,
// }
// var 골라 = prompt('0.김치찌개/ 1.라면/ 2.치킨/ 3.피자 중 하나를 적으세요.');
//
// function 음식고르기(){
//     if(Object.keys(메뉴3)[골라] === 골라){
//         console.log( 메뉴3[골라] + '을(를) 골랐어요.');
//     }else{
//     console.log('다시고르세요');
//     }
// }
//음식고르기();


//음식고르기 6번 배열
// var 메뉴4 = ['김치찌개', '라면', '치킨', '피자'];
// var num = prompt('1.김치찌개/ 2.라면/ 3.치킨/ 4.피자 중 하나를 적으세요.');
// function 음식고르기(){
//     console.log(메뉴4[num-1] + '을 골랐어여');
// }
//음식고르기();


//음식고르기 7번 match함수
//match가 뭔가요?
// var 메뉴질문 = '김치찌개 / 라면 / 치킨 / 피자 중에 하나를 골라주세요. ';
// var 메뉴 = prompt(메뉴질문);

// var 결과 = 메뉴질문.match(메뉴);
// 음식고르기();
// function 음식고르기(){
//     if(결과 === null){
//         console.log('취소하셨습니다.');
//     }else{
//         console.log(결과[0] + '을(를) 고르셨어요')
//     }    
// }



//음식고르기 8번 범위 
//var 메뉴 = ['김치찌개', '라면', '치킨', '피자'];
//var num = prompt('김치찌개 / 라면 / 치킨 / 피자 중에 하나를 골라주세요.');

//function 음식고르기(){
//    if(num > 0 && num <5){
//        console.log( 메뉴[num-1] + '을(를) 고르셨어요.');
//    }else if(num === null){
//        console.log('취소되었습니다.');
//    }else if(num === ''){
//        console.log('입력되지 않았습니다.')
//    }
//    else{
//        console.log('메뉴를 눌러라');
//   }
//}
//음식고르기();


//음식고르기 9번 html
// var 메뉴 = ['김치찌개', '라면', '치킨', '피자'];
// var num = prompt('김치찌개 / 라면 / 치킨 / 피자 중에 하나를 골라주세요.');


// function 음식고르기(){
//     var message = '';
//     if(num > 0 && num <5){
//         message = 메뉴[num-1] + '을(를) 고르셨어요.';
//     }else if(num === null){
//         message = '취소되었습니다.';
//     }else if(num === ''){
//         message = '입력되지 않았습니다.'
//     }
//     else{
//         message = '메뉴를 눌러라';
//    }
//    var pElem = document.createElement('p');
//    pElem.textContent = message;
//    document.querySelector('.menu').appendChild(pElem);
// }
// 음식고르기();


//콘솔에서 취소를 눌렀을 땐 뭐가 나올까요?
//var menubtn = prompt('눌러봐라');
//console.log(menubtn);



/*------------------------(24) 음식고르기 시리즈 0624 (142p)------------------------*/

//var askAnswer = prompt('0.김치찌개 / 1.라면 / 2.치킨 / 3.피자 중에 하나를 골라주세요');
//var menu = {
//    김치찌개 : '7,000원',
//    라면 : '3,000원',
//    치킨 : '18,000원',
//    피자 : '22,000원',
//    length : 4,
//}

// 쑤)주문하기 2번
// 버튼에 감지장치 붙이기
// 입력하고 클릭이 되면 인풋상자에 넣은 데이터 가져오기
// 가져온 걸 변수에 담기
// 판단해서 어떤 메뉴의 가격을 보여줄지 결정하기
// .message에 뿌려주기.
function menuOrder(){
    var menu = {
        김치찌개 : '7,000원',
        라면 : '3,000원',
        치킨 : '18,000원',
        피자 : '22,000원',
        length : 4,
    }
    //메뉴 고르기.
    var oderBtn = document.querySelector('.menu_order > button');
    var inputElem = document.querySelector('.menu_order > input');
    var messageElem = document.querySelector('.menu_order > p.message');
    oderBtn.addEventListener('click', work);

    function work(){
        var choiseMenu = inputElem.value;
        var alarmTxt;
        if(choiseMenu in menu){
            alarmTxt = choiseMenu + '은(는) ' + menu[choiseMenu] + ' 입니다.';
        } else if (choiseMenu === ''){
            alarmTxt = '뭐라도 고르라구~~!!';
        } else {
            alarmTxt = '메뉴 중에 골라~~~!!';
        }
        messageElem.textContent = alarmTxt;
    };

    
    // 메뉴 추가하기.
    var addinputElem = document.querySelector('.manage > input');
    var addBtn = document.querySelector('.manage > button');
    var messageAddElem = document.querySelector('.menuBoard > .menu_alarm'); //가격추가하기
    var menuName = document.querySelector('.menu_list > .addMenuName');
    addBtn.addEventListener('click', addMenu);
    
    
    function addMenu(){
        var priceAddBtn = document.querySelector('.menu_alarm > button');
        
        if(priceAddBtn.className="no"){
            priceAddBtn.className="on";
            console.log(priceAddBtn);
       
            var 넣을메뉴 = addinputElem.value;
            console.log(넣을메뉴);
            //messageAddElem.textContent = 넣을메뉴 + '(이)가 추가되었습니다.';    
            var pTxt =  넣을메뉴 + '(이)가 추가되었습니다.';        
            var a = document.createTextNode(pTxt)
            messageAddElem.appendChild(a);

            
            //메뉴객체에 접근해서 메뉴 이름들을 가져온다.


            if(menu.value !== 넣을메뉴){
                var 가격 = prompt('가격이 얼마여유?');
                menu[넣을메뉴] = 가격;
                console.log(menu.넣을메뉴);
            }
            
            //priceAddBtn.addEventListener('click', addPrice); //메뉴버튼이 나타나면서 누르고싶은데...ㅠㅠ안나타나
            menuName.textContent = ' /' + 넣을메뉴;
           
           // function addPrice(){
            //    var priceInputBtn = prompt('가격을 적어주세요');
                //가격 받아서 menu객체에 넣기.
                
                //콘솔로 확인하기.
           // }
        }     
      
    }

}
//menuOrder();









// 주문하기 html 실습_1번
function 주문하기1(){
    var clickBtn = document.querySelector('.menu_order > button');
    var pBoard = document.querySelector('.menu_order > p.message');
    //여기에서 inTxtBox = document.querySelect('.menu > input'); 하고
    clickBtn.addEventListener('click', menuSelect)

    function menuSelect(){
        var inTxtBox = document.querySelector('.menu_order > input').value;
        //위에 코드 대신에 var 고른메뉴 = inTxtBox.value; 로 해도 됨. 고른메뉴를 inTxtBox 대신 조건문에 다 넣으면 된다.
        if( inTxtBox in menu){
            pBoard.textContent = inTxtBox + '을 고르셨습니다. 가격은 ' + menu[inTxtBox] + '입니다.'
        } else if (inTxtBox === '') {
            pBoard.textContent  = '뭐라도 적으세요';
        } else if (inTxtBox === null) {
            pBoard.textContent  = '취소하셨습니다.';
        } else {
            pBoard.textContent  = '메뉴중에서만 고르세요.';
        }    
    }
}
//주문하기1();





//쑤)음식고르기 5번)
function 음식고르기5(){   
    //console.log('피자' in menu);
    var askAnswer = prompt('김치찌개 / 피자 / 라면 / 치킨중에 고르세요');
    if (askAnswer in menu) {
        console.log(askAnswer + '을 고르셨습니다. 가격은' + menu[askAnswer] + '입니다.')
    } else if (askAnswer === '') {
        console.log('뭐라도 적으세요')
    } else if (askAnswer === null) {
        console.log('취소하셨습니다.')
    } else {
        console.log('메뉴중에서만 고르세요.')
    }
}
// 음식고르기5();




// 쑤)음식고르기 4번)
    // 메뉴판 객체만든다.
    // 질문명령을 날린다.
    // 답을 변수에 담는다.
    // 메뉴판 객체에서 고른 메뉴가 있는지 확인한다.
    // 거기에 맞는 메시지를 보여준다.
    // if(askAnswer){
    // console.log(askAnswer + '은(는)' + menu[askAnswer] + '입니다.');
    // }else if(askAnswer ===''){
    //         console.log('뭐라도 적으세요')
    // }else if(askAnswer === null){
    //         console.log('취소하셨습니다.')
    // }




//var askAnswer = prompt('0.김치찌개 / 1.라면 / 2.치킨 / 3.피자 중에 하나를 골라주세요');
var menu = {
    김치찌개 : '7,000원',
    라면 : '3,000원',
    치킨 : '18,000원',
    피자 : '22,000원',
    length : 4,
}
// 음식고르기 3번)
// 아모르겟다.
function 음식고르기3(){
    if(askAnswer in menu){
        var price = menu[askAnswer];
        console.log(askAnswer + '은(는) ' + price + ' 입니다.');
    }else {
        console.log('메뉴를 다시 골라주세요.');
    }
    
    console.log(menu[3]);
}
//음식고르기3();





// 쑤)음식고르기 2번)
function 음식고르기2(){
    if(askAnswer){
       console.log (askAnswer +'은(는)' + menu[askAnswer] + '원 입니다.');
    }else{
       console.log ('제대로 골라주세여.');
    }

}
// 음식고르기2();





// 쑤)음식고르기 1번)
// var askAnswer = prompt('김치찌개 / 라면 / 치킨 / 피자 중에 하나를 골라주세요');
//     if(메뉴 === '김치찌개'){
//         console.log(메뉴 + '고르셨습니다. 가격은 얼마에여~')
//     }else if(메뉴 === '라면')(){
//         console.log(메뉴 + '고르셨습니다. 가격은 얼마2에여~')
//     }else if(메뉴 === '치킨')(){
//         console.log(메뉴 + '고르셨습니다. 가격은 얼마3에여~')
//     }else if(메뉴 === '피자')(){
//         console.log(메뉴 + '고르셨습니다. 가격은 얼마3에여~')
//     }else if(메뉴 ===''){
//         console.log('뭐라도 적으세요')
//     }else if(메뉴 === null){
//         console.log('취소하셨습니다.)
//     }
 

