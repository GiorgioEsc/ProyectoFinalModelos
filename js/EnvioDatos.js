const URL = '../php/insert.php';

function toJson(puntaje, jugador, juego){
    return {
        "puntaje": puntaje,
        "jugador": jugador,
        "juego": juego
    };
}

function sendAJAX(urlP, datos){

    $.ajax({
      url: urlP,
      dataType: 'json',
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      data: datos,
      success: function( data, textStatus, jQxhr ){
        console.log( "success" );
        console.log( data );
      },
      error: function( jqXhr, textStatus, errorThrown ){
          console.log( errorThrown );
      }
    });
  
  }
  