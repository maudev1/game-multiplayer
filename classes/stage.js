class Stage {

    constructor() {
        this.stage = new Konva.Stage({
            container: 'container',   // id of container <div>
            width: 500,
            height: 500
        });

        this.layer = new Konva.Layer();

        this.layer.draw();

    }

    spaw(object){

        this.layer.add(object);
        this.stage.add(this.layer);
        this.layer.draw();

    }

    getSize(){
        return {
            width: this.stage.width(),
            height: this.stage.height()
        }
    }

    update(){
        this.layer.batchDraw();
    }


}