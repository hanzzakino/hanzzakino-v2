


var maxScroll = 0;

window.onscroll = function(){
	//console.log(document.documentElement.scrollTop);
	//console.log(document.getElementById("idH-head2").offsetTop);
	//console.log(window.innerHeight);
	//console.log("Scrolled");
	if(document.documentElement.scrollTop>maxScroll) maxScroll = document.documentElement.scrollTop;

	permanentFXOnScrollBy(document.getElementById("idH-CtnImgMe"),"H-CtnImgMe","H-CtnImgMeAnim",200);
	permanentFXOnScrollBy(document.getElementById("idH-CtnMSlogan"),"H-CtnMSlogan","H-CtnMSloganAnim",200);
}



function permanentFXOnScrollBy(docEl, nofx, fx, mid){
	//location on the screen
	var LOC = (docEl.offsetTop-document.documentElement.scrollTop);
	if(LOC<Math.floor((window.innerHeight/2)+mid) 
		&& LOC>0
		){
		docEl.className = fx;
	} else if(maxScroll>(docEl.offsetTop)){
		docEl.className = fx;
	}
	else {
		docEl.className = nofx;
	}
}



// function bodyScrollFX(docEl, nofx, fx, mid){
// 	var LOC = (docEl.offsetTop-document.documentElement.scrollTop);
// 	console.log(LOC); 	
// 	console.log(Math.floor(window.innerHeight/2)); 	
// 	if(LOC<Math.floor((window.innerHeight/2)+mid) 
// 		&& LOC>0
// 		){
// 		document.getElementById("idH-MainView").className = fx;
// 		console.log("new body");
// 	} else {
// 		document.getElementById("idH-MainView").className = nofx;
// 		console.log("old body");
// 	}
// }