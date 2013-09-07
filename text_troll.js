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
  return _.map(main_words, function(word){ return default_object_by_name(word); });
}

//Tools
function default_object_by_name(name){
  return [":"+name+":", "<img src="+ chrome.extension.getURL("images/"+name+".jpg") +" />"];
}

function scroll_down(){
  $("html, body").animate({ scrollTop: $(document).height() }, 1);
}

function replace_items(text){
  _.each(words_to_replace(), function(word){ text = text.replace((new RegExp(word[0], 'g')), word[1]); });
  return text;  
}

//On load
troll();