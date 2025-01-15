class Other {

    constructor(space, color, posix) {

        var char = new Konva.Group({
            x: space.width / 10,
            y: space.height / 10,
            draggable: true,
        });

        let rect = new Konva.Rect({
            width: 20,
            height: 40,
            fill: color,
            stroke: color,
            strokeWidth: 1,

        });

        char.add(rect);

        this.char = char;


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

    get(){
        return this.char;
    }

}