function pressKey(key){
    $.ajax({
        url: '/controller/' + key,
      }).done(function() {
        console.info('Pressed a key')
      });
}

$(function () {
    
    $('button').on('click', function(){
        if ($(this).attr('id')){
            let key = $(this).attr('id');
            
            pressKey(key);
        }
    });

});