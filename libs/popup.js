function copyTextToClipboard(text) {
  var copyFrom = $('<textarea/>');
  copyFrom.text(text);
  $('body').append(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.remove();
}

function div_for_word(word){
  var div = document.createElement('div');
  clip_image = chrome.extension.getURL("images/add.png")
  div.innerHTML = "<span>:"+word+":</span><img class='clip' width='12' src='"+clip_image+"'/>";
  div.className = 'word';
  return div
}

function thumb_with_name(word){
  div_image = document.createElement('div');
  img_src = chrome.extension.getURL("images/"+word+".jpg");
  div_image.innerHTML = "<img class='"+word+"' width='100%' src='"+ img_src +"'/>";
  div_image.className = 'preview';
  return div_image
}

function add_word(word){
  item = div_for_word(word);
  $(item).on('click', function(){
    copyTextToClipboard(":"+word+":");
  });
  $('.content').append(item); 
  $('.content').append("<div class='cl'></div>");
}

function add_image(word){
  image = thumb_with_name(word);
  $(image).on('click', function(){
    expand_reduce_image_for(word);
  }); 
  $('.content').append(image);
}

function expand_reduce_image_for(word){
  ima = $('img.'+word).parent();
  if(ima.css('width') == '30px' || ima.css('width') == undefined){
    ima.css('width', '200px');
  }else{
    ima.css('width', '30px');   
  }
}

$(function(){
  chrome.storage.local.get('list', function (result) {
     _.each(result.list, function(word){ 
       add_image(word);
       add_word(word);
     });   
  });
});




