function initialize() {

var styles = [
	{ "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#808080" }, { "visibility": "on" }, { "lightness": 30 } ] },{ "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" }, { "weight": 0 } ] },{ "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#c8c8c8" }, { "lightness": -10 } ] },{ "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "simplified" } ] },{ "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#ffffff" } ] },{ "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "color": "#e31f2d" }, { "lightness": 60 }, { "saturation": 60 }, { "gamma": 1.45 }, { "visibility": "off" } ] },{ "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#d2d2d2" }, { "saturation": -100 } ] },{ "featureType": "landscape.natural.terrain", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road.highway", "elementType": "labels.icon", "stylers": [ { "hue": "#ff001a" }, { "saturation": 100 }, { "lightness": 20 }, { "visibility": "simplified" } ] },{ "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [ { "lightness": 30 }, { "color": "#808080" }, { "visibility": "on" }, { "hue": "#ff0000" }, { "weight": 0.1 }, { "saturation": 100 } ] },{ "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "visibility": "simplified" } ] },{ "featureType": "poi" },{ "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "transit", "stylers": [ { "visibility": "on" }, { "hue": "#ff1a00" }, { "lightness": 30 } ] },{ } ];

var myLatLng = new google.maps.LatLng(45.514527, -122.596436);

var mapOptions = {
    zoom: 11,
    center: myLatLng,
    scrollwheel: false,
    mapTypeControlOptions: {mapTypeIds: google.maps.MapTypeId.ROADMAP},
    draggable: false,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	styles: styles
    };

var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

var kmlUrl = 'http://barrettj.co/DPvendors.kml';

var kmlOptions = {
	suppressInfoWindows: true,
	preserveViewport: true,
	map: map
	};

var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);

kmlLayer.setMap(map);

function showInContentWindow(text) {
	var sidediv = document.getElementById('content-window');
	sidediv.innerHTML = text;
	};

google.maps.event.addListener(kmlLayer, 'click', function(kmlEvent) {
	var text = kmlEvent.featureData.description;
	showInContentWindow(text);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);