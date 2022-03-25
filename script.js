function fizbuzz() {
    //store value that is printed to console
    var printVal = "";
    //for loop declares counting variable. loops count from 1-100.
    for(var count=1;count<101; count++){
        //check if current value stored in count is multiple of 3
        if(count%3==0&&count%5!=0){
            printVal = "fizz";
        }
        else if(count%5==0&&count%3!=0){
            printVal="Buzz";
        }
        else if (count%3==0&&count%5==0) {
            printVal="FizzBuzz";
        }
        else{
            printVal=count;
        }
        console.log(printVal);
    }
}

fizbuzz();