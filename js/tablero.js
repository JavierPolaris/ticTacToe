
class Cell {
    #x;
    #y;
    #symbol;
    #color;
    constructor(x,y,symbol,color="grey") {
        this.#x = x;
        this.#y = y;
        this.#symbol = symbol;
        this.#color = color;
    }
    getX() {
        return this.#x;
    }
    getY() {
        return this.#y;
    }
    getSymbol(){
        return this.#symbol;
    }
    setSymbol(symbol) {
        this.#symbol = symbol;
    }
    getColor(){
        return this.#color;
    }
    setColor(color){
        this.#color = color;
    }
}

class Tablero {
    constructor(cellsX,cellsY,canvas,symbols=["X","O"]) {
        this.cellsX = cellsX;
        this.cellsY = cellsY;
        this.canvas = canvas;
        this.symbols = symbols;
        this.turn = 0;
        this.countToWin = 3;
        this.initialize();
        this.canvas.addEventListener("click", this.onClick.bind(this));
    }
    
    initialize() {
        this.cells = [];
        for (let i = 0; i < this.cellsX; i++) {
            this.cells.push([]);
            for (let j = 0; j < this.cellsY; j++) {
                let celda = new Cell(i,j,"");
                this.cells[i].push(celda);
            }
        }
        this.drawTablero();
    }

    drawTablero(){
        for (let i = 0; i < this.cellsX; i++) {
            for (let j = 0; j < this.cellsY; j++) {
                this.drawCell(i,j);
            }
        }
    }
    drawCell(x,y) {
        let celdaActual = this.cells[x][y];
        let color = celdaActual.getColor();
        let symbol = celdaActual.getSymbol();
        if (symbol != ""){
            this.canvas.drawCellWithText(x,y,symbol,color)
        }
        else {
            this.canvas.drawCell(x,y,color);
        }

    }
    setSymbol(x,y,symbol) {
        this.cells[x][y].setSymbol(symbol);
        this.cells[x][y].setColor("#aaa");
    }

    onClick(event) {
        let position = this.canvas.coordinatesToCell(event.offsetX, event.offsetY);
        
        if (this.cells[position.x][position.y].getSymbol() === "" ){
            this.setSymbol(position.x,position.y,this.symbols[this.turn]);
            this.drawCell(position.x,position.y);
            this.nextTurn();
            this.checkWinner(position.x,position.y);
        }
    }
    nextTurn() {
        this.turn++;
        if (this.turn >= this.symbols.length ){
            this.turn = 0;
        }
    }

    checkWinner(x,y){
        let result = this.checkRow(y);
        if (result != ""){
            alert("ganador: "+result);
            this.initialize();
        }
        result = this.checkColumn(x);
        if (result != ""){
            alert("ganador: "+result);
            this.initialize();
        }

    }
    checkRow(y) {
        let symbol = "";
        let counter = 0;
        for (let i = 0; i < this.cellsX;i++) {
            let currentSymbol = this.cells[i][y].getSymbol();
            if (currentSymbol != ""){
                if (currentSymbol === symbol) {
                    counter++;
                }
                else {
                    symbol = currentSymbol;
                    counter = 1;
                }
            }
            if(counter >= this.countToWin) {
                return symbol;
            }
        }
        return "";
    }
    
    checkColumn(x) {
        let symbol = "";
        let counter = 0;
        for (let j = 0; j < this.cellsY;j++) {
            let currentSymbol = this.cells[x][j].getSymbol();
            if (currentSymbol != ""){
                if (currentSymbol === symbol) {
                    counter++;
                }
                else {
                    symbol = currentSymbol;
                    counter = 1;
                }
            }
            if(counter >= this.countToWin) {
                return symbol;
            }
        }
        return "";
    }


}