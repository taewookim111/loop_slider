const ul = document.querySelector("ul");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const lis = ul.querySelectorAll("li");
let len = lis.length;
let enableClick = true;
init();
/*함수 패키징의 의미
1. 일목요연한 코드의 흐름을 구성하여, 한눈에 코드를 이해할 수 있다
2. 함수로 패키징을 하면 패키징된 코드는 하나의 단위로 동작하면서,
코드가 단계별로 수행할 수 있습니다*/
next.addEventListener("click", (e) => {
    e.preventDefault();
    //조건문 
    if (enableClick) {
        nextSlide();
        enableClick = false;
    }


})

prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (enableClick) {
        prevSlide();
        enableClick = false;
    }


})

function prevSlide() {

    const duration = 1000;
    //슬라이드가 이동할 시간을 1초로 고정하는 것
    const initialValue = parseInt(ul.style.left) || -100;
    /*initialValue이 하는 역할은 애니메이션이 시작할때
    기준을 잡아주는 변수입니다
    이 값은 정수값이어야 하므로parseInt를 사용해서 변수로 반환하는데
    어떤 이유에서든지 해당 코드를 읽지 못하거나, 오류가날수있으므로
    || 을 이용해서 디폴트값 -100을 사용합니다
    따라서 initialValue에는 parseInt(ul.style.left)이 값이 
    온전하면 이값이 담기고,parseInt(ul.style.left)여기에 오류가나면
    ||로 넘어가서 -100이 담기는 코드입니다
    */
    // console.log(initialValue); //-100
    const targetValue = 0;
    const unit = "%";

    const startTime = performance.now();
    // console.log(startTime);
    /*
    초기 페이지 로딩부터 클릭해서 nextSlide이 함수가 실행 되는 시간
    까지를 의미합니다
    performance.now()이 메소드는 높은 정밀로도 
    현재시간(브라우저가 로딩된 시점으로부터의 지금까지 시간)
    을 나타내어 밀리세컨드 단위로 반환하는 것입니다
    보통 정밀한 시간이 요청되는 애니메이션에서 사용됩니다
    */

    function animate(time) {
        //실제 요소를 움직이는 기능을하는 함수가 animate입니다
        // console.log(time);
        const timeReal = time - startTime;
        /*
        requestAnimationFrame 메소드가 호출되면서 브라우저가
        requestAnimationFrame을 렌더링(화면구현)하기전에
        시간정보를 담은 time이라는 변수를 생성합니다(자동으로)
        즉 time이라는 매개변수는 랜더링이 시작되는 시간정보를 담은 변수인것
        timeReal 실제 함수실행의 스타트가 될수 있는 시점
        */
        const progress = timeReal / duration;

        //timeReal은 진짜 함수가 진행되는 시간,
        //progress는 따라서 0~ 1사이의 값이 되게 됩니다

        const currentValue = initialValue + (targetValue - initialValue) * progress;
        ul.style.left = `${currentValue}${unit}`;


        if (progress < 1) {
            requestAnimationFrame(animate);
        } else if (progress >= 1) {
            ul.style.left = "-100%";
            ul.prepend(ul.lastElementChild);
            enableClick = true;
        }


    }
    requestAnimationFrame(animate);
    // new Anim(ul, {
    //     prop: "left",
    //     value: "0%",
    //     duration: 1000,
    //     callback: () => {
    //         ul.style.left = "-100%";
    //         ul.prepend(ul.lastElementChild);
    //         enableClick = true;
    //     }
    // })
}

function nextSlide() {

    const duration = 1000;
    //슬라이드가 이동할 시간을 1초로 고정하는 것
    const initialValue = parseInt(ul.style.left) || -100;
    /*initialValue이 하는 역할은 애니메이션이 시작할때
    기준을 잡아주는 변수입니다
    이 값은 정수값이어야 하므로parseInt를 사용해서 변수로 반환하는데
    어떤 이유에서든지 해당 코드를 읽지 못하거나, 오류가날수있으므로
    || 을 이용해서 디폴트값 -100을 사용합니다
    따라서 initialValue에는 parseInt(ul.style.left)이 값이 
    온전하면 이값이 담기고,parseInt(ul.style.left)여기에 오류가나면
    ||로 넘어가서 -100이 담기는 코드입니다
    */
    // console.log(initialValue); //-100
    const targetValue = -200;
    const unit = "%";

    const startTime = performance.now();
    // console.log(startTime);
    /*
    초기 페이지 로딩부터 클릭해서 nextSlide이 함수가 실행 되는 시간
    까지를 의미합니다
    performance.now()이 메소드는 높은 정밀로도 
    현재시간(브라우저가 로딩된 시점으로부터의 지금까지 시간)
    을 나타내어 밀리세컨드 단위로 반환하는 것입니다
    보통 정밀한 시간이 요청되는 애니메이션에서 사용됩니다
    */

    function animate(time) {
        //실제 요소를 움직이는 기능을하는 함수가 animate입니다
        // console.log(time);
        const timeReal = time - startTime;
        /*
        requestAnimationFrame 메소드가 호출되면서 브라우저가
        requestAnimationFrame을 렌더링(화면구현)하기전에
        시간정보를 담은 time이라는 변수를 생성합니다(자동으로)
        즉 time이라는 매개변수는 랜더링이 시작되는 시간정보를 담은 변수인것
        timeReal 실제 함수실행의 스타트가 될수 있는 시점
        */
        const progress = timeReal / duration;

        //timeReal은 진짜 함수가 진행되는 시간,
        //progress는 따라서 0~ 1사이의 값이 되게 됩니다

        const currentValue = initialValue + (targetValue - initialValue) * progress;
        ul.style.left = `${currentValue}${unit}`;


        if (progress < 1) {
            requestAnimationFrame(animate);
        } else if (progress >= 1) {
            ul.style.left = "-100%";
            ul.append(ul.firstElementChild);
            enableClick = true;
        }


    }
    requestAnimationFrame(animate);





    // new Anim(ul, {
    //     prop: "left",
    //     value: "-200%",
    //     duration: 1000,
    //     callback: () => {
    //         ul.append(ul.firstElementChild);
    //         ul.style.left = "-100%";
    //         enableClick = true;
    //     }
    // });
}


function init() {
    //무한루프 슬라이더가 되기 위한 초기화 작업을 하는 기능을 
    //모아서 함수로 패키징한것
    ul.style.width = `${100 * len}%`;
    lis.forEach((el) => {
        el.style.width = `${100 / len}%`;
    })
    ul.style.left = "-100%";
    ul.prepend(ul.lastElementChild);


}