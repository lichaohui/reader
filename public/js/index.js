$(function(){
  //上下导航栏的显示和隐藏效果切换
  let isNavShow=false;
  function toggleNav(){
    let toggleNav,i,animateIn,animateOut;
    toggleNav=$('.toggle-nav');
    if(isNavShow){
      for(i=0;i<toggleNav.length;i++){
        animateIn=toggleNav.eq(i).attr('data-animate-in');
        animateOut=toggleNav.eq(i).attr('data-animate-out');
        toggleNav.eq(i).removeClass(animateIn).addClass(animateOut);
      }
      isNavShow=false;
    }else{
      for(i=0;i<toggleNav.length;i++){
        animateIn=toggleNav.eq(i).attr('data-animate-in');
        animateOut=toggleNav.eq(i).attr('data-animate-out');
        toggleNav.eq(i).removeClass(animateOut).addClass(animateIn);
      }
      isNavShow=true;
    }
  }
  //点击内容区域的时候调用toggleNav()方法显示或隐藏
  $('#container').click(function(){
    toggleNav();
  });
})