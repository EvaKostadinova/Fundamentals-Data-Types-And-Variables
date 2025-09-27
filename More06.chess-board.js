function chessBoards(n) {
    let result = '<div class="chessboard">\n';

    for(let row = 0; row < n; row++){
        result += '  <div>\n';

        for(let col = 0; col < n; col++){
            const isBlack = (row + col)% 2 === 0;
            const colorClass = isBlack ? 'black' : 'white';
            result += `    <span class="${colorClass}"></span>\n`;
        }

        result += '  </div>\n';

        }

    result += '</div>';
    return result;
    
    }



console.log(chessBoards(3));
