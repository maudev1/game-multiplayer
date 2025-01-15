class Other extends Stage{

    constructor(color, posix) {

        super();

        this.rect = new Konva.Rect({
            x: super.getSize.width  / posix.width,
            y: super.getSize.height / posix.height,
            width: 20,
            height: 40,
            fill:   color,
            stroke: color,
            strokeWidth: 1
        });

    
        super.spaw(this.rect)

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