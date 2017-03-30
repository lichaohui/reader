$(function(){
  var cid=GetRequest().cid;
  var JSONP = window.JSONP.noConflict();
  JSONP.init({
    error: function(ex){
      console.log("Failed to load : " + ex.url);
    }
  });
  JSONP.get('https://api.douban.com/v2/note/'+cid,function (data) {
    $('#title').text(data.title);
    $('#para').html(data.content.replace(/\r\n/g,"<br />"));
  });
})