var isRowAdded = false;
var row = Ti.UI.createTableViewRow({
	backgroundColor : 'green',
	width : Ti.UI.FILL,
	height : 80
});
var picker = Ti.UI.createPicker({
	height : Ti.UI.FILL
});
row.add(picker);
$.dobText.addEventListener('click', function(e) {
	if (isRowAdded) {
		$.tableview.deleteRow(row);
		isRowAdded = false;
	} else {
		$.tableview.insertRowAfter(3, row);
		isRowAdded = true;
	}
});
// else{
// $.pickRow.visible=false
// }
picker.type = Titanium.UI.PICKER_TYPE_DATE;
picker.minDate = new Date(2000, 0, 1);
picker.maxDate = new Date(2020, 11, 31);
picker.value = new Date();
$.dobText.addEventListener('blur', function(e) {
});

// $.dobText.value = $.dobPicker.value;
picker.addEventListener('change', function(e) {
	$.dobText.value = e.value;
	Alloy.Globals.Date_current = new Date().getDate();
	Alloy.Globals.Month = new Date().getMonth();
	Alloy.Globals.Year = new Date().getFullYear();
});
$.firstNameText.addEventListener('blur', function(e) {
	if( isNaN($.firstNameText.value) == false ){
		alert("please enter character value");
	}
	else{
		Ti.API.info('$.firstNameText.value'+$.firstNameText.value);
		
	Alloy.Globals.fn = $.firstNameText.value;	
	}
});
$.lastNameText.addEventListener('blur', function(e) {
	if( isNaN($.lastNameText.value) == false ){
	
	alert("please enter character value");	
	}
	else{
		Alloy.Globals.ln = $.lastNameText.value;
	}
});
$.male.addEventListener('change', function(e) {
	Alloy.Globals.genderfloat = $.male.value;
	$.female.value = !($.male.value);
	
});
$.female.addEventListener('change', function(e) {
	Alloy.Globals.genderfloat = $.female.value;
	$.male.value = !($.female.value);
});
$.aboutTextA.addEventListener('blur', function(e) {
	Alloy.Globals.information = $.aboutTextA.value;
});

// Alloy.Globals.FirstName=$.txt1.value;
// Alloy.Globals.LastName=$.txt2.value;
// Alloy.Globals.Gender=$.label3.value;
// Alloy.Globals.Date=$.pick.value.getDate();
// Alloy.Globals.Month=$.pick.value.getMonth();
// Alloy.Globals.Year=$.pick.value.getFullYear();
// Alloy.Globals.AboutYourself=$.txta.value;
//
//
