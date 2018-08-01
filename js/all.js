function appendImages(arr) {
  var start = new Date().getTime(),
    loaded = 0,
    container = $('.image-container');
  arr.forEach(function (url) {
    var bust = new Date().getTime();
    url = url + (url.indexOf('?') > -1 ? '&' : '?') + 'bust=' + bust;
    var img = $('<img src="' + url + '">');
    img[0].onload = function () {
      console.log('loaded');
      if (++loaded === arr.length) {
        var time = new Date().getTime() - start;
        $('.results').text('All images loaded in ' + time + ' ms.');
        var data = {};
        // if (window.performance) {
        //   data.time = window.performance.getEntriesByType('resource')
        //     .filter(entry => entry.initiatorType === 'img')
        //     .reduce((sum, entry) => {return sum + entry.duration}, 0)
        // } else {
          data.time = time;
        // }
        parent.postMessage(JSON.stringify(data), '*');
      }
    };
    container.append(img);
  });
}