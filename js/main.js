$('#nav').affix({
      offset: {
        top: $('#page-header').height()
      }
});	
$(document).ready(function() {
  var Messages = ['Το νέο τεύχος Ν.25 Δεκεμβρίου του περιοδικού Boat & Fishing In Greece', 'Αλιευτίκος Τουρισμός η νέα μόδα', 'BigGame Tournament στο Ιόνιο απο τις 25/8!'];
  var rand = Messages[Math.floor(Math.random() * Messages.length)];
  console.log("ssdss"+rand);
  $('#container_reminder').append(document.createTextNode(rand))
  
    $('.pgwSlider').pgwSlider();
    $('.product-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});