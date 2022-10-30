const searchEl=document.querySelector('.search');
const searchInputEl= searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();//돋보기 아이콘을 누르면 확장되게 만듦
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');//html처럼 input요소에 뜨게만드는 함수
});
searchInputEl.addEventListener('blur',function(){//포커스 제거하기위함
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');//html처럼 input요소에 뜨게만드는 함수
});

const badgeEl=document.querySelector('header .badges'); //badges이미지 두개를 스크롤하면 사라지게 하기위해

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY>500){
        //배지숨기기
        //gsap.to(요소,지속시간,옵션)gsap에서 애니메이션처리방법중 to기능
        gsap.to(badgeEl,0.6,{//갑자기 사라지는게아니라 0.6초동안서서히 사라진다
            opacity:0,
            display:'none'
        });
    } else{
        //배지보이기
        gsap.to(badgeEl,0.6,{//갑자기 나타나는게게아니라 0.6초동안서서히 생긴다
            opacity:1,//시각적으로나타내는 속성
            display:'block'
        });
    }
},300));//브라우저 창 //300은 0.3초를 의미 //_.throttle함수는 스크롤을 움직일때 많이 사용한다
//_.throttle(함수,시간)



const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
    //gsap.to(요소,지속시간,옵션)gsap에서 애니메이션처리방법중 to기능
    gsap.to(fadeEl,1,{
        delay:(index+1)* .7,//첫번째는 0.7초후 두번째는 1.4초후 애니메이션이 동작한다
        opacity:1
    });
});

//swiper javascript      new Swiper(선택자 ,옵션)
new Swiper('.notice-line .swiper-container',{
    direction:'vertical' ,//마우스로 클릭하여 올리면 화면이 올라간다
    autoplay:true, //자동재생
    loop:true  //반복재생

});
new Swiper('.promotion .swiper-container',{
    //direction='herizontal'//수평으로 이동할수있게하는거지만 기본값으로 들어간다
    slidesPerView: 3 ,//한번에 보이는 슬라이더 수가 3개이다
    spacebetween: 10, //슬라이드 사이여백은 10
    centeredSlides:true, //첫번째 글라이드가 가운데에서 보이게된다
    loop:true,
    autoplay:{
        delay:5000//5초에 한번씩 이미지가 하나씩 넘어간다   
    },
    pagination:{
        el:'.promotion .swiper-pagination',//페이지 번호 요소 선택자
        clickable:true//사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation:{
        prevEl:'.promotion .swiper-prev', //이전버튼 선택자
        nextEl:'.promotion .swiper-next'   //다름버튼
    }
});
new Swiper('.awards .swiper-container',{
    //direction:'horizontal',//수평슬라이드 (기본값)
    autoplay:true,
    loop:true,
    spacebetween:30,
    slidesPerView:5,//한개의 화면에 몇개의 슬라이드를 보일거냐? 5개
    navigation:{
        prevEl:'.awards .swiper-prev',//이전버튼 선택자
        nextEl:'.awards .swiper-next' //다음버튼 선택자
    }
})




const promotionEl=document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion=false;

promotionToggleBtn.addEventListener('click',function () {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //true숨김처리
        promotionEl.classList.add('hide');
    }else{
        //false보임처리
        promotionEl.classList.remove('hide');
    }
});




// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector,delay,size){
    //gsap.to(요소,시간,옵션)
    gsap.to(selector,//선택자
        random(1.5,2.5),//애니메이션 동작시간
        {//옵션
        y:size,//y축을 의미
        repeat:-1,//무한반복
        yoyo:true,//한번 재생되는 애니메이션을 다시 역재생
        ease: "power1.easeInOut",
        delay:random(0,delay)//3초동안 기다렸다가 다시 시작되기위해 설정
    });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);



const spyEls=document.querySelector('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement:spyEl,//보여짐여부를 감시할 요소를 지정
        triggerHook: .8//뷰포트의 0.8높이에 보여진다
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMaic.Controller());
})//foreach 메소드를 써서 요소들을 반복할것이고 반복하기위해 함수 지정

//해당년도를 자동출력
const thidYear=document.querySelector('.this-year');
thisYear.textContent=new Date().getFullYear();