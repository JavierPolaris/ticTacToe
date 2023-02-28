class Cell{
    #x
    #y
    #symbol
    #color
    constructor(x,y,symbol,color = "grey"){
       this.#x = x
       this.#y = y
       this.#symbol = symbol 
       this.#color = color
    }
    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }
    getSymbol(){
        return this.#symbol
    }
    setSymbol(symbol){
        this.#symbol = symbol
    }
    getColor(){
        return this.#color;
    }
    setColor(color){
        this.#color = color
    }
    
}

class Tablero{
    constructor(cellsX,cellsY,canvas){
        this.cellsX = cellsX
        this.cellsY = cellsY
        this.canvas = canvas
        this.initialize();
        this.canvas.addEventListener("click",this.onClick.bind(this))
    }
    initialize(){
        this.cells = []
        for (let i = 0; i < this.cellsX; i++) {
            this.cells.push([])
            for (let j = 0; j < this.cellsY; j++) {
                let celda = new Cell(i,j,"")
                this.cells[i].push(celda)
            }
            
        }
    }
    drawTablero(){
        for (let i = 0; i < this.cellsX; i++) {
            for(let j = 0; j < this.cellsY; j++){
                this.drawCell(i,j)
            }
            
        }

    }
    drawCell(x,y){
        let celdaActual = this.cells[x][y]

        let color = celdaActual.getColor()
        let symbol = celdaActual.getSymbol()
        if(symbol != ""){
            this.canvas.drawCellWithText(x,y,symbol,color)
        }
        else {
        this.canvas.drawCell(x,y,color)
    }
}
setSymbol(x,y,symbol){
    this.cells[x][y].setSymbol(symbol)
    this.cells[x][y].setColor("#aaa")
}
onClick(event){
    let position = this.canvas.coordinatesToCell(event.offsetX, event.offsetY)
    this.setSymbol(position.x,position.y,"X")
    this.drawCell(position.x,position.y)
}

}