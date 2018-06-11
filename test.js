var txt = "";
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "https://www.packtpub.com/packt/offers/free-learning", true);
    xmlhttp.send();
  }
  
  function myFunction(xml) {
    var x, i, xmlDoc;
    xmlDoc = xml.responseXML;
    
    x = xmlDoc.getElementsByClassName("dotd-title");

    txt = x[0].innerHTML;
  }

/* global simply */
simply.text({
    title: 'Hello!',
    //subtitle: 'How are you?',
    body:   'blablablablablabla',
}, true);

simply.on('singleClick', function() {
   simply.body(String.toString(txt)); 
});
