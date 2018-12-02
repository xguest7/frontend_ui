$(document).ready(function(){
/*slider 라는 id 속성 가진 element 선택
document.getElementById("slider"); 
document.getElementByClassName("slider");  

*/  
  console.log("Hello");
    $items  =  $("#slider ul li.item");

    var currentIndex = 1;
    var imgCount = $items.length;


  setInterval(function(){
      if(currentIndex >= imgCount){
        currentIndex = 0;
      }
      $items.removeClass('active');
      $items.eq(currentIndex++).addClass('active');

  }, 1000);//반복시간
});

// setTimeout()