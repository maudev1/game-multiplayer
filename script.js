class Pixel {

    constructor() {
        this.stage = new Konva.Stage({
            container: 'container',   // id of container <div>
            width: 500,
            height: 500
        });

        this.layer = new Konva.Layer();

        this.circle = new Konva.Circle({
            x: this.stage.width() - 2,
            y: this.stage.height() / 2,
            radius: 1,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 1
        });

        this.others();

        this.layer.add(this.circle);
        this.layer.add(this.other);

        this.stage.add(this.layer);
        this.layer.draw();

    }

    others(){

        this.other = new Konva.Circle({
            x: this.stage.width() - 2,
            y: this.stage.height() - 2,
            radius: 1,
            fill: 'gray',
            stroke: 'gray',
            strokeWidth: 1
        });
        
    }

    move(key) {
        var x = this.circle.x();
        var y = this.circle.y();

        if (key === 'ArrowLeft') {
            this.circle.x(x - 1);
        }
        else if (key === 'ArrowRight') {
            this.circle.x(x + 1);
        }
        else if (key === 'ArrowUp') {
            this.circle.y(y - 1);
        }
        else if (key === 'ArrowDown') {
            this.circle.y(y + 1);
        }

        this.pac();

        this.layer.batchDraw();
    }

    pac(){

        let circle = this.circle
        let other  = this.other

        if(circle.x() == other.x()){

            if(circle.y() == other.y()){

                this.circle.strokeWidth(5)

            }

        }
    }


}