
/* global simply */
simply.text({
    title: 'Hello!',
    //subtitle: 'How are you?',
    body:   'blablablablablabla',
}, true);


ajax({ url: 'https://www.packtpub.com/packt/offers/free-learning' }, function(data){
  var parse = new DOMParser();
      var html = parse.parseFromString(request.responseText, "html/text");
        Pebble.showSimpleNotificationOnPebble('Hello!', html.getElementsByClassName("dotd-title")[0].innerText);
  simply.title(headline);
});



