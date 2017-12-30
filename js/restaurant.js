$(document).ready(function() {
  $('#restaurants').keypress(function(event) {
    if (event.which === 13) {      
      var value = $(this).val();
      event.preventDefault();

      /* Validamos el texto y mostramos las imagenes */
      for (var i = 0; i <= comidas.length; i++) {
        if (value === comidas[i]['tipo']) {
          var comida = comidas[i].tipo;  

          for (var a = 0; a <= tipos.length; a++) {
            var restaurant = comidas[i].restaurantsList[a];   
            console.log(restaurant);
            
            var $img = $('.restaurants');
            var $title = $('#title');
            var $address = $('#address');
            var $phone = $('phone');
          
            /* Cambiamos el atributo src de las imagenes */
            $img.eq(a).attr('src', data[comida][restaurant]['image']);
            
            /* */
          }
        } 
      }
    }
  });
});


