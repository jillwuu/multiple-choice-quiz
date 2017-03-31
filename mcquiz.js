var userAnswers = [];
var error = $("#error");
error.hide();
var answers = allAnswers.answers;
var questionCount = answers.length;
var questionStatus = $("#questionNumber");
var questionsList = $(".question");
var questionNumber = 1;
    			
//this function compares the user's answers with the answer array, and return an array that contains the comparisons
    
function compareAnswers(){
    var results = [], flag = false;
    for (i = 0; i < answers.length; i++){
        if (answers[i] == userAnswers[i]){
            flag = true;
        }
        else{
            flag = false;
        }
        results.push(flag);
    }
    return results;
}
    
//event handler for start button
$('.startButton').click(function(){
    $(this).parents('.questionContainer').fadeOut(500, function(){
        $(this).next().fadeIn(500);
    });
    return false;  // this exits out of the function
});
//event handler for next button
$('.prevButton').click(function(){
    error.hide(); // hides the error message
    $(this).parents('.questionContainer').fadeOut(500, function(){
        $(this).prev().fadeIn(500)
    });
        
    questionNumber = questionNumber - 1;
    return false;
});
    
//event handler for next
$('.nextButton').click(function(){
    var test = $(intro).next().children().children().first();
    var check = $(this).parents('.questionContainer').find('input[type=radio]:checked'); 
    var tempResults = []; 
    var clearAnswer1 = document.getElementsByName("answersChoice" + questionNumber);
    for(var i=0;i<clearAnswer1.length;i++){
        if (clearAnswer1[i].checked) {
            tempResults.push(clearAnswer1[i])
        }
    }
        
        
    if (userAnswers.length < questionNumber){
        for (var i = 0, ii = tempResults.length; i < ii; i++ ){
            userAnswers.push(tempResults[i].getAttribute('data-key'));
        }
    }
    else{
        for (var i = 0, ii = tempResults.length; i < ii; i++ ){
            console.log(tempResults[i].getAttribute('data-key'));
            userAnswers.pop();
             userAnswers.push(tempResults[i].getAttribute('data-key'));
        }
    }
        
    if (check.length == 0) {
        error.fadeIn(300);
        return false;
    }
        error.hide(); 
    $(this).parents('.questionContainer').fadeOut(500, function(){
        $(this).next().fadeIn(500)
    });
    questionNumber ++;
    return false;
});
    

$('.retakeButton').click(function(){
    // this resets the array of user answers
    userAnswers = [];
    questionNumber = 1;
    //this resets the radio buttons
        
    var clearAnswer1 = document.getElementsByName("answersChoice1");
    for(var i=0;i<clearAnswer1.length;i++){
        clearAnswer1[i].checked = false;
        clearAnswer1[i].selectedIndex = -1;
    };
        
    var clearAnswer2 = document.getElementsByName("answersChoice2");
    for(var i=0;i<clearAnswer2.length;i++){
        clearAnswer2[i].checked = false;
        clearAnswer2[i].selectedIndex = -1;
    };
        
    var clearAnswer3 = document.getElementsByName("answersChoice3");
    for(var i=0;i<clearAnswer3.length;i++){
        clearAnswer3[i].checked = false;
        clearAnswer3[i].selectedIndex = -1;
    };
    var clearAnswer4 = document.getElementsByName("answersChoice4");
    for(var i=0;i<clearAnswer4.length;i++){
        clearAnswer4[i].checked = false;
        clearAnswer4[i].selectedIndex = -1;
    };
        
    var clearAnswer5 = document.getElementsByName("answersChoice5");
    for(var i=0;i<clearAnswer5.length;i++){
        clearAnswer5[i].checked = false;
        clearAnswer5[i].selectedIndex = -1;
    };
        
    var clearAnswer6 = document.getElementsByName("answersChoice6");
    for(var i=0;i<clearAnswer6.length;i++){
        clearAnswer6[i].checked = false;
        clearAnswer6[i].selectedIndex = -1;
    };
        
    //this redirects the page to the first question
    var intro = $('.questionContainer').first()
    $(this).parents('.questionContainer').fadeOut(500, function(){
        intro.next().fadeIn(500)
    });
    return false;
});
  
//show results
$('.buttonShowResults').click(function(){
        
    var check = $(this).parents('.questionContainer').find('input[type=radio]:checked'); 
    if (check.length == 0) {
        error.fadeIn(300);
        return false;
    }
    //calculate how many answers match the answers array
    var tempResults = []; 
    var clearAnswer1 = document.getElementsByName("answersChoice" + questionNumber);
    for(var i=0;i<clearAnswer1.length;i++){
        if (clearAnswer1[i].checked) {
            tempResults.push(clearAnswer1[i])
        }
    }
        
        
    if (userAnswers.length < questionNumber){
        for (var i = 0, ii = tempResults.length; i < ii; i++ ){
            userAnswers.push(tempResults[i].getAttribute('data-key'));
        }
    }
    else{
        for (var i = 0, ii = tempResults.length; i < ii; i++ ){
            userAnswers.pop();
            userAnswers.push(tempResults[i].getAttribute('data-key'));
        }
    }
        
    var results = compareAnswers(), 
                result = '', 
                answersRight = 0,
                score;
        
    for (var i = 0, ii = results.length; i < ii; i++){
        if (results[i] == true){
            answersRight ++;
        }
    }
    //display correct score
    score = answersRight +  "/" + answers.length;
    result = '<p class="qTitle">' + ' You scored '+score+'! </p>'; 
    document.getElementById("resultsTracker").innerHTML = result;
    $(this).parents('.questionContainer').fadeOut(500, function(){
        $(this).next().fadeIn(500);
    });
    return false;
}); 
    
module.exports = userAnswers;