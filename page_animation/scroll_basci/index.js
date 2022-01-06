 //변수
 window.onload = function(){
    var prevBtn = document.querySelector(".prevBtn");
    var nextBtn = document.querySelector(".nextBtn");
    var h1 = document.getElementsByTagName("h1")[0];
    var bgColorArr = ["#85FFBD", "#FFFB7D", "#E0C3FC", "#00DBDE"];
    var section = document.getElementsByTagName("section");
    //alert(section.length)

    var pageNum = 0;
    var totalNum = section.length;

    prevBtn.addEventListener("click", function(){
      if(pageNum > 0){
        pageNum --;
      }
      pageChangeFunc();
      window.scrollTo({
        top: section[pageNum].offsetTop,
        behavior: 'smooth',
      })
    })
    nextBtn.addEventListener("click", function(){
      if(pageNum < totalNum-1){
        pageNum ++;
      }
      pageChangeFunc();
      window.scrollTo({
        top: section[pageNum].offsetTop,
        behavior: 'smooth',
      })
    })

    function pageChangeFunc(){
      h1.innerHTML = (pageNum + 1) + " 페이지 입니다.";
      document.getElementsByTagName("body")[0].style.background = bgColorArr[pageNum];
      // console.log(bgColorArr[pageNum])
    }

    //페이지 로드되면 바로 실행
    pageChangeFunc();


    window.addEventListener("scroll", function(event){
      var scroll = this.scrollY;
      // var scroll2 = document.documentElement.scrollTop;
      // console.log(scroll, scroll2)

      //첫번째 방법. 
      // 1차원 적이지만 페이지 수가 2개 정도면 괜찮다.
      // if(scroll < section[1].offsetTop){
      //   pageNum = 0;
      // }
      // if(scroll > section[1].offsetTop){
      //   pageNum = 1;
      // }
      // if(scroll > section[2].offsetTop){
      //   pageNum = 2;
      // }
      // if(scroll > section[3].offsetTop){
      //   pageNum = 3;
      // }


      //두번째 방법
      for(var i=0; i<totalNum; i++){
        //console.log(i)
        if(scroll > section[i].offsetTop - window.outerHeight/3  && scroll < section[i].offsetTop - window.outerHeight/3 + section[i].offsetHeight){
          pageNum = i;
          //console.log(section[i].offsetHeight)
          break;
        }
        // if(scroll > section[i].offsetTop &&
        //     scroll < section[i].offsetTop + section[i].offsetHeight){
        //   pageNum = i;
        //   break;
        // }
        // console.log(section[i].offsetTop, section[i].offsetHeight)
      }
      pageChangeFunc();
    });
  }