
function choose(choices) {
      var index = Math.floor(Math.random() * choices.length);
      return choices[index];
    }

// get vine search results given search term
function search_vine(search_term) {

    var search_url = 'https://vine.co/api/posts/search/amazing '+search_term;
    $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent(search_url) + '&callback=?', function(data){

        var results = data.contents.data.records;
        $('#pro').html('<iframe src="'+choose(results)['permalinkUrl']+'/embed/simple?audio=1" width="300" height="300" frameborder="0"></iframe>')

    });

    var fsearch_url = 'https://vine.co/api/posts/search/'+search_term+' fail';
    $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent(fsearch_url) + '&callback=?', function(data){

        var fresults = data.contents.data.records;
        $('#fail').html('<iframe src="'+choose(fresults)['permalinkUrl']+'/embed/simple?audio=1" width="300" height="300" frameborder="0"></iframe>')

    });

}


$( document ).ready(function() {

    console.log('im alive');

    function choose(choices) {
      var index = Math.floor(Math.random() * choices.length);
      return choices[index];
    }

    var search_term = choose([
        'rock climbing',
        'skiing',
        'basketball shot',
        'skating',
        'driving',
        'dancing',
        'jump',
        'baseball catch',
        'hockey'
    ]);
    search_vine(search_term);
    $('input[type="text"]').val(search_term);

    $('button[type="submit"]').click(function(e){
        e.preventDefault();
        search_vine($('input[type="text"]').val());
    });

    $('button[type="button"]').click(function(e){
        location.reload();
    });

});