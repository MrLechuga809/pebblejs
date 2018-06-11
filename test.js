
/* global simply */
simply.text({
    title: 'Hello!',
    //subtitle: 'How are you?',
    body:   'blablablablablabla',
}, true);

simply.on('singleClick', function() {
    simply.body("Loading...");
    ajax({ url: 'https://www.google.com.do', type:'html' }, function(data){
    simply.scrollable(true);
    simply.body(data);
    });
});
