//import axios from "axios";

 


// const RapidAPI_API_URL =   'https://real-estate-records.p.rapidapi.com/search/zipcode'

// const RapidAPI_REQUEST_HEADERS = {
// 	'X-RapidAPI-Host': 'real-estate-records.p.rapidapi.com',
//     'X-RapidAPI-Key': '104144b60bmsh3c8961bd6307ab4p1a9fa0jsnd60499f9e190',
// 	'Content-Type': 'application/json'
//   };


// //https://real-estate-records.p.rapidapi.com/?rapidapi-key=104144b60bmsh3c8961bd6307ab4p1a9fa0jsnd60499f9e190

// let title = ""
// const transactions = {
// 	title:"Property",
// 	err:"NULL",
// 	count:10588,
// 	data:[]
// };



// axios.post(RapidAPI_API_URL,transactions, {headers:RapidAPI_REQUEST_HEADERS})
// .then(response => {
// 	const data = response.data;
// 	console.log('data',data);
// 	title = data._title;
// })
// .catch(error => console.error('On create transactions',error));
let imgArr = ["house1.jpeg","house2.jpg","house3.jpg","house4.jpg","house5.jpg","house6.jpg","house7.jpg","house8.jpg"]
let textArr = ["Price: $89,900\nRooms: 4 bed 2.5 bath 2,296 sqft\nSize: 0.39 acre lot", "Price: $97,000\nRooms: 3 bed 2 bath 2,027 sqft\nSize: 0.48 acre lot", "Price: $65,000\nRooms: 3 bed 2 bath\nSize: 1,441 sqft 0.28 acre lot", "Price: $134,900\nRoom: 4 bed 2 bath\nSize: 1,869 sqft 0.25acre lot","Price: $175,000\nRooms: 4 bed 2 bath\nSize: 1,514 sqft 0.24 acre lot","Price: $180,000\nRooms: 3 bed 2 bath\nSize: 1,679 sqft 0.29 acre lot","Price: $250,000\nRooms 4 bed 2.5 bath\nSize: 2,414 sqft 0.46 acre lot","Price: $190,000\nRooms: 3 bed 2 bath\nSize: 1,491 sqft 0.23 acre lot","Price: $260,000\nRooms: 4 bed 2.5 bath\nSize: 2,787 sqft 0.26 acre lot"]
function genNumber(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}
function switchHouse()
{
	let i = genNumber(0,7);
	document.getElementById("HouseSwitch").src = "/css/images/"+imgArr[i];
}
document.getElementById("clkICN1").addEventListener("click", switchHouse);
document.getElementById("clkICN2").addEventListener("click", switchHouse);
document.getElementById("clkICN3").addEventListener("click", switchHouse);
document.getElementsByClassName("statistics")[0].getElementsByTagName("li")[0].addEventListener("click", function (){
	document.getElementById("main").style.backgroundColor = "#efa8b0";
});
document.getElementsByClassName("statistics")[0].getElementsByTagName("li")[1].addEventListener("click", function (){
	document.getElementById("main").style.backgroundColor = "#c79cc8";
});
document.getElementsByClassName("statistics")[0].getElementsByTagName("li")[2].addEventListener("click", function (){
	document.getElementById("main").style.backgroundColor = "#a89cc8";
});
document.getElementsByClassName("statistics")[0].getElementsByTagName("li")[3].addEventListener("click", function (){
	document.getElementById("main").style.backgroundColor = "#9bb2e1";
});
document.getElementsByClassName("statistics")[0].getElementsByTagName("li")[4].addEventListener("click", function (){
	document.getElementById("main").style.backgroundColor = "#8cc9f0";
});
document.getElementById("btn").addEventListener("click", function (){
	document.getElementById("main").style.backgroundColor = "#0c2d42";
});
//#0c2d42 btn
setInterval(function(){
	let i = genNumber(0,7); 
	document.getElementById("HouseSLIDE").src =  "/css/images/"+imgArr[i];
	document.getElementById("text").innerText = textArr[i]
},3000);

const msg = document.getElementById("showLoc");
	if(navigator.geolocation == false)
	{
		msg.innerHTML = "Your browser doesn't support Gelocation";
	}

	document.getElementById("showLoc").addEventListener("click",function(){
		navigator.geolocation.getCurrentPosition(locFound,locError);
	//	alert("")
	});

	function locError()
	{
		msg.innerHTML = "Can't find location.";
	}

	function locFound(area)
	{
		const {
			latitude,longitude
		} = area.coords;

		msg.innerHTML = "Location: "+latitude+","+longitude;
		
	}