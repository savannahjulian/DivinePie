function initialize() {

var styles = [
	{ "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#777777" }, { "visibility": "on" }, { "lightness": 30 } ] },{ "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" }, { "weight": 0 } ] },{ "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#c8c8c8" }, { "lightness": -10 } ] },{ "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [ { "color": "#f0f0f0" }, { "visibility": "on" } ] },{ "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [ { "color": "#E0E0E0" }, { "visibility": "on" }, { "weight": 2 } ] },{ "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "color": "#e31f2d" }, { "lightness": 60 }, { "saturation": 60 }, { "gamma": 1.45 }, { "visibility": "off" } ] },{ "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#d2d2d2" }, { "saturation": -100 } ] },{ "featureType": "landscape.natural.terrain", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [ { "color": "#0a0a0a" }, { "visibility": "on" } ] },{ "featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#f0f0f0" } ] },{ "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "visibility": "simplified" } ] },{ "featureType": "poi" },{ "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "transit", "stylers": [ { "visibility": "on" }, { "hue": "#333333" }, { "lightness": 30 } ] },{ "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "on" }, { "hue": "#ff0022" }, { "lightness": 50 }, { "saturation": 80 } ] },{ "featureType": "road.highway", "elementType": "labels.icon", "stylers": [ { "visibility": "on" }, { "hue": "#E31F2D" }, { "saturation": 60 }, { "lightness": 20 } ] } ];

var myLatLng = new google.maps.LatLng(45.50635, -122.67962);

var mapOptions = {
    zoom: 11,
    center: myLatLng,
    scrollwheel: false,
    mapTypeControlOptions: {mapTypeIds: google.maps.MapTypeId.ROADMAP},
    draggable: true,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	styles: styles
    };

var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

var kmlUrl = 'https://sites.google.com/site/dpvendorskml/kml-files/kml_network_link.kml?'+"?dummy="+(new Date()).getTime();

var kmlOptions = {
	suppressInfoWindows: false,
	preserveViewport: true,
	map: map
	};

var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);

kmlLayer.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);