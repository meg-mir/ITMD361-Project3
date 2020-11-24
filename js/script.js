function init() {
  var mp = document.getElementById("map");
  var locDefault = new google.maps.LatLng(55.760583, -97.862694);
  var locGPS = new google.maps.LatLng(44.524937, -110.838166);
  var locSky = new google.maps.LatLng(42.499129, -88.968893);
  var locET = new google.maps.LatLng(37.532294, -115.231748);
  var locArch = new google.maps.LatLng(38.740044, -109.570700);
  var locTor = new google.maps.LatLng(43.632922, -79.411811);
  var locGiants = new google.maps.LatLng(55.240564, -6.512272);
  var opt = {
    center: locDefault,
    zoom: 4,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_CENTER,
      mapTypeIds: ["roadmap", "hybrid", "terrain", "satellite"],
    },
     zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER,
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
  };
  
  var map = new google.maps.Map(mp, opt);
  var mq = window.matchMedia( "(max-width: 1366px)" );
    if (mq.matches) {
    map.setZoom(3);
    }
  var marker1 = new google.maps.Marker({
    position: locGPS,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentGPS =
    '<h2 id="yellowmap">Grand Prismatic Spring</h2><img id="yellowmapimg" src="media/yellowstonefull.jpg" alt="hotspring in yellowstone national park.">';
  var infoGPS = new google.maps.InfoWindow({
    content: contentGPS,
  });
 
  var marker2 = new google.maps.Marker({
    position: locSky,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentSky =
    '<h2 id="skymap">Skydive The Rock - Beloit, WI</h2><img id="skymapimg" src="media/skydivingfull.jpg" alt="skydiving view of ground.">';
  var infoSky = new google.maps.InfoWindow({
    content: contentSky,
  });
  
  var marker3 = new google.maps.Marker({
    position: locET,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentET =
    '<h2 id="etmap">Extraterrestrial Highway - Rachel/Hiko, NV</h2><img id="etmapimg" src="media/rachel.jpg" alt="The Extraterresterial Highway sign, Outside Rachel, NV.">';
  var infoET = new google.maps.InfoWindow({
    content: contentET,
  });
  
  var marker4 = new google.maps.Marker({
    position: locArch,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentArch =
    '<h2 id="archmap">Arches National Park - Moab, UT</h2><img id="archmapimg" src="media/archesfull.jpg" alt="Arches Panoramic.">';
  var infoArch = new google.maps.InfoWindow({
    content: contentArch,
  });
  
  var marker5 = new google.maps.Marker({
    position: locTor,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentTor =
    '<h2 id="tormap">Toronto, Ontario, Canada.</h2><img id="tormapimg" src="media/torontofull.jpg" alt="Toronto skyline.">';
  var infoTor = new google.maps.InfoWindow({
    content: contentTor
  });
  
  var marker6 = new google.maps.Marker({
    position: locGiants,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentGiants =
    '<h2 id="giamap">Giant&#39;s Causeway&#44; Bushmills&#44; Northern Ireland</h2><img id="giamapimg" src="media/irelandfull.jpg" alt="Cliffside view, Northern Ireland.">';
  var infoGiants = new google.maps.InfoWindow({
    content: contentGiants,
  });
  
  marker1.addListener('mouseover', function() {
    infoGPS.open(map, this);
  });
  marker1.addListener('mouseout', function() {
    infoGPS.close();
  });

  marker2.addListener('mouseover', function() {
    infoSky.open(map, this);
  });
  marker2.addListener('mouseout', function() {
    infoSky.close();
  });

  marker3.addListener('mouseover', function() {
    infoET.open(map, this);
  });
  marker3.addListener('mouseout', function() {
    infoET.close();
  });

  marker4.addListener('mouseover', function() {
    infoArch.open(map, this);
  });
  marker4.addListener('mouseout', function() {
    infoArch.close();
  });

  marker5.addListener('mouseover', function() {
    infoTor.open(map, this);
  });
  marker5.addListener('mouseout', function() {
    infoTor.close();
  });

  marker6.addListener('mouseover', function() {
    infoGiants.open(map, this);
  });
  marker6.addListener('mouseout', function() {
    infoGiants.close();
  });

  google.maps.event.addListener(marker1, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker1.getPosition());
  });
  
  google.maps.event.addListener(marker2, 'click', function () {
    map.setZoom(17);
    map.setCenter(marker2.getPosition());
  });
  
  google.maps.event.addListener(marker3, 'click', function () {
    map.setZoom(17);
    map.setCenter(marker3.getPosition());
  });
  
  google.maps.event.addListener(marker4, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker4.getPosition());
  });
  
  google.maps.event.addListener(marker5, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker5.getPosition());
  });
  
  google.maps.event.addListener(marker6, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker6.getPosition());
  });
  
  google.maps.event.addDomListener(window, 'load', init);
}
  $(document).ready(function(){
      $('.slider').bxSlider({
      slideWidth: 900,
      adaptiveHeight: true,
      shrinkItems: true,
      controls: true,
      autoControls: true,
      auto: true,
      autoStart: true,
      autoHover: true,
      captions: true,
      });
  });
