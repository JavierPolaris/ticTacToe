
class Canvas {
    constructor(cellSizeX = 50, cellSizeY = 50) {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.cellSize = {
            x: cellSizeX,
            y: cellSizeY
        };
    }

    drawCell(x, y, color="gray", borderColor="black") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.cellSize.x, y * this.cellSize.y, this.cellSize.x, this.cellSize.y);
        this.ctx.strokeStyle = borderColor;
        this.ctx.strokeRect(x * this.cellSize.x, y * this.cellSize.y, this.cellSize.x, this.cellSize.y);
    }

    drawCellWithText(x, y, text, color="gray", borderColor="black") {
        this.drawCell(x, y, color, borderColor);
        this.ctx.fillStyle = "black";
        this.ctx.font = this.cellSize.x.toString() +"px Arial";
        this.ctx.textAlign="center"; 
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(text, x * this.cellSize.x + this.cellSize.x / 2, y * this.cellSize.y + this.cellSize.y / 2);
    }

    addEventListener(event, callback) {
        this.canvas.addEventListener(event, callback);
    }
    
    coordinatesToCell(x, y) {
        return {
            x: Math.floor(x / this.cellSize.x),
            y: Math.floor(y / this.cellSize.y)
        };
    }
}