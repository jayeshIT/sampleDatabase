Alloy.Globals.Counter = 0;
Alloy.Globals.insertValue = function() {
	var db = Titanium.Database.install('/student.db', 'student');
	Ti.API.info('Alloy.Globals.fn' + Alloy.Globals.fn);
	db.execute('INSERT INTO student_details (FirstName,LastName,Gender,Date,Month,Year,YourInformation,Degree,PassingYear,CollegeName,Image) VALUES(?,?,?,?,?,?,?,?,?,?,?)', Alloy.Globals.fn, Alloy.Globals.ln, Alloy.Globals.genderfloat, Alloy.Globals.Date_current, Alloy.Globals.Month, Alloy.Globals.Year, Alloy.Globals.information, Alloy.Globals.Degree, Alloy.Globals.PassingYear, Alloy.Globals.CollegeName, Alloy.Globals.Image_open);
	db.close();
};

