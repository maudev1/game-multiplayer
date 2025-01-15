class Pixel {

    constructor(space) {

        var char = new Konva.Group({
            x: space.width / 2,
            y: space.height / 2,
        });

        let rect = new Konva.Rect({
            width: 20,
            height: 40,
            fill: '#8e908c',
            stroke: '#8e908c',
            strokeWidth: 1
        });

        char.add(rect);

        let eyes = new Konva.Rect({
            x: 2,
            y: 4,
            width: 4,
            height: 1,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 1
        });


        char.add(eyes);

        this.char = char;


    }

    move(key) {
        let frames = 2;
        var x = this.char.x();
        var y = this.char.y();

        if (key === 'ArrowLeft') {
            this.char.x(x - frames);
        }
        else if (key === 'ArrowRight') {
            this.char.x(x + frames);
        }
        else if (key === 'ArrowUp') {
            this.char.y(y - frames);
        }
        else if (key === 'ArrowDown') {
            this.char.y(y + frames);
        }

    }

    get() {
        return this.char;
    }



}