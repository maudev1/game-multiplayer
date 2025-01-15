new Vue({
    el: '#app',
    data: {
    },
    mounted() {
        this.applicationStart()
    },
    methods: {
        applicationStart() {

            let stg = new Stage();
            let space = {width: stg.getSize().width,height: stg.getSize().height}

            let ot = new Other(space, 'gray', { x: 20, y: 12 });

            stg.spaw(ot);

            let pl = new Pixel(space);

            stg.spaw(pl.get());

            document.addEventListener('keydown', function (e) {
                var key = e.key;
                pl.move(key);
                stg.update();

            });


        }


    }

})