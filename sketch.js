let planets = []
let suns = []

function setup() {
  createCanvas(400, 400)
  for (let i = 0; i < 2; i++){
    suns.push(new Sun)
  }

  for (let i = 0; i < 5; i++){
    planets.push(new Planet)
  }
}

function draw() {
  background(20, 30);
  
  for (let sun of suns) {
    sun.update()
    sun.show()
  }

  for (let planet of planets){
    planet.update()
    planet.show()
  }
}
