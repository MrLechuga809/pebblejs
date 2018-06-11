
/* global simply */
simply.text({
    title: 'Hello!',
    //subtitle: 'How are you?',
    body:   'blablablablablabla',
}, true);

simply.on('singleClick', function() {
    //Pebble.showSimpleNotificationOnPebble('Hi Eddy!',
 // 'Notifications from JavaScript? Welcome to the future!');
    var theUrl = 'https://www.packtpub.com/packt/offers/free-learning';
  ajax({ url: theUrl, type: 'html' }, function(data) {
    simply.text({ body: data.getElementsByClassName("dotd-title")[0].innerText });
  });
});
