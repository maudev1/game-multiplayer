class Other {

    constructor(space, color, posix) {

        this.rect = new Konva.Rect({
            x: space.width / posix.width,
            y: space.height / posix.height,
            width: 20,
            height: 40,
            fill: color,
            stroke: color,
            strokeWidth: 1
        });


        return this.rect

    }

    move(key) {
        let frames = 2;
        var x = this.rect.x();
        var y = this.rect.y();

        if (key === 'ArrowLeft') {
            this.rect.x(x - frames);
        }
        else if (key === 'ArrowRight') {
            this.rect.x(x + frames);
        }
        else if (key === 'ArrowUp') {
            this.rect.y(y - frames);
        }
        else if (key === 'ArrowDown') {
            this.rect.y(y + frames);
        }

    }



}