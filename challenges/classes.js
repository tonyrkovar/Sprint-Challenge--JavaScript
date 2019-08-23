// // 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMade{
    constructor(cuboidAtt){
        this.length = cuboidAtt.length;
        this.width = cuboidAtt.width;
        this.height = cuboidAtt.height
    }
    volume(){
        return cuboid.length * cuboid.width * cuboid.height;
    }
    surfaceArea(){
        return 2 * (cuboid.length * cuboid.width + cuboid.length * cuboid.height + cuboid.width * cuboid.height);
    }
}

  const cube = new CuboidMade({
    length: 4,
    width: 5,
    height: 5
  });


// // Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130

// // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.