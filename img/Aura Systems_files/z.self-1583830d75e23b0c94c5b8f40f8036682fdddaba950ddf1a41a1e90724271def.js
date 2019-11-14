function Notificar2(data)
{
  var title = "";
  var typs = "";
  var text = "";

  if(data.user == $("#actual_user_log").val())
  {


  switch (data.t) {
    case "apprx":
      title = "Alerta de Aproximidad";
      typs = "info";
      text = "<i class='fa fa-laptop'></i> <span style='color:#d12017; weight:bold;'>"+data.pv+"</span> <br>"+data.m;  
      var notice = PNotify.info({
        title: title,
        text: text,
        icon: 'fa fa-exclamation-triangle',
        textTrusted: true
      });  

     
      break;

      case "apagado":
        title = "Sistema apagado con exito";
        typs = "info";
        text = "<i class='fa fa-laptop'></i> <span style='color:white; font-weight:bold;'>"+data.pv+"</span> <br>"+data.m;  
        var notice = PNotify.error({
          title: title,
          text: text,
          icon: 'fa fa-power-off',
          textTrusted: true
        });  
        break;

        case "encendido":
        title = "Sistema encendido con exito";
        typs = "info";
        text = "<i class='fa fa-laptop'></i> <span style='color:#d12017; weight:bold;'>"+data.pv+"</span> <br>"+data.m+"<br>";  
        var notice = PNotify.info({
          title: title,
          text: text,
          icon: 'fa fa-power-off',
          textTrusted: true
        });  
        break;

        case "wifi_on":
          title = "Red Conectada";
          typs = "info";
          text = "<i class='fa fa-laptop'></i> <span style='color:#d12017; weight:bold;'>"+data.pv+"</span> <br>"+data.m+"<br>";  
          var notice = PNotify.info({
            title: title,
            text: text,
            icon: 'fa fa-wifi',
            textTrusted: true
          });  
          break;

          case "wifi_off":
          title = "Red Desconectada";
          typs = "info";
          text = "<i class='fa fa-laptop'></i> <span style='color:white; weight:bold;'>"+data.pv+"</span> <br>"+data.m+"<br>";  
          var notice = PNotify.error({
            title: title,
            text: text,
            icon: 'fa fa-wifi',
            textTrusted: true
          });  
          break;

          case "data_on":
          title = "Red Movil Conectada";
          typs = "info";
          text = "<i class='fa fa-laptop'></i> <span style='color:black; font-weight:bold;'>"+data.pv+"</span> <br>"+data.m+"<br>";  
          var notice = PNotify.info({
            title: title,
            text: text,
            icon: 'fa fa-mobile',
            textTrusted: true
          });  
          break;

          case "data_off":
          title = "Red Movil Conectada";
          typs = "info";
          text = "<i class='fa fa-laptop'></i> <span style='color:white; font-weight:bold;'>"+data.pv+"</span> <br>"+data.m+"<br>";  
          var notice = PNotify.error({
            title: title,
            text: text,
            icon: 'fa fa-mobile',
            textTrusted: true
          });  
          break;

          case "location":
          title = "Máquina localizada";
          typs = "info";
          text = "<i class='fa fa-laptop'></i> <span style='color:black; font-weight:bold;'>"+data.pv+"</span> <br>"+data.m+"<br>";  
          var notice = PNotify.notice({
            title: title,
            text: text,
            icon: 'fa fa-map-marker-alt',
            textTrusted: true
          }); 

          var myLatLng = {lat: parseFloat(data.latitud), lng: parseFloat(data.longitud)};

          
          map = new google.maps.Map(document.getElementById('panel_contrainer'), {
            center: {lat: 18.735693, lng: -70.1626511},
            zoom: 5,
              zoomControl: false,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: true,
              fullscreenControl: false
          });

          var center = new google.maps.LatLng(parseFloat(data.latitud), parseFloat(data.longitud));
          map.panTo(center);

          var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Ubicado aqui'
            });

          break;
  
    default:
      break;
  }
  $("#noti_indicador").addClass("bg-red");
  $("#alert_p").jPulse({
    color: "#ffffff",
    size: 100,
    speed: 2000,
    interval: 4000,
    left: 0,
    top: 0,
    zIndex: 1
    });
  notice.refs.elem.style.cursor = 'pointer';
  notice.on('click', function(e) {
    if ($(e.target).is('.ui-pnotify-closer *, .ui-pnotify-sticker *')) {
      return;
    }
    
    //Redireccion
    window.location = "/notify/show/"+data.id;

  });

}
}


