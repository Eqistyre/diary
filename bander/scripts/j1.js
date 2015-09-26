//全局变量储存
var images = document.getElementsByClassName("showPhoto");


//将其余图片隐藏
function hideImages() {

	for (var i = 0; i < images.length; i++) {
			images[i].style.display = "block";
		};
	for (var i = 1; i < images.length; i++) {
			images[i].style.display = "none";
		};
}


//左右按键对应的效果
function leftPic() {
	var leftButton = document.getElementById("leftButton");
	leftButton.onclick = function() {
		//找出当前图片
		for (var i = 0; i <images.length; i++) {
			if (images[i].style.display == "block") {
				imagesOrder = i;
			};
		};
		//切换图片
		switch(imagesOrder) {
			case 0: {images[0].style.display = "none";images[3].style.display = "block"};
			break;

			case 1: {images[1].style.display = "none";images[0].style.display = "block"};
			break;

			case 2: {images[2].style.display = "none";images[1].style.display = "block"};
			break;

			case 3: {images[3].style.display = "none";images[2].style.display = "block"};
			break;

		};
	};
}

function rightPic() {
	var rightButton = document.getElementById("rightButton");
	rightButton.onclick = function() {
		//找出当前图片
		for (var i = 0; i <images.length; i++) {
			if (images[i].style.display == "block") {
				imagesOrder = i;
			};
		};
		//切换图片
		switch(imagesOrder) {
			case 0: {images[0].style.display = "none";images[1].style.display = "block"};
			break;

			case 1: {images[1].style.display = "none";images[2].style.display = "block"};
			break;

			case 2: {images[2].style.display = "none";images[3].style.display = "block"};
			break;

			case 3: {images[3].style.display = "none";images[0].style.display = "block"};
			break;

		};
	};
}


//开始时的载入
window.onload = function() {
	hideImages();
	leftPic();
	rightPic();
}