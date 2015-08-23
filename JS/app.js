'use strict';

var photoArray = [];

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

tracker.waitingForVote();
