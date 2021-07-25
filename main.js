var play1 = document.querySelector('.play1');
var play2 = document.querySelector('.play2');
var play3 = document.querySelector('.play3');
var play4 = document.querySelector('.play4');
var play = [play1 , play2, play3 , play4] ; 
var pause1 = document.querySelector('.pause1') ;
var pause2 = document.querySelector('.pause2') ;
var pause3 = document.querySelector('.pause3') ;
var pause4 = document.querySelector('.pause4') ;

var pause = [pause1 , pause2 , pause3 ,pause4] ;
var mysong1 = document.querySelector('#mysong1') ; 
var play2 = document.querySelector('.play2') ; 
var mysong2= document.querySelector('#mysong2') ; 
var mysong3 = document.querySelector('#mysong3') ; 
var mysong4 = document.querySelector('#mysong4') ; 
var mysong =[mysong1,mysong2,mysong3 , mysong4]


var timer1= document.querySelector(".timer1") ; 
var playhead1= document.querySelector('.elapsed1') ; 
var timeline1 =document.querySelector('.slider1') ; 

var timer2 = document.querySelector(".timer2") ; 
var playhead2= document.querySelector('.elapsed2') ; 
var timeline2 =document.querySelector('.slider2') ; 

var timer3 = document.querySelector(".timer3") ; 
var playhead3= document.querySelector('.elapsed3') ; 
var timeline3 =document.querySelector('.slider3') ; 

var timer4 = document.querySelector(".timer4") ; 
var playhead4= document.querySelector('.elapsed4') ; 
var timeline4 =document.querySelector('.slider4') ; 

var timer =[timer1, timer2, timer3 , timer4] ; 
var playhead = [playhead1, playhead2,playhead3,playhead4] ; 
var timeline = [timeline1, timeline2, timeline3,timeline4] ;
var duration ; 


   

mysong2.addEventListener("timeupdate", timeUpdate, false);
mysong2.addEventListener("canplaythrough", function () {
	duration = mysong2.duration;
}, false);

function timeUpdate() {
  var timelineWidth = timeline2.offsetWidth - playhead2.offsetWidth;
  var playPercent = timelineWidth * (mysong2.currentTime / duration);
  playhead2.style.width = playPercent + "px";

  var secondsIn = Math.floor(((mysong2.currentTime / duration) / 0.35) * 100);
  if (secondsIn <= 9) {
    timer2.innerHTML = "0:0" + secondsIn;
  } else {
    timer2.innerHTML = "0:" + secondsIn;
  }
}

function runMusic (i) {
    play[i].onclick = function() {
        if(mysong[i].paused){
            mysong[i].play() ;
            play[i].style.opacity=0 ;
            pause[i].style.opacity=1;
            addClass(i) ;
        }
        else {
            mysong[i].pause(); 
            pause[i].style.opacity=0 ;
            play[i].style.opacity=1 ;
            removeClass(i) ;
        }
    
    }
}

for (var i = 0 ; i<play.length ; i++) {
    runMusic(i) ;
}
/*play1.onclick = function() {
    mysong1.play() ;
    addClass(0) ; 
} */
var x = document.querySelectorAll('.box_music') ; 
var lenght = x.length ; 

function addClass(i) { 
x[i].classList.add('box_music1');
}

function removeClass(i) {
 x[i].classList.remove('box_music1');
}


// Quan ly dang nhap 
/*var tk1 = document.querySelector('#tk').value ; 
var email1 = document.querySelector('#email').value ; 
var mk1 = document.querySelector('#mk').value ; 
var reggg =document.querySelector("#reg-btn") ; 
var Member = {
  data:[] , 
  viewMember() {
    var listMember =this.data ;
    for (var i = 0 ;  i<listMember.lenght;i++) {
      alert("<div>" + listMember[i].tk1 + "|" + listMember[i].email1 + "|" + listMember[i].mk1 + "</div>");
    }
  },
  addMember(tk,email,mk){
    var item = {
      tk : tk,
      email : email,
      mk : mk 
  },
  this.data.push(item) ; 
  },
  removeMember (tk) {
    for(var i = 0; i < this.data.length; i++){
      if (this.data[i].tk === tk) { 
          this.data.splice(i, 1); 
      }
  }
  }
};
*/

