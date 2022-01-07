window.onload = function(){
  var section = document.getElementsByTagName("section");
  var image = document.querySelectorAll(".image");
  var pageNum = 0;
  var totalNum = image.length;

  //스크롤 이벤트
  window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;

    for(var i=0; i<totalNum+1; i++){
      if(scroll > section[i].offsetTop - window.outerHeight/1.5  && scroll < section[i].offsetTop - window.outerHeight/1.5 + section[i].offsetHeight){
        pageNum = i;
        break;
      }
    }
    pageChangeFunc();
  });


  //페이지 변경
  function pageChangeFunc(){

    for(var i=0; i<totalNum; i++){
      image[i].classList.remove("active");
    }
    
    image[pageNum].classList.add("active");
  }

  //페이지 로드되면 바로 실행
  pageChangeFunc();
}