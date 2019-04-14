$(function(){

	$(".radiusMenu a").click(function(){ 
    	$(".radius #firstRadius").text($(this).text());
    	$(".radius #firstRadius").val($(this).text());
  	});

	$(".genderMenu a").click(function(){
  		$(".gender #firstGender").text($(this).text());
  		$(".gender #firstGender").val($(this).text());
  	});

 	$(".propertyMenu a").click(function(){
  		$(".property #firstProperty").text($(this).text());
  		$(".property #firstProperty").val($(this).text());
  	});

   $(".localityMenu a").click(function(){
  		$(".locality #firstLocality").text($(this).text());
  		$(".property #firstLocality").val($(this).text());
  	});
 	


});