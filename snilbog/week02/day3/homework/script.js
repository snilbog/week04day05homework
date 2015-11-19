$(document).ready(function(){
  var focusOn = function(){
    $('#searchTerm').focus();
  };
  var bindSearch = function(){
    $('#searchForm').on('submit', function(e){
      e.preventDefault();
      var inputs = $(this).find('input');
      var values = {};
      $.each(inputs, function(index, value){
        values[this.name] = this.value;
      });
      searchRedditCats(values);
    });
  };
  var searchRedditCats = function(searchImages) {
      $.ajax({
        method         : 'GET',
        url            : 'https://www.reddit.com/search.json?q=cats+nsfw:no',
        data           : {
          'q'          : searchImages.searchTerm,
          'restrict_q' : true,
      },
      success : function(response, textStatus, sink){
        displayImages(response.data.children);
      }
    });
  };
  var displayImages = function(response){
    var imageList = $('#list');
    imageList.empty();
    $.each(response, function(index, value){
      if(value.data.thumbnail !== '' && value.data.thumbnail !== 'self'){
        var listItem = $('<li><img src="' + value.data.thumbnail + '"></li>');
        imageList.append(listItem);
      }
    });
  };
  $('#stop').fadeOut(10);
$('#startButton').fadeOut(10);

$('#search').on('click', function(){
  $('#startButton').fadeIn(1000);
  $('#searchForm').fadeOut(1000);
  $('ul').show();
});

$('#start').on('click', function(){
  $('#stop').fadeIn(1000);
  $('#startButton').fadeOut(500);
});

$('#stop').on('click', function(){
  $('#searchForm').fadeIn(1000);
  $('#stop').fadeOut(500);
  $('ul').hide();
});

$('#start').on('click', function(e){
    e.preventDefault();
    $('li').hide();
      setInterval(function(){
        $('ul li:first-child').fadeOut(1000)
        .next('li').fadeIn(1000)
          .end().appendTo('ul');},
            3000);
    });
  bindSearch();
  focusOn();
});







