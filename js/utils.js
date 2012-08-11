function Coord(x, y) {
    this.to_polar = function() {
        var r = Math.sqrt(this.x^2 + this.y^2);
        var a = Math.atan(this.y / this.x);
        return new Polar(r, a);
    };

    this.x = x;
    this.y = y;
};

function Polar(r, a, normalize) {
    this.to_coord = function() {
        var x = this.r * Math.cos(this.a);
        var y = this.r * Math.sin(this.a);
        return new Coord(x, y);
    };

    this.normalize = function() {
        this.a %= 2*Math.PI;
    };

    this.r = r;
    this.a = a;

    if (normalize)
        this.normalize();
};
