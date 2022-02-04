$(function(){
    $("#slide-div").slick({
        slide:'div', //슬라이드 되어야 할 태그
        Infinity:true, // 무한 반복
        slidesToShow:4, // 한 화면에 보여질 컨텐츠 갯수
        slidesToScroll : 1, //스크롤 한 번에 움직일 컨텐츠 갯수
        speed:100, // 다음 화면 뜨는 데까지 걸리는 시간
        arrows:false, // 옆으로 이동하는 화살표 표시 여부
        dots:true, // 스크롤 바 아래 점으로 페이지네이션 여부
        autoplay:true, // 자동 스크롤 사용 여부
        autoplaySpeed:1800, //자동 스크롤 시 다음으로 넘어가는데 걸리는 시간
        pauseOnHover:true, //슬라이드 이동 시 hover 하면 슬라이드 멈추게 설정
        vertical:false, // 세로 방향 슬라이드 옵션
       
        draggable : true, // 드래그 가능 여부

        responsive:[ // 반응형 웹 구현 옵션
            {
                breakpoint:960, //화면 사이즈
                settings:{
                    slidesToShow:3 //위에 옵션이 디폴트, 여기에 추가하면 그걸로 변경
                }
            },
            {
                breakpoint:768, //사이즈 화면
                settings:{
                    slidesToShow:2 //위에 옵션이 디폴트, 여기에 추가하면 그걸로 변경
                }
            }
        ]
    });
})

