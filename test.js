
/* global simply */
simply.text({
    title: 'Hello!',
    //subtitle: 'How are you?',
    body:   'blablablablablabla',
}, true);

simply.on('singleClick', function() {
    Pebble.showSimpleNotificationOnPebble('Hi Eddy!',
  'Notifications from JavaScript? Welcome to the future!');
});
