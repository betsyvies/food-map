$(document).ready(function() {
  $('#input').keypress(function(event) {
    if (event.which === 13) {      
      var value = $(this).val();
      event.preventDefault();

      /* Validamos el texto y mostramos las imagenes */
      for (var i = 0; i <= comidas.length; i++) {
        if (value === comidas[i]['tipo']) {
          var comida = comidas[i].tipo;  

          for (var a = 0; a <= tipos.length; a++) {
            var restaurant = comidas[i].restaurantsList[a];     

            var $img = $('.restaurants');
          
            /* Cambiamos los atsributos de las imagenes */
            $img.eq(a).attr('src', data[comida][restaurant]['image']);
            $img.eq(a).attr('data-title', restaurant);
            $img.eq(a).attr('data-address', data[comida][restaurant]['address']);
            $img.eq(a).attr('data-phone', data[comida][restaurant]['phone']);
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
});


