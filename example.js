class User{

    constructor(){
        localStorage.setItem('user',JSON.stringify({ id: 1, name : 'mauricio'}))
    }

    get(ID){

        let data = localStorage.getItem('user') ?? null;

        if(data){
            let {name, id} = JSON.parse(data);
            if(id === ID){
                return {name, id};
            }
        }

    }


}
