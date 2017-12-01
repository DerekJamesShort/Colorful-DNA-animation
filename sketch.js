//Source: https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/
//with changes
let phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

function setup()
{
	let canvas = createCanvas(400, 400);//width, height
	//Move the canvas so it's inside <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	noStroke();
	phase = 0;
	speed = 0.04;
	maxCircleSize = 20;
	numRows = 10;
	numCols = 16;
	numStrands = 2;
	colorA = color(255, 0, 0); //red
	colorB = color(79, 121, 192); //blue
}

function draw()
{
	background(0, 0, 0); //black
	for(let strand = 0; strand < numStrands; strand += 1)
	{
		for(let col = 0; col < numCols; col += 1)
		{
			for(let row = 0; row < numRows; row += 1)
			{
				let strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
				let colOffset = map(col, 0, numCols, 0, TWO_PI);
				let x = map(col, 0, numCols, 20, width - 20); //50
				let y = height/3 + row * 10 + sin(strandPhase + colOffset) * 50;
				let sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
				let circleSize = sizeOffset * maxCircleSize;
				fill(lerpColor(colorA, colorB, row / numRows));
				ellipse(x, y, circleSize, circleSize);
			}
		}
	}
	phase = frameCount * speed;
}