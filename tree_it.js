function drawTree(height) {
  var bodyCount = 1,
  	spaceCount = height-2,
  	topTreeHeight = height-1;

  for (var i = 0;i<topTreeHeight;i+=1) {
    console.log(drawTreeRow(spaceCount, bodyCount));
    spaceCount -= 1;
    bodyCount += 2;
  }

  console.log(drawTreeRow(height-2, 1));
}

function drawTreeRow(spaceCount, bodyCount) {
	var ret = "";
	for (var i=0;i<spaceCount;i+=1) {
		ret += " ";
	}
	for (var y=0;y<bodyCount;y+=1) {
		ret += "#";
	}
	return ret;
}

drawTree(6);
drawTree(9);
