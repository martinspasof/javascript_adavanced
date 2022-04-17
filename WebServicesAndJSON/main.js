var nodes = {
	head: document.querySelector('.head'),
	output: document.getElementsByClassName('output')[0]
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



nodes.head.addEventListener('click', function (e) {
        
    var URL = 'http://api.icndb.com/jokes/random';

    fetch(URL).then(res => {
        return processResponse(res);
    }).then(respText => {
        let joke = JSON.parse(respText).value.joke;
        return joke;
    }).then(joke => {
        render(joke, nodes.output);
    }).catch(err => {
        console.log(err);
    })

})
