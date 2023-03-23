let input = document.getElementById('input');
// let button = document.getElementsByClassName('button');
// console.log(button); 
let queryString = "";

function registerInput(symbol){
    if(symbol === '='){
        getQueryResult();
    }
    else{
        queryString = queryString.concat(symbol);
        input.innerText=queryString;
    }
}

function getQueryResult(){
    console.log(queryString);
    
    let queryResult = '';
    if(queryString === ''){
        queryResult='0';
    }
    else{

        try{
            queryResult = eval(queryString);
            queryResult = '='.concat(queryResult);
        }catch (e) {
            if (e instanceof SyntaxError) {
                queryResult='Invalid Math Expression';
            }
        }
        
    }
    
    console.log(queryResult);
    input.innerText=queryResult;
    queryString='';
}