function width(grid){
	return grid[0].length
}

function height(grid){
	return grid.length
}

function isInside(grid, position) {
	let w = width(grid);
	let h = height(grid);

	if (position.x < 0 || position.y < 0) {
		return false;
	}

	return h > position.y && w > position.x;
}
	
function swap(grid,p,q){
    console.log(grid);
    
    let temp= grid[q.y][q.x];
    
    grid[q.y][q.x]= grid[p.y][p.x];
    grid[p.y][p.x]=temp;
    
    

   
}