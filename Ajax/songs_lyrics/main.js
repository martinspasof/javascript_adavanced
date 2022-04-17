var nodes = {
	head: document.querySelector('.head'),
	output: document.getElementsByClassName('output')[0],
	getDataBtn1: document.getElementsByClassName('getDataBtn')[0],
	getDataBtn2: document.getElementsByClassName('getDataBtn')[1],
	getDataBtn3: document.getElementsByClassName('getDataBtn')[2],
	getDataBtns: document.getElementsByClassName('getDataBtn'),
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

function processResponse(r) {
	if(r.status === 200){
		return r.text()
	}else{
		throw new Error(`Error: ${r.status}`)
	}
}

// loop of button elements (images)
// fetch requests
for (let btns of nodes.getDataBtns) {
	let btnEl = btns.dataset.imgId;
	nodes[btnEl].addEventListener('click', function (e) {
		const imgId = this.dataset.imgId;

		// AJAXcall(render, imgId, nodes);

		var URL = this.src.replace(/(\w+)\.[a-z]+$/, '$1.txt').replace(/\bimages\b/, 'data');

		fetch(URL).then(res => {
			return processResponse(res);
		}).then(respText => {
			render(respText, nodes.output);
			return respText;

		}).catch(err => {
			console.log(err);
		})

	});
}

// loop of button elements (images)
// for (let btns of nodes.getDataBtns) {
// 	let btnEl = btns.dataset.imgId;
// 	nodes[btnEl].addEventListener('click', function (e) {
// 		const imgId = this.dataset.imgId;

// 		AJAXcall(render, imgId, nodes);

// 	});
// }

// nodes.head.addEventListener('click', function(e) {
// 	const img = e.target;
// 	console.log(img.src);
// 	const imgId = img.dataset.imgId;

// 	AJAXcall(render, imgId, nodes);

// })
