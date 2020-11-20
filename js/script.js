function init() {
  var mp = document.getElementById("map")
  var locDefault = new google.maps.LatLng(39.809734, -98.555620);
  var locGPS = new google.maps.LatLng(44.524937, -110.838166);
  var locSky = new google.maps.LatLng(42.499129, -88.968893);
  var locET = new google.maps.LatLng(37.532294, -115.231748);
  var locArch = new google.maps.LatLng(38.740044, -109.570700);
  var locTor = new google.maps.LatLng(43.632922, -79.411811);
  var opt = {
    center: locDefault,
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_CENTER
    }
  };
  
  var map = new google.maps.Map(mp, opt);
  
  var marker1 = new google.maps.Marker({
    position: locGPS,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentGPS =
    '<h2 id="yellowmap">Grand Prismatic Spring</h2><img id="yellowmapimg" src="media/yellowstonefull.jpg" alt="hotspring in yellowstone national park.">'
  var infoGPS = new google.maps.InfoWindow({
    content: contentGPS
  });
 
  var marker2 = new google.maps.Marker({
    position: locSky,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentSky =
    '<h2 id="skymap">Skydive The Rock - Beloit, WI</h2><img id="skymapimg" src="media/skydivingfull.jpg" alt="skydiving view of ground.">'
  var infoSky = new google.maps.InfoWindow({
    content: contentSky
  });
  
  var marker3 = new google.maps.Marker({
    position: locET,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentET =
    '<h2 id="etmap">Extraterrestrial Highway - Rachel/Hiko, NV</h2><img id="etmapimg" src="media/rachel.jpg" alt="The Extraterresterial Highway sign, Outside Rachel, NV.">'
  var infoET = new google.maps.InfoWindow({
    content: contentET
  });
  
  var marker4 = new google.maps.Marker({
    position: locArch,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentArch =
    '<h2 id="archmap">Arches National Park - Moab, UT</h2><img id="archmapimg" src="media/archesfull.jpg" alt="Arches Panoramic.">'
  var infoArch = new google.maps.InfoWindow({
    content: contentArch
  });
  
  var marker5 = new google.maps.Marker({
    position: locTor,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentTor =
    '<h2 id="tormap">Toronto, Ontario, Canada.</h2><img id="tormapimg" src="media/torontofull.jpg" alt="Toronto skyline.">'
  var infoTor = new google.maps.InfoWindow({
    content: contentTor
  });
  
  google.maps.event.addListener(marker1, 'click', function () {
    infoGPS.open(map, marker1);
    map.setZoom(20);
    map.setCenter(marker1.getPosition());
  });
  
  google.maps.event.addListener(marker2, 'click', function () {
    infoSky.open(map, marker2);
    map.setZoom(17);
    map.setCenter(marker2.getPosition());
  });
  
  google.maps.event.addListener(marker3, 'click', function () {
    infoET.open(map, marker3);
    map.setZoom(17);
    map.setCenter(marker3.getPosition());
  });
  
  google.maps.event.addListener(marker4, 'click', function () {
    infoArch.open(map, marker4);
    map.setZoom(20);
    map.setCenter(marker4.getPosition());
  });
  
  google.maps.event.addListener(marker5, 'click', function () {
    infoTor.open(map, marker5);
    map.setZoom(20);
    map.setCenter(marker5.getPosition());
  });
  google.maps.event.addDomListener(window, 'load', init);
  //window.addEventListener('load', init);
}