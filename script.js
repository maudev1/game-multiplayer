class Pixel {

    constructor() {
        this.stage = new Konva.Stage({
            container: 'container',   // id of container <div>
            width: 500,
            height: 500
        });

        this.layer = new Konva.Layer();

        this.size = 1;

        this.rect = new Konva.Rect({
            x: this.stage.width()  / 2,
            y: this.stage.height() / 2,
            // radius: this.size,

            width: 20,
            height: 40,
            fill:   '#ffdba2',
            stroke: '#ffdba2',
            strokeWidth: 1
        });

        this.layer.add(this.rect);

        this.stage.add(this.layer);
        this.layer.draw();

    }

    others(){

        this.other = new Konva.Circle({
            x: this.stage.width()  / 2,
            y: this.stage.height() / 2,
            radius: 1,
            fill: 'gray',
            stroke: 'gray',
            strokeWidth: 1
        });
        
    }

    move(key) {
        let fps = 2;
        var x = this.rect.x();
        var y = this.rect.y();

        if (key === 'ArrowLeft') {
            this.rect.x(x - fps);
        }
        else if (key === 'ArrowRight') {
            this.rect.x(x + fps);
        }
        else if (key === 'ArrowUp') {
            this.rect.y(y - fps);
        }
        else if (key === 'ArrowDown') {
            this.rect.y(y + fps);
        }

        this.pac();

        this.layer.batchDraw();
    }

    pac(){

        // let circle = this.circle
        // let other  = this.other

        // if(circle.x() == other.x()){

        //     if(circle.y() == other.y()){

        //         this.size = this.size + 1;

        //         this.circle.radius = this.size;

        //         // console.log(this.size)

        //     }

        // }
    }


}