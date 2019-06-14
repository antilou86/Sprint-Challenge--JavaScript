// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{ 
    constructor(sides) {
    this.length= sides.length;
    this.width= sides.width;
    this.height= sides.height;
    } 
    // volume method
    volume(){
        return (this.length * this.width * this.height);
    }
    // surface area method
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.length)
    }
};



 /* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 120

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(sides){
        super(sides);
    }
    volume() {
        return Math.pow(this.length, 3)
    }
    surfaceArea() {
        return 6*(this.length*this.length)
    }
}

const cube = new CubeMaker ({
    length: 2,
    width: 2,
    height: 2
});

console.log(cube.volume());
console.log(cube.surfaceArea());