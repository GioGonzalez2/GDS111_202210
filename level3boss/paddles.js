// option controls for player (a , d)  or (right and left arrow keys)...
var a = false;
var d = false;
var rght = false;
var lft = false;
//Event Listeners...
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions...
function press(e)
{
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
	if(e.keyCode == 39)
	{
		rght = true;
	}
	if(e.keyCode == 37)
	{
		lft = true;
	}
}
function release(e)
{
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
	if(e.keyCode == 39)
	{
		rght = false;
	}
	if(e.keyCode == 37)
	{
		lft = false;
	}
}








