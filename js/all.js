function appendImages(arr) {
  var start = new Date().getTime(),
    loaded = 0,
    container = $('.image-container');;
  arr.forEach(function (url) {
    var img = $('<img src="' + url + '">');
    img[0].onload = function() {
      console.log('loaded');
      if (++loaded === arr.length) {
        $('.results').text('All images loaded in ' + (new Date().getTime() - start) + ' ms.');
      }
    };
    container.append(img);
  });
}