
/* global simply */
simply.text({
    title: 'Hello!',
    //subtitle: 'How are you?',
    body:   'blablablablablabla',
}, true);
var theUrl = 'https://www.packtpub.com/packt/offers/free-learning';

function makeHttpObject() {
    try {return new XMLHttpRequest();}
    catch (error) {}
    try {return new ActiveXObject("Msxml2.XMLHTTP");}
    catch (error) {}
    try {return new ActiveXObject("Microsoft.XMLHTTP");}
    catch (error) {}
  
    throw new Error("Could not create HTTP request object.");
  }
  var request = makeHttpObject();
  request.open("GET", "theUrl", true);
  request.send(null);
  request.onreadystatechange = function() {
    if (request.readyState == 4)
      //alert(request.responseText);
        Pebble.showSimpleNotificationOnPebble('Hello!',request.responseText);
  };

