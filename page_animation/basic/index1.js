window.onload = function(){
    var prevBtn = document.querySelector(".prevBtn");
    var nextBtn = document.querySelector(".nextBtn");
    var h1 = document.getElementsByTagName("h1")[0];

    var bgColorArr = ["#85FFBD", "#FFFB7D", "#E0C3FC", "#00DBDE"];

    var totalNum = bgColorArr.length;
    var pageNum = Math.round(Math.random()*(totalNum-1));
    
    // var totalNum = 6;

    prevBtn.addEventListener("click", function(){
      if(pageNum > 0){
        pageNum --;
      }else {
        pageNum = totalNum-1;
      }
   bgColorChange();
    })

    nextBtn.addEventListener("click", function(){
      if(pageNum < totalNum-1){
        pageNum ++;
      }else{
        pageNum = 0;
      }
      bgColorChange();
    })

    function bgColorChange(){
      h1.innerHTML = pageNum + " 페이지 입니다.";
      document.getElementsByTagName("div")[0].style.background = bgColorArr[pageNum];
      // document.querySelector(".bg").style.background = bgColorArr[pageNum];
    }

    //처음 실행
    bgColorChange();
  }