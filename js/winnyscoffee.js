

$(document).ready(function () {
  $('.tbtext').hover(
    function () {
      $('.tbtext').html('L O V E');
    }, function () {
      $('.tbtext').html('S I M P L E');
    });

    $('.jcol1.row1').hover(
      function () {
        $('.jcol2.row1').html('Happy Couple: Sarah and Dalton');
      }, function () {
        $('.jcol2.row1').html("Sarasota, FL");
      });

    $('.jcol3.row1').hover(
      function () {
        $('.jcol2.row1').html('Matchmaker: Name 1');
      }, function () {
        $('.jcol2.row1').html("Sarasota, FL");
      });

    $('.jcol1.row2').hover(
      function () {
        $('.jcol2.row2').html('Happy Couple: Winny and Ella');
      }, function () {
        $('.jcol2.row2').html("Seattle, WA");
      });

      $('.jcol3.row2').hover(
        function () {
          $('.jcol2.row2').html('Matchmaker: Name 2');
        }, function () {
          $('.jcol2.row2').html("Seattle, WA");
        });

        $('.jcol1.row3').hover(
          function () {
            $('.jcol2.row3').html('Happy Couple: Winny and Ella');
          }, function () {
            $('.jcol2.row3').html("Bali, Indonesia");
          });

          $('.jcol3.row3').hover(
            function () {
              $('.jcol2.row3').html('Matchmaker: Name 3');
            }, function () {
              $('.jcol2.row3').html("Bali, Indonesia");
            });
});
