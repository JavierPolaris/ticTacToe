let canvas = new Canvas(230,230)

let tablero = new Tablero(3,3,canvas)
tablero.setSymbol(0,0,"")
tablero.drawTablero()

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(j == 1){
//             canvas.drawCell(i,j,"green")
//         }
//         else{
//             canvas.drawCell(i,j,"red")
//         }

//     }
    
// }
