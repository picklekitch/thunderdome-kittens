var pics;

$.ajax({
  url: 'https://api.imgur.com/3/album/DDoWy',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID e8044b33c6e3a37',
  }
})
.done(function(res) {
  photoArray = res.data.images;
  console.dir(photoArray);
  console.log(photoArray);
  $('#button').click(function(){
    tracker.voted = false;
    showFromImgur();
  })
  showFromImgur();
})
.fail(function(err) {
  console.log(err);
})


function rand(){
  return Math.floor(Math.random() * photoArray.length + 1);
}

function showFromImgur(){
  var randL = rand();
  var randR = rand();

  while(randR === randL){
    randR = rand();
  }


  var displayPicL = '<img src="' + photoArray[randL].link +'">';
  var displayPicR = '<img src="' + photoArray[randR].link +'">';
  var left = $('#left')[0];
  var right = $('#right')[0];
  $('#left').html(displayPicL);
  $('#right').html(displayPicR);
  left.innerHTML = displayPicL;
  right.innerHTML = displayPicR;
  tracker.getChart(photoArray[randL].vote, photoArray[randR].vote);
  tracker.leftPhoto = photoArray[randL];
  tracker.rightPhoto = photoArray[randR];
}


