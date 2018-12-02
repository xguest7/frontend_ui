$(document).ready(function(){  /* ready는 다 로딩후 실행해라 */
   //slider 라는 id 속성을 가진 element 를 선택
   //jquery시
   //$("#slider")
   //$(".slider")
   //javascript시
   //document.getElementById("slider")
   //document.getElementsByClassName("slider")
   
   
    $items=$("#slider ul li.item");

    var currentIndex=1; //0부터 시작이지만 최초에 active가 있으니까
    var imgCount=$items.length;

    // setTimeout() 
    setInterval(function() {
        if(currentIndex >= imgCount) {
            currentIndex =0;
        }
        //1.모든 이미지에 active 클래스를 제거한다
        $items.removeClass('active');
        //2.currentIndex에 active 클래스 추가
        $items.eq(currentIndex++).addClass('active');
    },1000) 
})