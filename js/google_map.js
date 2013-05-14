function initialize() {

var styles = [
	{"featureType": "road.highway",	"elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#c22430" } ] },{ "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#c22430" }, { "lightness": 100 } ] },{ "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [ { "color": "#808080" }, { "weight": 0.4 }, { "visibility": "on" } ] },{ "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#c22430" }, { "gamma": 2 } ] },{ "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#f0f0f0" } ] },{ "featureType": "landscape.man_made", "stylers": [ { "visibility": "on" }, { "color": "#f0f0f0" } ] },{ "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#c22430" }, { "lightness": 70 } ] },{ "featureType": "road.highway", "elementType": "labels.icon", "stylers": [ { "visibility": "on" }, { "lightness": 10 }, { "gamma": 9.91 }, { "invert_lightness": true } ] } ];

var styledMap = new google.maps.StyledMapType(styles,
    {name: "Divine Pie Vendors"});

var mapOptions = {
    center: new google.maps.LatLng(45.521743, -122.653328),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
}

map.mapTypes.set('map_style', styledMap);

map.setMapTypeId('map_style');

google.maps.event.addDomListener(window, 'load', initialize);

