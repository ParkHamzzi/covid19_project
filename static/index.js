date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = year + "/" + month + "/" + day;

// class="bar" 인 요소 모두 탐색
var bars = document.querySelectorAll('.bar')
// console.log(bars)
// console.log(bars[0].getAttribute('value'))

// 전체 수 구하기 : 확진환자 = 완치 + 치료중 + 사망, 따라서 확진환자를 전체로 보고 나머지는 비율로
var total = parseInt(bars[0].getAttribute('value'))
// console.log(total)

// width 지정하기
for (let index = 0; index < bars.length; index++){
    console.log(100*parseInt(bars[index].getAttribute('value'))/total);
    bars[index].style.width = '10px';
    // bars[3].style.width = String(0.002*parseInt(bars[index].getAttribute('value'))/total)+'%';
}


// 애니메이션 관리 함수 정의
function draw_bar(){
    // class="bar" 인 요소 모두 탐색
    var bars = document.querySelectorAll('.bar')
    // console.log(bars)
    // console.log(bars[0].getAttribute('value'))

    // 전체 수 구하기 : 확진환자 = 완치 + 치료중 + 사망, 따라서 확진환자를 전체로 보고 나머지는 비율로
    var total = parseInt(bars[0].getAttribute('value'))
    // console.log(total)

    // width 지정하기
    for (let index = 0; index < bars.length; index++){
        console.log("넓이 확인", 2*parseInt(bars[index].getAttribute('value'))/total);
        console.log("인덱스 확인", bars[index]);
        bars[index].style.width = String(1*parseInt(bars[index].getAttribute('value'))/total)+'%';
        if (index == 3) {
            bars[index].style.width = String(0.04*parseInt(bars[index].getAttribute('value'))/total)+'%';
            console.log("스타일 확인", bars[index].style.width = String(0.04*parseInt(bars[index].getAttribute('value'))/total)+'%')
        }
    }
};

// 딜레이 예약
setTimeout(draw_bar, 1000); // 1000ms 이후 생성