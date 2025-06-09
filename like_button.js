let count = 0;

window.like = function () {
	count++;
	document.getElementById("count").innerText = count;
};