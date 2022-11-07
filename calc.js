const calc = document.querySelector('.calculation');
var result = document.querySelector('#result');
var prev = document.querySelector('#prev');
var answer = '';
calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('but')) return;
    let value = event.target.innerText;
    switch(value){
        case 'C':
            result.innerText = '';
            answer = '';
            prev.innerText='';
            break;  
        case '÷':
            result.innerText += value;
            answer += '/';
            break
        case '×':
            result.innerText += value;
            answer += '*';
            break
        case '√':
            result.innerText += '√'+'(';
            answer += 'Math.sqrt(';
            break
        case '^':
            result.innerText += '^(';
            answer += '**(';
            break
        case 'π':
            result.innerText += 'π';
            answer += 'Math.PI';
            break
        case '%':
            result.innerText += '%';
            answer += '*(1/100)';
            break
        case '()':
            if ((answer.split(')').join(', ').split('(').join(', ').split(', ').length-1) % 2 == 0){
                answer += '(';
                result.innerText +='(';
            }else{
                answer += ')';
                result.innerText +=')';
            }
            break
        case '|':
            if (result.innerText.length > 1){
                result.innerText = result.innerText.slice(0, result.innerText.length-1);
                answer = answer.slice(0, answer.length-1);
            } 
            else {
                result.innerText = '';
                answer = '';
            }
            break 
        case '=':
            try{
                prev.innerText = result.innerText;
                result.innerText = eval(answer);
                answer = eval(answer)
            } catch(r){
                result.innerText = 'error';
                answer = ''
            }
            
            break  
        default: 
            result.innerText += value;
            answer +=  value;    
            break
    }
});