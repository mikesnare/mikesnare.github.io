function appendImages(arr) {
  var start,
    loaded = 0,
    $container = $('.image-container');

  function imageLoad() {
    console.log('loaded');
    if (++loaded === arr.length) {
      var time = new Date().getTime() - start;
      $('.results').text('All images loaded in ' + time + ' ms.');
      var data = {};
      data.time = time;
      parent.postMessage(JSON.stringify(data), '*');
    }
  }
  var $div = $('<div></div>');
  arr.forEach(function (url) {
    var bust = new Date().getTime();
    url = url + (url.indexOf('?') > -1 ? '&' : '?') + 'bust=' + bust;
    var img = $('<img src="' + url + '">');
    img[0].onload = imageLoad;
    $div.append(img);
  });
  start = new Date().getTime();
  $container.append($div);
}