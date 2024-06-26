console.log('------makeLine--------');
function makeLine(size)
{
    let hash = '';

    for(let i = 0; i<size; i++){
        hash += '#';
    }

    return hash;
}
console.log(makeLine(5));

console.log('------makeSquare--------');
function makeSquare(size)
{
    let square = '';

    for(let i = 0; i<size; i++){
        if(i != size-1){
            square += (makeLine(size) + '\n');
        }
        else square += (makeLine(size));
        
    }
    return square;
}
console.log(makeSquare(5));

console.log('------makeRectangle--------');
function makeRectangle(width, height)
{
    let rectangle = '';

    for(let i = 0; i<height; i++){
        if(i != height-1){
        rectangle += (makeLine(width) + '\n');
        }
        else rectangle += makeLine(width);
    }
    return rectangle;
}
console.log(makeRectangle(5, 3));

console.log('------makeDownwardStairs--------');
function makeDownwardStairs(height)
{
    let stairs = '';

    for(let i = 0; i<height; i++){
        if(i != height-1){
            stairs += (makeLine(i+1) + '\n');
        }
        else stairs += (makeLine(i+1));
        
    }
    return stairs;
}
console.log(makeDownwardStairs(5));

console.log('------makeSpaceLine--------');
function makeSpaceLine(numSpaces, numChars)
{
    let combinedLine = '';
    let line = '';

    for(let i = 0; i<numSpaces; i++){
        line += ' ';
    }
    combinedLine+=line;
    combinedLine+=makeLine(numChars);
    combinedLine+=line;
    
    return combinedLine;
}
console.log(makeSpaceLine(3, 5));

console.log('------makeIsoscelesTriangle--------');
function makeIsoscelesTriangle(height)
{
    let iso = '';
    let count = 1;
    let temp = height-1;

    for(let i = 0; i<height; i++){
        if(i != height-1){
            iso += (makeSpaceLine(temp,count) + '\n');
        }
        else iso += (makeSpaceLine(temp,count));
        temp--;   
        count+=2;
    }
    return iso;
}
console.log(makeIsoscelesTriangle(5));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

console.log('------makeDiamond--------');
function makeDiamond(height)
{
    let diamond = '';
    let triangle = '';
    triangle += makeIsoscelesTriangle(height);
    diamond+= triangle;
    diamond+= ('\n' + reverse(triangle));

    return diamond;
}
console.log(makeDiamond(5));