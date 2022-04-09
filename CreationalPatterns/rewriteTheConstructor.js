function Car(name, speed) {
    // cache the instance
    var instance = this;
  
    // set instance properties
    this.name = name || 'Car';
    this.speed = speed || 180;
  
    // rewrite the constructor
    // Car = function(){
    //   return instance;
    // };

    if (typeof Car.instance === 'object') {
        return Car.instance;
    }
    
    Car.instance = instance;
  }
  
  // lets try to create 2 instances
  var car1 = new Car('car1', 200);
  var car2 = new Car('car2', 300);
  
  // test if we have ONLY ONE instance:
  console.log(car1 === car2);