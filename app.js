new Vue({
    el: '#app',
    data: {
    },
    mounted() {
        this.applicationStart()
    },
    methods: {
        applicationStart() {

            let gt = new Pixel();

            document.addEventListener('keydown', function (e) {
                var key = e.key;

                gt.move(key)

            });


        }


    }

})