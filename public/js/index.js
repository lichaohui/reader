$(function(){
  //获取章节列表的函数
  function getChapters(start,limit=10){
    $.get('data/chapter.json',function(data,status){
      if(data.msg=='success'){
        if(start<data.chapters.length){
          var media;
          $('#more').attr('data-start',start+limit);
          for(var i=start;i<start+limit;i++){
            media='<li class="media"><div class="media-body"><h4 class="media-heading"><a href="show.html?cid='+data.chapters[i].id+'">'+data.chapters[i].title+'</a></h4><p>'+data.chapters[i].summary+'</P></div></li>';
            $('#chapters').append(media);
          }
        }else{
          alert('没有更多了！');
        }
      }
    })
  }
  //页面渲染完毕后调用getChapters函数加载一部分章节信息
  getChapters(0,1);
  //点击加载更多的时候获取更多章节信息
  $('#more').click(function(){
    var start=parseInt($(this).attr('data-start'));
    getChapters(start);
  })
})