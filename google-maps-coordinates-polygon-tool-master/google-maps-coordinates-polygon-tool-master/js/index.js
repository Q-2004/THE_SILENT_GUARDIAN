// google map api key
// AIzaSyAyE4DinOX_M4I4119mrAPJm3UVgddzJzI 
const sun = '<svg viewbox="-50 -50 100 100">'+'<circle class="sun" cx="0" cy="0" r="20">'+'</circle>'+'</svg>';




function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(23.5881678, 120.2068121)
    // mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'),mapOptions);

  for(var i in markerArr){
    newMarker(markerArr[i].title,markerArr[i].position.lat,markerArr[i].position.lng,map)
  }
 
}



function newMarker(title,latN,lngN,map){
  var marker = new google.maps.Marker({
    title: title,
    content: sun,
    map: map,
    position: {lat:latN,lng:lngN}
  });
  var infowindow = new google.maps.InfoWindow ({
    content: sun
  });
  marker.addListener('click',function(){
    $('#areaInfoCard').remove();
    showInfoCard();
  });
  
}


  
  
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +'&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}



function showInfoCard(){
  var cardHtml = 
`
  <ul class="areaInfoBox">
    <li class="areaBox">
      <div class="spaceblock"></div>
      <div class="weatherIcon">
        <div class="rainBox">
          <div class="rain rain1"></div>
          <div class="rain rain2"></div>
          <div class="rain rain3"></div>
          <div class="rain rain4"></div>
          <div class="rain rain5"></div>
        </div>
        <p class="iconText">雨天</p>
      </div>
      <h2 class="areaName">台北市</h2>
    </li>
    <li class="temperBox">
      <h2 class="temper title"> 氣溫</h2>
      <p class="temper num">15度</p>
    </li>
    <li class="rainfallBox">
      <div class="rainfallIcon">
        <div class="rain"></div>
        <div class="rain rain2"></div>
        <div class="rain rain3"></div>
        <div class="rain rain4"></div><i class="fas fa-umbrella"></i>
      </div>
      <p class="rainfall">降雨機率 70%</p>
    </li>
    <li class="airBox">
      <div class="airIcon"><i class="fas fa-skull"></i></div>
      <p>空氣品質 佳</p>
    </li>
    <div class="weatherNote"> 
      <h4>小提醒</h4>
      <p class="note">記得帶把傘 </p>
    </div>
  </ul>
`
  $('#map').after('<div id="areaInfoCard"></div>');
  $('#areaInfoCard').append(cardHtml);
  console.log('insert!');
}


const markerArr = [
  {
    title: '台北市',
    position: {
      lat: 25.037780,
      lng: 121.564390
    }
  },
  {
    title: '新北市',
    position: {
      lat: 25.012538,
      lng: 121.465698
    }
  },
  {
    title: '基隆市',
    position: {
      lat: 25.131630,
      lng: 121.744642
    }
  },
  {
    title: '桃園市',
    position: {
      lat: 24.993191,
      lng: 121.301017
    }
  },
  {
    title: '新竹市',
    position: {
      lat: 24.806752,
      lng: 120.968823
    }
  },
  {
    title: '苗栗縣',
    position: {
      lat: 24.564863,
      lng: 120.820740
    }
  },
  {
    title: '台中市',
    position: {
      lat: 24.161890,
      lng: 120.646878
    }
  },
  {
    title: '南投縣',
    position: {
      lat: 23.902621,
      lng: 120.690489
    }
  },
  {
    title: '彰化縣',
    position: {
      lat: 24.075554,
      lng: 120.544696
    }
  },
  {
    title: '雲林縣',
    position: {
      lat: 23.699196,
      lng: 120.526324
    }
  },
  {
    title: '嘉義縣 ',
    position: {
      lat: 23.481317,
      lng: 120.453599
    }
  },
  {
    title: '台南市',
    position: {
      lat: 22.992372,
      lng: 120.185061
    }
  },
  {
    title: '高雄市',
    position: {
      lat: 22.620924,
      lng: 120.311885
    }
  },
  {
    title: '屏東縣 ',
    position: {
      lat: 22.682986,
      lng: 120.487926
    }
  },
  {
    title: '台東縣 ',
    position: {
      lat: 22.755471,
      lng: 121.150534
    }
  },
  {
    title: '花蓮縣 ',
    position: {
      lat: 23.991341,
      lng: 121.619819
    }
  },
  {
    title: '宜蘭縣 ',
    position: {
      lat: 24.730685,
      lng: 121.763103
    }
  },
  {
    title: '澎湖縣  ',
    position: {
      lat: 23.570003,
      lng: 119.566378
    }
  },
  {
    title: '金門縣  ',
    position: {
      lat: 24.436791,
      lng: 118.318632
    }
  },
  
]



window.onload = loadScript;

