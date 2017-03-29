$(function(){
  //先初始化用户存储的皮肤信息
  if(localStorage.theme){
    $('#theme').attr('href',localStorage.theme);
  }
  
  //通过ajax请求先将皮肤数据加载到页面中
  $.get('data/theme.json',function(data,status){
    var theme;
    for(var i=0;i<data.themes.length;i++){
      theme='<li><a href="javascript:" data-theme='+data.themes[i].cssMin+'>'+data.themes[i].name+'</a></li>';
      $('#theme-menu').append(theme);
    }
  })
})

//换肤函数
function theme(dom){
  var href=$(dom).attr('data-theme');
  $('#theme').attr('href',href);
  localStorage.theme=href;
}
//换肤
$('#theme-menu').on('click','a',function(){
  theme($(this));
})