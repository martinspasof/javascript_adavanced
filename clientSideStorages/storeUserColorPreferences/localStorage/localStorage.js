var nodes = {
	head: document.querySelector('.bgChoice'),    
    btnAdd: document.querySelector('.bgChoice>button'),
    select: document.querySelector('.bgChoice>select'),
    body: document.body,
};

function setColor(key, color){
    window.localStorage.setItem(key, color);
}

function getColor(key){
    return window.localStorage.getItem(key);
}

function render(color, node) {
    node.style.backgroundColor = color;
}

function processResponse(r) {
	if(r.status === 200){
		return r.text()
	}else{
		throw new Error(`Error: ${r.status}`)
	}
}

window.onload = function (e) {
    if(getColor('color')){
       render(getColor('color'), nodes.body);
    }
}

nodes.btnAdd.addEventListener('click', function (e) {
    let selectColor = nodes.select.options[nodes.select.selectedIndex].value;
    let key = 'color';
    setColor(key, selectColor);
    let color = getColor(key);
    render(color, nodes.body);
});
