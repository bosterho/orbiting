class Planet {
    constructor() {
        this.pos = createVector(random(width*0.25, height*0.75), random(width*0.25, height*0.75))
        this.vel = createVector(random(0, 0.4), random(0, 0.4))
        this.prevPos = this.pos.copy()
    }

    update() {
        for (let sun of suns){
            this.vel.x += (sun.pos.x - this.pos.x) / 10000
            this.vel.y += (sun.pos.y - this.pos.y) / 10000
            this.pos.add(this.vel)
        }
        for (let planet of planets){
            if (planet !== this) {
                this.vel.x += (planet.pos.x - this.pos.x) / 1000000
                this.vel.y += (planet.pos.y - this.pos.y) / 1000000
                this.pos.add(this.vel)
        }
    }
    }

    show() {
        fill(0)
        // circle(this.pos.x, this.pos.y, )
        stroke(255)
        strokeWeight(1)
        line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y)
        this.prevPos = this.pos.copy()
    }
}