$(document).ready(function() {
  $('#input').keypress(function(event) {
    /* Validamos si el evento escucha a la tecla enter */
    if (event.which === 13) {      
      var value = $(this).val();
      event.preventDefault();

      /* Validamos el texto y mostramos las imagenes */
      for (var index = 0; index <= comidas.length; index++) {
        if (value === comidas[index]['tipo']) {
          var comida = comidas[index].tipo;  

          for (var i = 0; i <= tipos.length; i++) {
            var restaurant = comidas[index].restaurantsList[i];     

            var $img = $('.restaurants');
          
            /* Cambiamos los atsributos de las imagenes */
            $img.eq(i).attr('src', data[comida][restaurant]['image']);
            $img.eq(i).attr('data-title', restaurant);
            $img.eq(i).attr('data-address', data[comida][restaurant]['address']);
            $img.eq(i).attr('data-phone', data[comida][restaurant]['phone']);
          }
        }
      }
    }
  });
  /* Eventos para mostrar información del restaurante */
  /* Al pasar el mouse por la imagen se mostrará el valor de data-title */
  $('a[data-toggle=modal]').mouseover(function() {
    var dataTitle = $(this).children('img').attr('data-title'); 
    
    $(this).children('p').text(dataTitle).addClass('title-img');
  });

  /* Al darle click a la imagen se mostrará un modal */
  $('a[data-toggle=modal]').click(function() {
    var dataTitle = $(this).children().attr('data-title');
    var dataAddress = $(this).children().attr('data-address');
    var dataPhone = $(this).children().attr('data-phone');
            
    $($(this).data('target') + ' .modal-header h1').text(dataTitle);
    $($(this).data('target') + ' .modal-body #address').text(dataAddress);
    $($(this).data('target') + ' .modal-body #phone').text(dataPhone);
  });

  /* Al dar click en el button close se regresará a la vista principal */
  $('.modal-header button').click(function() {
    window.location.assign('../index.html');
  });
});


