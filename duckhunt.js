$(document).ready(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  var body = $('body');

  

  // 1. Can you create a <div> with the class "duck" and name it "$duck"

  var $duck1Div = $('<div/>');
  var $duck2Div = $('<div/>');
  var $duck3Div = $('<div/>');
  var $duck4Div = $('<div/>');

  var $duckAdd = $duck1Div.addClass('duck');
  var $duck2Add = $duck2Div.addClass('duck');
  var $duck3Add = $duck3Div.addClass('duck');
  var $duck4Add = $duck4Div.addClass('duck');

  //var duck 
  
body.append($duckAdd);
body.append($duck2Add);
body.append($duck3Add);
body.append($duck4Add);

animateDiv($duckAdd);
animateDiv($duck2Add);
animateDiv($duck3Add);
animateDiv($duck4Add);

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  setInterval(function(){

    $duck1Div.toggleClass('flap');
    $duck2Div.toggleClass('flap');
    $duck3Div.toggleClass('flap');
    $duck4Div.toggleClass('flap');


  }, 250);

  var countDuck =0;

  function toggleToShot(pass1){

    pass1.removeClass('duck');
    //pass1.removeClass('flap');
    pass1.addClass('shot');
    
    

   
    
     countDuck ++;

     

     setTimeout(function(){

      
      pass1.remove();

    

     }, 1000);

     if(countDuck == 4){

      alert("You won!");
     }

      
  }
  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"

 
  // var random;
  //  setInterval(function duck1(){

  //   random = Math.floor(Math.random() * 600);

  //   console.log(random);
  //   $duck1.css('right', random+'px');
  //    $duck1.css('bottom', random+'px');
  //    $duck1.css('left', random+'px');
  //    $duck1.css('top', random+'px');
     
  //  }, 1000); 
  


  // 4. Try making the duck move to a different location after 1 second

  // 5. Congratulations!

  function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 2000,   function(){
      animateDiv(myclass);        
    });
    
};


$($duck1Div).click(function(){

//$duck1Div.addClass('shot');

toggleToShot($duck1Div);

});

$($duck2Div).click(function(){

  toggleToShot($duck2Div);
  
});

$($duck3Div).on('click', function(){

  toggleToShot($duck3Div);
  
});

$($duck4Div).on('click', function(){

  toggleToShot($duck4Div);


  
});

});

