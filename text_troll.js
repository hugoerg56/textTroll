//Evento
$(function(){
  $(document).keypress(function(e) {
      if(e.which == 13) {
        troll();
      }
  });  
})

//Replace function
function troll() {
  $('p, span, h1, h2, h3, h4, h5, h6, div, td, li').each(function(){
    replaced_text = replace_items($(this).html());
    $(this).html(replaced_text);
  });  
};

//Default words to replace
function words_to_replace(){
 return [[":perotenemospatria:", default_image_with_src("http://pbs.twimg.com/media/BJ3M1D7CQAAWOUq.jpg")]];  
}

//Tools
function default_image_with_src(src){
  return "<img src="+ src +" />";
}

function replace_items(text){
  words = words_to_replace();
  for (i = 0; i < words.length; ++i) {
    var re = new RegExp(words[i][0], 'g');
    text = text.replace(re, words[i][1]);
  }
  return text;  
}

//On load
troll();