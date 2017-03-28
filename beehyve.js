//document.getElementById("quiz").innerHTML = "New text!";

//self executing anonymous function
$(function(){
    var error = $("#error");
    error.hide();
    var answers = allAnswers.answers;
    var userAnswers = [];
    var questionCount = answers.length;
    var questionStatus = $("#questionNumber");
    var questionsList = $(".question");
    var questionNumber = 1;
    
    //this function compares the user's answers with the answer array, and return an array that contains the comparisons
    
    //console.log(questionCount);
    
    
    function roundReloaded(num, dec) {
				var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
				return result;
			}
			
    function compareAnswers(){
        var results = [], flag = false;
        for (i = 0; i < answers.length; i++){
            //console.log(answers + "u");
            //console.log(userAnswers + "b");
            if (answers[i] == userAnswers[i]){
                flag = true;
            }
            else{
                flag = false;
            }
            results.push(flag);
            //console.log(results);
        }
        //console.log(results + "a");
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
        //console.log(test);
        
        var check = $(this).parents('.questionContainer').find('input[type=radio]:checked'); 
        //console.log(check);
        //console.log(check.length + " sos");
        //var tempResults = $('input[type=radio]:checked');
        
        //console.log(typeof(testTempResults) + "type");
        var tempResults = []; 
        //console.log(tempResults.length + " length");
        //console.log(questionNumber + "questionNumber");
        var clearAnswer1 = document.getElementsByName("answersChoice" + questionNumber);
        //console.log(clearAnswer1.length + "clearAnswer1.length");
        for(var i=0;i<clearAnswer1.length;i++){
            if (clearAnswer1[i].checked) {
                tempResults.push(clearAnswer1[i])
                //console.log(tempResults.length + "tempResults.length")
            }
            //return radioButtons[i].value;
        }
        
        
        if (userAnswers.length < questionNumber){
            //console.log("sos")
            //console.log(tempResults.length);
            for (var i = 0, ii = tempResults.length; i < ii; i++ ){
                //console.log(tempResults[i].getAttribute('data-key'));
                //console.log(tempResults.length);
                userAnswers.push(tempResults[i].getAttribute('data-key'));
                //console.log(userAnswers + "userAnswers");
            }
        }
        else{
            for (var i = 0, ii = tempResults.length; i < ii; i++ ){
                console.log(tempResults[i].getAttribute('data-key'));
                userAnswers.pop();
                userAnswers.push(tempResults[i].getAttribute('data-key'));
                //console.log(userAnswers + "pop");
            }
        }
        
        //console.log(userAnswers);
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
    
    $('.buttonShowResults').click(function(){
        
        var check = $(this).parents('.questionContainer').find('input[type=radio]:checked'); 
        if (check.length == 0) {
            error.fadeIn(300);
            return false;
        }
        //var tempResults = $('input[type=radio]:checked'); 
        //console.log(tempResults.length + " length");
        //for (var i = 0, ii = tempResults.length; i < ii; i++ ){
        //    userAnswers.push(tempResults[i].getAttribute('data-key'));
        //}
        var tempResults = []; 
        var clearAnswer1 = document.getElementsByName("answersChoice" + questionNumber);
        for(var i=0;i<clearAnswer1.length;i++){
            if (clearAnswer1[i].checked) {
                tempResults.push(clearAnswer1[i])
                //console.log(tempResults)
            }
            //return radioButtons[i].value;
        }
        
        
        if (userAnswers.length < questionNumber){
            for (var i = 0, ii = tempResults.length; i < ii; i++ ){
                //console.log(tempResults[i].getAttribute('data-key'));
                //console.log(tempResults.length);
                userAnswers.push(tempResults[i].getAttribute('data-key'));
                //console.log(userAnswers + "hello");
            }
        }
        else{
            for (var i = 0, ii = tempResults.length; i < ii; i++ ){
                //console.log(tempResults[i].getAttribute('data-key'));
                userAnswers.pop();
                userAnswers.push(tempResults[i].getAttribute('data-key'));
                //console.log(userAnswers + "pop");
            }
        }
        
        //console.log(userAnswers);
        var results = compareAnswers(), 
                        result = '', 
                        answersRight = 0,
                        score;
        
        //console.log(results);
        
        for (var i = 0, ii = results.length; i < ii; i++){
            if (results[i] == true){
                answersRight ++;
            }
        }
        
        score = answersRight +  "/" + answers.length;
        result = '<p class="qTitle">' + ' You scored '+score+'! </p>'; 
        document.getElementById("resultsTracker").innerHTML = result;
        //$('resultsTracker').html(result).show();
            $(this).parents('.questionContainer').fadeOut(500, function(){
                    $(this).next().fadeIn(500);
                });
					 return false;
    }); 
    
    //figure out unchecking issue
    //add comments
    
}); 