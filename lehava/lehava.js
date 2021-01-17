$(document).ready(function() {
  var playing = false;

  

  $('a#button').click(function() {
      $(this).toggleClass("down");

      if (playing == false) {
          document.getElementById('player').play();
          playing = true;
          $(this).removeClass('soundIcnPlay');
          $(this).addClass('soundIcnPause');

      } else {
          document.getElementById('player').pause();
          playing = false;
          $(this).removeClass('soundIcnPause');
          $(this).addClass('soundIcnPlay');
          
      }

      

  });
});


/*
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_s-xclick">
      
      <input type="hidden" name="hosted_button_id" value="BMZMJN27HGAL6">
      
      <input type="image" src="fa fa-paypal" border="0" name="submit">

      <img border="0" src="fa fa-paypal" width="1" height="1"
      </form>
      */
     