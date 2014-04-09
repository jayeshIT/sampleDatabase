Alloy.Globals.Degree = $.degreeText.value;
Alloy.Globals.PassingYear = $.passingYearText.value;
Alloy.Globals.CollegeName = $.collegeNameText.value;
Alloy.Globals.Image_open = Alloy.Globals.filename;

$.upload.addEventListener('click', function(e) {
	 var myFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, '/images/images.jpeg');
	var blob = myFile.read();
	myFile.getResourceDirectory( '/images/images.jpeg');
	
	
	 // Create an ImageView.
	// var anImageView = Ti.UI.createImageView({
		// image : '/images/images.jpeg',
		// width : 80,
		// height : 80
	// });
// 	
	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'images.jpeg');
	f.write(blob);
	Alloy.Globals.Image_open = 'images.jpeg';
});

$.submit.addEventListener('click', function(e) {
	Alloy.Globals.insertValue();
});
$.degreeText.addEventListener('blur', function(e) {
	if( isNaN($.degreeText.value) == false ){
		alert("please enter character value");
	
	}
	else{
	Alloy.Globals.Degree = $.degreeText.value;	
	}
});
$.passingYearText.addEventListener('blur', function(e) {
	if( isNaN($.passingYearText.value) == false ) 
	{
		if($.passingYearText.value >=1999 && $.passingYearText.value <= 2222)
		                          {
		                   
		                          
		               Alloy.Globals.PassingYear = $.passingYearText.value;
		               
		                           }
		                           else{
		                           	alert('passingYearText.value is going out of bound');
		                           }
	     }                  
	else
	{
	alert("please enter numeric  value ");	
	}
});
$.collegeNameText.addEventListener('blur', function(e) {
	if( isNaN($.collegeNameText.value) == false ){
		alert("please enter character value");
	
	}
	else{
	Alloy.Globals.CollegeName = $.collegeNameText.value;	
	}
});