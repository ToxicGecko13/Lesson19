let memoryArray = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
let memoryValues = [];
let memoryTileIds = [];
let tilesFlipped = 0;

Array.prototype.memoryTileShuffle = function() {
    let i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard() {
    tilesFlipped = 0;
    let output = '';
    memoryArray.memoryTileShuffle();
    for(let i = 0; i < memoryArray.length; i++) {
        output += '<div id="tile_'+i+'" onclick="memoryFlipTile (this,\''+memoryArray[i]+'\')"></div>';
    }
    document.getElementById('MemoryBoard').innerHTML = output;
}
window.addEventListener(onload, newBoard())

function memoryFlipTile(tile,val) {
    if(tile.innerHTML == "" && memoryValues.length < 2) {
        tile.style.background = 'red';
        tile.innerHTML = val;
        if(memoryValues.length == 0) {
            memoryValues.push(val);
            memoryTileIds.push(tile.id);
        } else if(memoryValues.length == 1) {
            memoryValues.push(val);
            memoryTileIds.push(tile.id);
            if(memoryValues[0] == memoryValues[1]) {
                tilesFlipped += 2;
                // Clear both arrays
                memoryValues = [];
                memoryTileIds = [];
                // Check to see if the whole board is cleared
                if(tilesFlipped == memoryArray.length) {
                    alert("Board cleared... generating new board");
                    document.getElementById('MemoryBoard').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back() {
                    // Flip the 2 tiles back over 
                    let tile1 = document.getElementById(memoryTileIds[0]);
                    let tile2 = document.getElementById(memoryTileIds[1]);
                    tile1.style.background = 'url(Img/CardBack.jpg.png) no-repeat';
                    // tile1.style.background
                    tile1.innerHTML = "";
                    tile2.style.background = 'url(Img/CardBack.jpg.png) no-repeat';
                    tile
                    tile2.innerHTML = "";
                    // Clear both arrays 
                    memoryValues = [];
                    memoryTileIds = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
}