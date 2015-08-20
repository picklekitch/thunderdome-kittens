'use strict';

var photoArray = [];



// var Photo = function(fileLocation) {
//   this.path = fileLocation;
//   this.votes = 0;
// };

// photoArray.push(new Photo('img/kitten1.jpg'));
// photoArray.push(new Photo('img/kitten2.jpg'));
// photoArray.push(new Photo('img/kitten3.jpg'));
// photoArray.push(new Photo('img/kitten4.jpg'));
// photoArray.push(new Photo('img/kitten5.jpg'));
// photoArray.push(new Photo('img/kitten6.jpg'));
// photoArray.push(new Photo('img/kitten7.jpg'));
// photoArray.push(new Photo('img/kitten8.jpg'));
// photoArray.push(new Photo('img/kitten9.jpg'));
// photoArray.push(new Photo('img/kitten10.jpg'));
// photoArray.push(new Photo('img/kitten11.jpg'));
// photoArray.push(new Photo('img/kitten12.jpg'));
// photoArray.push(new Photo('img/kitten13.jpg'));
// photoArray.push(new Photo('img/kitten14.jpg'));
var Tracker = function() {
  this.leftPhoto = '';
  this.rightPhoto = '';
  this.voted = false;
};
var tracker = new Tracker();


Tracker.prototype.waitingForVote = function() {

  $('#left').click(function(e){
    tracker.oneVote(e);
  });

  $('#right').click(function(e){
    tracker.oneVote(e);
  });
}

Tracker.prototype.oneVote = function(e){
  console.dir(e.target.attributes[0].value);
  if(!this.voted){
    var obj = this.compare(e.target.attributes[0].value);
    obj.vote++;
    this.voted = true;
    console.dir(e);
    console.log(obj.vote);
  }
}

Tracker.prototype.compare = function(x){
  for(var i=0; i<photoArray.length; i++){
    if(x === photoArray[i].link){
      return photoArray[i];
    }
  }
}

Tracker.prototype.getChart = function(){
  var leftVotes = this.leftPhoto.vote || 0;
  var rightVotes = this.rightPhoto.vote || 0;
  if(leftVotes === 0 && rightVotes === 0){
    leftVotes = 1;
    rightVotes = 1;
  }
  var ctx = document.getElementById("myChart").getContext("2d");
  console.log(leftVotes)
  console.log(rightVotes)
  var myNewChart = new Chart(ctx).Doughnut([{value: leftVotes, color: 'red'}, {value: rightVotes, color: 'green'}]);
  console.dir(myNewChart);
}


//   //receive the click
//   //increment the vote count
//   //event listener on each photo
//   //hightlight()
//   //drawTheChart
//   //giveUserOptionToVoteAgain()?
// };
//receiveVote()
// var ctx = document.getElementById("myChart").getContext("2d");
// console.dir(Chart)
// var myNewChart = new Chart(ctx).Doughnut([{value: leftVotes, color: 'red'}, {value: rightVotes, color: 'green'}]);
// console.dir(Chart);

// Tracker.prototype.getRandomInt = function() {
//   var random = (Math.floor(Math.random() * 14) );
//   console.log(random)
//   return random;
// };

// Tracker.prototype.displayPhotos = function() {
//   this.leftPhoto = photoArray[this.getRandomInt()];
//   console.log(this.leftPhoto);
//   this.rightPhoto = photoArray[this.getRandomInt()];
//   console.log(this.rightPhoto);
//   while (this.leftPhoto == this.rightPhoto) {
//     this.rightPhoto = photoArray[this.getRandomInt()];
//     console.log(this.rightPhoto);
//   }

//   var left = $('#left')[0];
//   var right = $('#right')[0];
//   var leftContent = '<img src = "' + this.leftPhoto.path + '" />';
//   console.log(leftContent);
//   var rightContent = '<img src = "' + this.rightPhoto.path + '" />';
//   console.log(leftContent);
//   left.innerHTML = leftContent;
//   right.innerHTML = rightContent;
// };

// tracker.displayPhotos();
tracker.waitingForVote();
