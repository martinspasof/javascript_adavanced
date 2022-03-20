// Fix the problem, so that we see in console numbers 1,2,3 instead of NaNs, on each click

// Do not change the object
const counter = {
	currentCount : 0,
	tick(){
		this.currentCount++;
		console.log(this.currentCount);
	}
}

// fix the problem in countdown function
function countdown(times) {
	const delay = 1000;    
	while(times){
        setTimeout(function () {
            counter.tick();
        }, delay * times);
		times--;
	}
}

countdown(3);