//Main List of words
main_words = ["perotenemospatria"];

//Evento
$(function(){
  setInterval(function() { troll(); }, 1000);
})

//Replace function
function troll() {
  $('div.body').each(function(){
    replaced_text = replace_items($(this).html());
    if($(this).html() != replaced_text){
      $(this).html(replaced_text);
      scroll_down();
    }
  });  
  
};

//Default words to replace
function words_to_replace(){
  objects = [];
  for (i = 0; i < main_words.length; ++i) { objects.push(default_object_by_name(main_words[i])); }  
  return objects;
}

//Tools
function default_object_by_name(name){
  return [":"+name+":", "<img src="+ chrome.extension.getURL("images/"+name+".jpg") +" />"];
}

function scroll_down(){
  $("html, body").animate({ scrollTop: $(document).height() }, 1);
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