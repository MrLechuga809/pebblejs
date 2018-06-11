/* global simply */

simply.text({
    title: 'Hello!',
    subtitle: 'How are you?',
    body:   'blablablablablabla',
}, true);

simply.on('singleClick', function() {
   simply.body("I'm doing great!"); 
});
