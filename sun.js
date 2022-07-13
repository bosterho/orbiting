class Sun {
    constructor() {
        this.pos = createVector(width / 2, height / 2)
        this.t = 0
        this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5))
    }

    update() {
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
        this.vel.x += random(-0.002, 0.002)
        this.vel.y += random(-0.002, 0.002)
        if (this.pos.x > width || this.pos.x < 0) {this.vel.x = -this.vel.x}
        if (this.pos.y > height || this.pos.y < 0) {this.vel.y = -this.vel.y}
    }

    show() {
        noStroke()
        fill(color("yellow"))
        circle(this.pos.x, this.pos.y, 10)
    }
}