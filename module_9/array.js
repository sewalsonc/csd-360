let ranArr = [];
function randomArrays(){
    
    // This function contains two functions within it.  The first one clears 
    //    the previous array, generates a new random array of positive, 
    //    zero and negative numbers.  The second function displays the random 
    //    array.
    //    
    ranArr = new Array();
    function getArray(){
        // This function generates and array of 100 numbers between 
        //    -40 and +40
        let sign = 1;
        let tmp = 0;
        for(let i = 0; i < 100; i++){
            tmp = (Math.round(Math.random() * 40));
            //  Next part determines whether the number will be - or +
            sign = (Math.round(Math.random()) * 2 - 1)
            ranArr.push(tmp * sign);
        }
        return ranArr;
    }

    function prntArr(array){
        // This function prints the array
        numbers = "";
        for(let i = 0; i < array.length; i++){
            if(i == (array.length - 1)){
                numbers += String(array[i]);
            }else{
                numbers += (String(array[i]) + ", ");
            }
        }
        document.getElementById("printer").innerHTML = "Here is the random array: <br />";
        document.getElementById("printer").innerHTML += ("<br />" + numbers + "<br />");
    }


    let array1 = getArray();
    prntArr(array1);
                    
}

function getNums(){
    // This function also contains two inner functions.  The first one 
    //    takes the array above and counts the number of 
    //    positive, zero and negative numbers and returns the results.
    //    The second function clears and previous results then prints 
    //    the new results.  
        
    function counter(){
        let positives = 0;
        let zeros = 0;
        let negatives = 0;
        for(let i = 0; i < ranArr.length; i++){
            if(ranArr[i] > 0){
                positives += 1;
            }else if(ranArr[i] == 0){
                zeros += 1;
            }else{
                negatives += 1;
            }
        }
        return [positives, zeros, negatives];
    }

    function printCounter(counterArray){
        document.getElementById("counter").innerHTML = ("");    
        document.getElementById("counter").innerHTML += ("<br />There are " + counterArray[0] +
            " positive number(s), " + counterArray[1] + " zero(s) and, " + counterArray[2] + 
            " negative number(s) in the array.")
    }
    let array1 = counter();

    printCounter(counter(array1));
}