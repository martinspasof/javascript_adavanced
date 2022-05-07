var nodes = {
	head: document.querySelector('.bgChoice'),    
    btnAdd: document.querySelector('.bgChoice>button'),
    select: document.querySelector('.bgChoice>select'),
    body: document.body,
};

function setColor(key, color){
    document.cookie = `${key}=${color}`;
}

function getColor(){    
    console.log(document.cookie);
    return document.cookie.replace(/(^color=)(#\w+)$/,'$2');
}

function render(color, node) {
    node.style.backgroundColor = color;
}

window.onload = function (e) {
    if(getColor()){
       render(getColor(), nodes.body);
    }
}

nodes.btnAdd.addEventListener('click', function (e) {
    let selectColor = nodes.select.options[nodes.select.selectedIndex].value;
    let key = 'color';
    setColor(key, selectColor);
    let color = getColor();
    render(color, nodes.body);
});
