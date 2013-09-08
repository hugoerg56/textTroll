//Main List of words
main_words = ["perotenemospatria", "doblefacepalm", "whyyouno", "yatusabes"];

//Evento
$(function(){
  setInterval(function() { troll(); }, 1000);
})

//Replace function
function troll() {
  $('.chat div.body').each(function(){
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
  return [":"+name+":", "<img style='max-width: 600px; max-height: 600px;' src="+ chrome.extension.getURL("images/"+name+".jpg") +" />"];
}

function scroll_down(){
  $("html, body").animate({ scrollTop: $(document).height() + 10000 }, 1);
}

function replace_items(text){
  _.each(words_to_replace(), function(word){ text = text.replace((new RegExp(word[0], 'g')), word[1]); });
  return text;  
}

function storage_list(){
  chrome.storage.local.set({'list': main_words});
}

//On load
storage_list();
troll();