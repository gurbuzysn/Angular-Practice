export class Model{
    title;
    items;

    constructor(){
        this.title = "Todo List";
        this.items = [
            new TodoItem("Market Alışverişi yap", true),
            new TodoItem("Spor Salonuna Git", false),
            new TodoItem("Kitap Oku", false),
            new TodoItem("Projeyi Bitir", false),
        ]
    }
}

export class TodoItem{
    description : string;
    status : boolean;

    constructor(value : string){
        this.description = value;
        this.status = false;
    }
}