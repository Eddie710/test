// q1.setAttribute('name', 'quest1')
        // q2.setAttribute('name', 'quest1')
        // q3.setAttribute('name', 'quest1')
        // q4.setAttribute('name', 'quest1')

        // console.log(q1.getAttribute('name'));
        // console.log(q2.getAttribute('name'));
        // console.log(q3.getAttribute('name'));
        // console.log(q4.getAttribute('name'));



//THE QUESTIONS FOR THE TEST

const Question1 = ["What is the Main purpose of CSS in HTML5?", "CSS is used to define content on a page.", "CSS is used to determine style, positioning, and layout of a page.", "None of these", "CSS is used for scripting on an HTML web Page."] //What is the Main purpose of CSS in HTML5? (style pos and layout is correct)



const Question2 =["You want to create a CSS style that will modify the strong tag to apply blue color and add 60% transparency. Which of the following code fragments will do this?","strong { color: #0000ff, 60%; }","strong { color: rgba(0,0,255,60); }","strong { color: rgba(0%,0%,100%,40%); }","strong { color: rgba(0,0,255, 0.40); }"] //You want to create a CSS style that will modify the strong tag to apply blue color and add 60% transparency. Which of the following code fragments will do this? (rgba 225 .40 is correct)

const Question3 =["Which is true about absolute positioning","The element is positioned relative to the upper-left corner of the browser","The element is positioned relative to the upper-left corner of the computer display window","The element can float right or left","The element is positioned relative to its parent element"] //Which is true about absolute positioning (corner of the browser is correct)

const Question4 =["What is the correct syntax for a css comment","<!--- Comment Goes Here -->","// Comment Goes Here","/* Comment Goes Here */","# Comment Goes Here #"] //What is the correct syntax for a css comment (/* */ is correct)

const Question5 =["How does the new Flexible Box Model eliminate the need for using float?","By positioning all objects at the coordinates 0,0","By allowing the browser to position the objects","By positioning objects relative to a parent object","By providing a container positioned by properties assigned"] //How does the new Flexible Box Model eliminate the need for using float? (by properties assigned is correct)

const Question6 =["Which CSS style positions an element relative to the browser window?","position: fixed;","position: static;","position: relative;","position: absolute;"] //Which CSS style positions an element relative to the browser window? (pos fixed is correct)

const Question7 =["What is the purpose of flexbox properties in css","To display an element as a flexbox, allowing the content of a paragraph element to wrap around adjacent images.","To display an element as a flexbox, allowing its size and position to adjust with the size of the viewport.","To display an element as a flexbox, allow it to be moved dynamically to any position on the page with very little additional code.","To display an element as a flexbox, allowing the user to drag the edges of the box in and out to change its size."] //What is the purpose of flexbox properties in css (allow size and position to adjust is correct)

const Question8 =["Which box model establishes content alignment, direction, and orientation?","Fixed Box Model","Parent Box Model","Inheritance Box Model","Flexible Box Model"] //Which box model establishes content alignment, direction, and orientation? (Flexible box model is correct)

const Question9 =["What is the purpose of the 'flex-flow' property?","Flex-flow defines the alignment of child boxes (top, center, bottom) within the flex box.","None of these.","Flex-flow allows the designer to set both the flex-direction and flex-wrap properties with a single line of code.","Flex-flow ONLY determines whether or not the child boxes will wrap to a new line upon running out of space."] //What is the purpose of the "flex-flow" property? (allows designer to set flex direction and wrap properties)

const Question10 =["Which is the correct method to define a block element as a grid?","None of these","grid: true;","show: grid;","display: grid;"] //Which is the correct method to define a block element as a grid? (display grid is correct)


// VARIABLES FOR PAGE NUMBER INNER HTML AND SCORE COUNTER

var page = 0;
var correct = 0


const q = document.getElementById('qTs')
const q1 = document.getElementById('q1') 
const q2 = document.getElementById('q2')
const q3 = document.getElementById('q3')
const q4 = document.getElementById('q4')

const q1Btn = document.getElementById('question1')
const q2Btn = document.getElementById('question2')
const q3Btn = document.getElementById('question3')
const q4Btn = document.getElementById('question4')

const b1 = q1Btn.checked == true
const b2 = q2Btn.checked == true
const b3 = q3Btn.checked == true
const b4 = q4Btn.checked == true

var FN = ["","","","","","","","","","",""];


next();

//FUNCTIONS TO CHANGE PAGE AND QUESTION

function next(){
    console.log(FN)
    page += 1
    PUTQUESTION()
    
// SAME THING BUT FOR THE PREVIOUS BUTTON

}

function prev(){
    page -= 1
    console.log('Page Num', page)

    PUTQUESTION();
}
function addanswer(T){
    for(let i = 1;i<5;i++){
        document.getElementById("question"+i).className = "";
        //.className = "";
    }
FN[page] = T.childNodes[0].innerHTML;
T.className = "CHECKED";
//document.getElementById("FN").childNodes
}



function PUTQUESTION(){
    for(let i = 1;i<5;i++){
        document.getElementById("question"+i).className = "";
        //.className = "";
    }
    if(page<=0){
        page = 1
    }
    else if(page == 1){
  
        document.getElementById('legend').innerText = 'Question 1'
    
        q.innerText = Question1[0]
        q1.innerText = Question1[1]
        q2.innerText = Question1[2]
        q3.innerText = Question1[3]
        q4.innerText = Question1[4]
        
        q1.setAttribute('name', 'quest1')
        q2.setAttribute('name', 'quest1')
        q3.setAttribute('name', 'quest1')
        q4.setAttribute('name', 'quest1')

    
    }
    else if(page == 2){
  
        document.getElementById('legend').innerText = 'Question 2'
    
        q.innerText = Question2[0]
        q1.innerText = Question2[1]
        q2.innerText = Question2[2]
        q3.innerText = Question2[3]
        q4.innerText = Question2[4]
        
    
    }
    else if(page == 3){
  
        document.getElementById('legend').innerText = 'Question 3'
    
        q.innerText = Question3[0]
        q1.innerText = Question3[1]
        q2.innerText = Question3[2]
        q3.innerText = Question3[3]
        q4.innerText = Question3[4]
        
    
    }
    else if(page == 4){
  
        document.getElementById('legend').innerText = 'Question 4'
    
        q.innerText = Question4[0]
        q1.innerText = Question4[1]
        q2.innerText = Question4[2]
        q3.innerText = Question4[3]
        q4.innerText = Question4[4]
        
    
    }
    else if(page == 5){
  
        document.getElementById('legend').innerText = 'Question 5'
    
        q.innerText = Question5[0]
        q1.innerText = Question5[1]
        q2.innerText = Question5[2]
        q3.innerText = Question5[3]
        q4.innerText = Question5[4]
        
    
    }
    else if(page == 6){
  
        document.getElementById('legend').innerText = 'Question 6'
    
        q.innerText = Question6[0]
        q1.innerText = Question6[1]
        q2.innerText = Question6[2]
        q3.innerText = Question6[3]
        q4.innerText = Question6[4]
    
    }
    else if(page == 7){
  
        document.getElementById('legend').innerText = 'Question 7'
    
        q1.innerText = Question7[0]
        q2.innerText = Question7[1]
        q3.innerText = Question7[2]
        q4.innerText = Question7[3]
        
    
    }
    else if(page == 8){
  
        document.getElementById('legend').innerText = 'Question 8'
    
        document.getElementById('legend').innerText = 'Question 8'
    
        q.innerText = Question8[0]
        q1.innerText = Question8[1]
        q2.innerText = Question8[2]
        q3.innerText = Question8[3]
        q4.innerText = Question8[4]
        
    
    }
    else if(page == 9){
  
        document.getElementById('legend').innerText = 'Question 9'
    
        q.innerText = Question9[0]
        q1.innerText = Question9[1]
        q2.innerText = Question9[2]
        q3.innerText = Question9[3]
        q4.innerText = Question9[4]
        
    
    }
    else if(page == 10){
  
        document.getElementById('legend').innerText = 'Question 10'
    
        q.innerText = Question10[0]
        q1.innerText = Question10[1]
        q2.innerText = Question10[2]
        q3.innerText = Question10[3]
        q4.innerText = Question10[4]

        document.getElementById('Submit').style.display="block"

    }
    else if(page>=10){
        page = 10
    }
    console.log(page)
    if(FN[page] != ""){
        for(var i =1;i<5;i++){
            if(document.getElementById("q"+i).innerHTML == FN[page]){
                document.getElementById("q"+i).parentNode.className = "CHECKED";
            }
        }
    }
}


function submit(){
 if(FN[1]==Question1[2]){
    correct+=10
    console.log("1 Was Correct",correct)
 }if(FN[2]==Question2[4]){
    correct+=10
    console.log("2 Was Correct",correct)
 }if(FN[3]==Question3[1]){
    correct+=10
    console.log("3 Was Correct",correct)
 }if(FN[4]==Question4[3]){
    correct+=10
    console.log("4 Was Correct",correct)
 }if(FN[5]==Question5[4]){
    correct+=10
    console.log("5 Was Correct",correct)
 }if(FN[6]==Question6[1]){
    correct+=10
    console.log("6 Was Correct",correct)
 }if(FN[7]==Question7[2]){
    correct+=10
    console.log("7 Was Correct",correct)
 }if(FN[8]==Question8[1]){
    correct+=10
    console.log("8 Was Correct",correct)
 }if(FN[9]==Question9[3]){
    correct+=10
    console.log("9 Was Correct",correct)
 }if(FN[10]==Question10[4]){
    correct+=10
    console.log("10 Was Correct",correct)
    console.log(correct)
 }
 document.getElementById('urScore').innerText = ("Your Score Is, "+ correct+ "/100")
}