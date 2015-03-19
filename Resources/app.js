Titanium.UI.setBackgroundColor("#fff");
//Calculating Platforms Dimensions 
var platformWidth = Ti.Platform.displayCaps.platformWidth;
var platformHeight = Ti.Platform.displayCaps.platformHeight;

// data source 
var studentInfo =
	[
     {title:"Jessica Jordan",img:"/images/Jordan.jpg",info:"Parent Name: Gina Jordan\n\Phone: 941-500-0000\n\Email: GMJordan@info.com\n\Student Grade: 6th\n\Class OF: 2021\n\Car Rider: Yes\n\Bus Rider: No\n\Walking: No\n\Start Date: 2014\n\Allergies: Peanut Butter, red dye 3\n\Special Accommodations: Brandon receives speech therapy twice a week and is given extra time to finish her tests"},
     {title:"Ashley Max",img:"/images/Max.jpg",info:"Student ID: 0010\n\First Name: Ashley\n\Last Name: Max\n\Parent Name: Max\n\Phone: 941-800-0000\n\Email: Max@info.com\n\Student Grade:  5th\n\Class OF: 2021\n\Car Rider: No\n\Bus Rider: yes\n\Walking: No\n\Info: Ashley Max started school at NextGenAcademic  in 2014\n\Allergies: No\n\Special Accommodations: ADHD giving one on one tutoring and extra time finish work "},
     {title:"Carline Louis",img:"/images/Louis.jpg",info:"Student ID: 0011\n\First Name: Carline\n\Last Name: Louis\n\Parent Name: Louis\n\Phone: 941-600-0000\n\Email: Louis@info.com\n\Student Grade:  4th\n\Class OF: 2020\n\Car Rider: Yes\n\Bus Rider: No\n\Walking: NO\n\Start Date:Carline Louis started school at NextGenAcademic  in 2014\n\Allergies:None\n\ Special Accommodations: None "},
     {title:"Jessie Nash",img:"/images/Nash.jpeg",info:"Student ID: 0013\n\First Name: Jessie\n\Last Name:  Nash\n\Parent Name: Nash\n\Phone: 941-700-0000\n\Email: Nash@info.com\n\Student Grade:  5th\n\Class OF: 2019\n\Car Rider: No\n\Bus Rider: Yes\n\Walking: NO\n\Start Date:Jessie Nash started school at NextGenAcademic  in 2014\n\Allergies: No\n\Special Accommodations: None"},
     {title:"Julie Jordan",img:"/images/Jordan1.jpg",info:"Student ID: 0014\n\First Name: Julie\n\Last Name: Jordan\n\Parent Name: Jordan\n\Phone: 941-900-0000\n\Email: Jordan@info.com\n\Student Grade:  4th\n\Class OF: 2020\n\Car Rider: Yes\n\Bus Rider: No\n\Walking: No\n\Info:Julie Jordan started school at NextGenAcademic  in 2014\n\Allergies: animal hair\n\Special Accommodations: Josh can not hold the class pet but can pet it with gloves on"}
     ];
//First Window
var mainWindow = Ti.UI.createWindow({
	title:'Students',
	backgroundColor:"#fff",
	exitOnClose:true	
});

var tableView = Ti.UI.createTableView({
	data:studentInfo
});
//this code detects what type of platform is being using and changes the style 
if(Ti.Platform.name ==="iPhone OS"){
	tableView.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

tableView.addEventListener("click",function(e){
	if(Ti.Platform.name==="iPhone OS"){
		var window = Ti.UI.createWindow({
			title:e.source.title,
			backgroundColor:"#fff"
		});
		
		var view = Ti.UI.createScrollView({
			text:e.source.info,
			top:115,
			showVerticalScrollIndicator: true,
			width: platformWidth,
			heigth:platformHeight,
			backgroundColor:"#b0e0e6"
		});
		
		var textLabel = Ti.UI.createLabel({
			 color: '#fff',
			  font: { fontSize:16 },
			  text:e.source.info,
			  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
			  top: 30,
			  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});

		var imgView = Ti.UI.createImageView({
			image:e.source.img,
			width: 92,
			height:92,
			top:20,
			left:210
		});
	}else{
		var view2 = Ti.UI.createView({
			backgroundColor:"#fff",
			text:"This application is restricted for iPhone only",
			textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		});
		
	}
	view.add(textLabel);
	window.add(imgView);
	window.add(view,view2);
	navWindow.openWindow(window);
});

//Navigation window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

mainWindow.add(tableView);
navWindow.open();