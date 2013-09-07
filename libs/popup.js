function copyTextToClipboard(text) {
  var copyFrom = $('<textarea/>');
  copyFrom.text(text);
  $('body').append(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.remove();
}

$(function(){
  chrome.storage.local.get('list', function (result) {
     _.each(result.list, function(word){ 
       var div = document.createElement('div');
       div.textContent = ":"+word+":";
       div.className = 'word';
       div.onclick = copyTextToClipboard(":"+word+":");
       $('.content').append(div); 
     });   
  });
});




