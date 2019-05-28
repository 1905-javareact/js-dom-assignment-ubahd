// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA(){
    let allelements = document.querySelectorAll('*')
    let arrayofallelements = [...allelements]
    let result = arrayofallelements.find(x => {
        return x.innerText == 'USA'
    })
    return result.innerText
}
getUSA()

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){

    let allelements = document.querySelectorAll('tr')
    
    for (let i = 0; i < allelements.length; i++) {
        let rec = allelements[i].cells
        if(rec[1].innerHTML == "Sales"){
           console.log(rec[0].innerHTML)
        }
   }
}
getPeopleInSales()


// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){
    let anchortag = document.querySelectorAll('a');
        for (let i = 0; i < anchortag.length; i++) {
        if(anchortag[i].getElementsByTagName('span').length == 1){
            console.log(anchortag[i].getElementsByTagName('span')[0].innerHTML)
        }
   }
}

getAnchorChildren()
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies(){
    let allelements = document.querySelectorAll('[name="skills"]')
    let arrayofallelements = [...allelements]
    let result = arrayofallelements.forEach(x => {
        if (x.selected){
            console.log(x.innerText)
        }
    })
        return result
}
getHobbies()

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 
function getCustomAttribute(){
    let allelements = document.querySelectorAll('[data-customAttr]')
    let arrayofallelements = [...allelements]
    let result = arrayofallelements.forEach(x => {
        console.log(x.innerText)
            console.log(x)
    })
    return result
}
getCustomAttribute()

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

let allelements = document.querySelectorAll('[class="nums"]')
let arrayofallelements = [...allelements]
   arrayofallelements[0].onchange = function() {
        sum()
    }
    arrayofallelements[1].onchange = function() {
        sum()
    }

let val3
function sum() {
    let val1 = document.getElementById('num1').value
    let val2 = document.getElementById('num2').value
    val3 = parseInt(val1) + parseInt(val2)
    document.getElementById('sum').innerText = val3
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let alles = document.querySelectorAll('[name="skills"]')
let arrayofes = [...alles]
   arrayofes[0].onchange = function() {
        alert('Are you sure CSS is one of your skills?')
    }



// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function getcurrenttime(){
let time = document.getElementById("currentTime")
let interval = setInterval(() => {
    let nd = new Date()
    time.innerHTML = nd.toLocaleTimeString()
}, 1000)
return interval
}

getcurrenttime()

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
