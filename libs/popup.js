$(function(){
  chrome.storage.local.get('list', function (result) {
     list = result.list;
     $('.content').html(list.join('<br>'));
  });
 
})
