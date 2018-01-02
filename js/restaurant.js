$(document).ready(function() {
  $('#input').on('keyup', function(event) {
    /* Validamos si el valor del input es igual a un valor del array de objetos comidas */    
    var value = $(this).val();
    event.preventDefault();

    /* Validamos el texto y mostramos las imagenes */
    for (var index = 0; index <= comidas.length; index++) {
      if (value === comidas[index]['tipo']) {
        var comida = comidas[index].tipo;  

        for (var i = 0; i <= tipos.length; i++) {
          var restaurant = comidas[index].restaurantsList[i];     

          var $img = $('.restaurants');
          
          /* Cambiamos el atributo src y agregamos los otros atributos a las imagenes */
          $img.eq(i).attr('src', data[comida][restaurant]['image']);
          $img.eq(i).attr('data-title', restaurant);
          $img.eq(i).attr('data-address', data[comida][restaurant]['address']);
          $img.eq(i).attr('data-phone', data[comida][restaurant]['phone']);
        }
      }
    }
  });
  /* Eventos para mostrar información del restaurante */
  /* Al pasar el mouse por la imagen se mostrará el valor de data-title */
  $('a[data-toggle=modal]')
    .on('mouseover', function() {
      var dataTitle = $(this).children('img').attr('data-title'); 
      
      $(this).children('p').text(dataTitle);
      $(this).children('img').addClass('container-hover');
    })
  
    .on('mouseout', function() {
      var dataTitle = $(this).children('img').attr('data-title'); 
        
      $(this).children('p').text('');
      $(this).children('img').removeClass('container-hover');
    });

  /* Al darle click a la imagen se mostrará un modal */
  $('a[data-toggle=modal]').on('click', function() {
    var dataTitle = $(this).children().attr('data-title');
    var dataAddress = $(this).children().attr('data-address');
    var dataPhone = $(this).children().attr('data-phone');
            
    $($(this).data('target') + ' .modal-header h1').text(dataTitle);
    $($(this).data('target') + ' .modal-body #address').text(dataAddress);
    $($(this).data('target') + ' .modal-body #phone').text(dataPhone);
  });
});