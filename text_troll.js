//Main List of words
main_words = ["kaboom", "perotenemospatria", "doblefacepalm", "yunot", "yatusabes", "likeaboss", "likeasir", "lol", "megusta",
              "obamahappy", "obamasad", "ohgodwhy", "okay", "seriously", "trolol", "venceremos", "winning", "yaoming",
              "wat", "motherofgod", "omg", "muajaja", "dude", "brb", "illbeback", "comiendo", "genius", "fuehorrible"];

//Evento
$(function(){
  setInterval(function() { troll(); }, 1000);
})

//Replace function
function troll() {
  $('.chat div.body, .nH span').each(function(){
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
  return [":"+name+":", "<img style='max-width: 100px; max-height: 100px;' src="+ chrome.extension.getURL("images/"+name+".png") +" />"];
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
