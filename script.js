
var heading = document.getElementById("edit_heading").value;
var post = document.getElementById("edit_content").value;
var tags = document.getElementById("edit_tag").value;
var not_key = ["the", "and", "a", "an", "it"];

$(document).ready(function() {
  $('#fb_select').click(function(){
    $( "#fb_select" ).toggleClass("fb_selected");
  });

  $('#tw_select').click(function(){
    $( "#tw_select" ).toggleClass("tw_selected");
  });

  $('#ins_select').click(function(){
    $( "#ins_select" ).toggleClass("ins_selected");
  });

  $('#pin_select').click(function(){
    $( "#pin_select" ).toggleClass("pin_selected");
  });

  $('#tum_select').click(function(){
    $( "#tum_select" ).toggleClass("tum_selected");
  });
});

function convert() {
  var twitter = $("#tw_select").hasClass("tw_selected");
  var facebook = $("#fb_select").hasClass("fb_selected");
  var instagram = $("#ins_select").hasClass("ins_selected");
  var pinterest = $("#pin_select").hasClass("pin_selected");
  var tumblr = $("#tum_select").hasClass("tum_selected");

  if(twitter) {
    convertToTweet();
  }
  if(facebook) {
    convertToFacebook();
  }
  if(instagram) {
    convertToInstagram();
  }
  if(pinterest) {
    convertToPinterest();
  }
  if(tumblr) {
    convertToTumblr();
  }
}

function convertToTweet() {
  var current = 0;
  var count = 0;
  var characters = 0;
  var sentences = [];
  var key_words = [];
  var tag_list = [];
  var arr = [];
  var result = "";
  var tagResults = "";
  sentences = post.split(".");
  key_words = heading.split(" ");
  tag_list = tags.split(", ");
  /*
  for(int i = 0; i < key_words_init.length; i++) {
    for(int j = 0; j < not_key.length; j++) {
      if(key_words_init[i].toLowerCase() != not_key[j].toLowerCase()) {
        key_words.push(key_words_init[i]);
      }
    }
  }*/

  for(var i = 0; i < sentences.length-1; i++) {
    var words = sentences[i].split(" ");
    for(var j = 0; j < words.length; j++) {
      for(var k = 0; k < key_words.length; k++) {
        if(key_words[k].toLowerCase() == words[j].toLowerCase()) {
          count++;
        }
      }
    }
    if(count > 0) {
      arr.push(sentences[i]);
    }
  }

  for(var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  while(result.length > 280) {
    arr = [];
    count = 0;
    for(var i = 0; i < sentences.length-1; i++) {
      words = sentences[i].split(" ");
      for(var j = 0; j < words.length; j++) {
        for(var k = 0; k < key_words.length; k++) {
          if(key_words[k].toLowerCase() == words[j].toLowerCase()) {
            count++;
          }
        }
      }
      if(count > current) {
        arr.push(sentences[i]);
        current = count;
        count = 0;
      }
    }
    result = "";
    for(var i = 0; i < arr.length; i++) {
      result += arr[i] + ".";
    }
  }
  for(var i = 0; i < tag_list.length; i++) {
    tagResults += "#" + tag_list[i] + " ";
  }

  $("#twitterContainer").css("display", "inherit");
  document.getElementById("twHead").innerHTML = heading;
  document.getElementById("twPost").innerHTML = result;
  document.getElementById("twTags").innerHTML = tagResults;
  console.log(result.length);
}

function convertToFacebook() {

}

function convertToInstagram() {

}

function convertToPinterest() {

}

function convertToTumblr() {

}
