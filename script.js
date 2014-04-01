/**
 * @author Chidinma Irene Nwoye
 */

//This is an array of all our images in order. 
var images = ["drain_0m.png","drain_50m.png","drain_100m.png","drain_200m.png","drain_500m.png","drain_1km.png","drain_2km.png","drain_3km.png","drain_5km.png","drain_ed.png","drain_nl.png"];

var index=0;

$(document).ready(function(){
	
	console.log("hello");
	
	
	$(".image-holder").html(
		"<img src='DrainingOceans/"+images[index]+"'/>"    //Put in the folder name of the images i.e. DrainingOceans
	);
	
	console.log(images[index]);
	
});

console.log(images);

