var nodes = {
	output: document.getElementsByClassName('output')[0],
	getDataBtn1: document.getElementsByClassName('getDataBtn')[0],
	getDataBtn2: document.getElementsByClassName('getDataBtn')[1],
	getDataBtn3: document.getElementsByClassName('getDataBtn')[2],
};

var AJAXcall = function (callback, getDataBtn, ...args) {
	// create a XMLHttpRequest object
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
		new ActiveXObject("Microsoft.XMLHTTP");

	var dataURL = args[0][getDataBtn].src.replace(/(\w+)\.[a-z]+$/, '$1.txt').replace(/\bimages\b/, 'data');

	// initializes the request:
	xhr.open("GET", dataURL);


	// EventHandler, that will be fired each time when the xhr state changes
	xhr.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {
			callback(this.responseText, args[0].output)
		};
	};

	// sends the request:
	xhr.send();
};

function render(data, node) {
	node.innerHTML = data
}

nodes.getDataBtn1.addEventListener('click', function () {
	AJAXcall(render, 'getDataBtn1', nodes);
});

nodes.getDataBtn2.addEventListener('click', function () {
	AJAXcall(render, 'getDataBtn2', nodes);
});

nodes.getDataBtn3.addEventListener('click', function () {
	AJAXcall(render, 'getDataBtn3', nodes);
});