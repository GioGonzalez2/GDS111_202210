//rps part 1 javascript -- W6D1 class

//create an Array that will store the images being used 
//ARRAY: it's just like a variable (so it's a data storage device) BUT it can contain more than one value

var pics = new Array() //creates an empty Array

//assign values to array -- "population"
//[#] denotes index --> it's like a house number and array is the street name; array name + index gives access to the indiv value
pics[0] = "images/rock.jpg"
pics[1] = "images/paper.jpg"
pics[2] = "images/scissors.jpg"

var pics2 = new Array()

pics2[0] = "images/rock2.jpg"
pics2[1] = "images/paper2.jpg"
pics2[2] = "images/scissors2.jpg"

//arrays that store the player & computer options (one array for each)
//Player ID - pId
var pId = new Array("rock_p", "paper_p", "scissors_p")
//pId = "paper_p"
//Computer ID - cId
var cId = new Array("rock_c", "paper_c", "scissors_c")

//create a function that will swap the regular images with the highlighted ones (series 2 pics)
function swap(id, image){

    //access the image elements by ID from the HTML document
    document.getElementById(id).src = image

}

//play function
function play(id) {

    //setting up the stored image paths in JS to match the HTML ones
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])

    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the game choices to variables (players & comp)
    var p_choice = id

    //randomize the computer's choice!
    var c_choice = Math.floor(Math.random() * 2.9)

    //swap the starting images with the highlighted ones
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])

    //SWITCH TIME - switch statements give us the option to determine a set of code to run based on a predetermined case value 

    