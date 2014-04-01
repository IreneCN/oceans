/**
 * @author Chidinma Irene Nwoye
 */

//This is an array of all our images in order. 
var images = ["drain_0m.png","drain_50m.png","drain_100m.png","drain_200m.png","drain_500m.png","drain_1km.png","drain_2km.png","drain_3km.png","drain_5km.png","drain_ed.png","drain_nl.png"];


var index=0;          //The index of the current image in the images array

function setNav(){              //I'm setting the button events here
	console.log("setNav");
	
	$(".button").on("click",function(){
		
		var isNext = $(this).hasClass("next");
		
		if(isNext==true&& index!=(images.length-1)){
			index=index +1;
		}else if (isNext == false && index>0){
			index=index-1;
		}
		
		if (index==0){
			$(".buttonprev").addClass("disabled");
		}else if (index==(images.length-1)){
			$(".button.next").addClass("disabled");
		}else{
			$(".button").removeClass("disabled");
		}	
		
		console.log=(isNext);
		
		updateImage();
		
		/*index = index +1;
		updateImage(); */
		
		
		
	
	});
	
}


function updateImage(){       //changes the image
	$(".image-holder").html(
		"<img src='DrainingOceans/"+images[index]+"'/>"    //Put in the folder name of the images i.e. DrainingOceans
	);
	
	
}


$(document).ready(function(){   //Loads the first image into our image holder
	
	console.log("hello");
	
	
	$(".image-holder").html(
		"<img src='DrainingOceans/"+images[index]+"'/>"    //Put in the folder name of the images i.e. DrainingOceans
	);
	
	setNav();
	
	
	
});

console.log(images);

