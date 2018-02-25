function processor(commands) {

    let listProcessor = (() => {
    let list = [];

    function add(string) {

        list.push(string);
    }
    function remove(string) {

        list = list.filter(s => s !== string);
    }
    function print() {

        console.log(list.toString());
    }

    return{
        add,
        remove,
        print,
    }
})();

    for(let command of commands){

        let args = command.split(' ');
        listProcessor[args[0]](args[1]);
    }

}