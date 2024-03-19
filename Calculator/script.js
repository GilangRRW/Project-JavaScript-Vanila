// button


const button = document.querySelectorAll('.calculator__functions button');
const equal = document.querySelector('.equal');
const result = document.querySelector('.result');
const recent = document.querySelector('.recent');
const btnNumber = document.querySelectorAll('.number');

// calculator function 


// button.forEach(btn => {
//     btn.addEventListener('click', (event)=>{
//         let num = '';
//         if(event.target.classList.contains('number') || event.target.classList.contains('operator'))num += btn.value;   
        
//         if(result.innerText == 0){
//             result.innerText = null;
//         }else if(result.innerText == '*' || result.innerText == '/' || result.innerText == '+')result.innerText = null;
//         const rest = result.innerText += num;
//         result.innerText = rest;
//         if(event.target.value == 'clear'){
//             result.innerText = 0;
//             recent.innerText = 0;
            
//             recent.classList.remove('show');
//         }else if(event.target.value == 'delete'){
//             const sliceRes = result.innerText.slice(0, -1);
//             result.innerText = sliceRes;
//             if(result.innerText == '')result.innerText = 0;
//         }
//         if(event.target.classList.contains('equal')){
//             recent.classList.add('show');
//             recent.innerText = rest;
//             result.innerText = eval(rest);
//         }
//     });
//})

    //refactoring with constractor

    const valPrev = result;
    const valRecent = recent;
    class Calculator{
        constructor(preview, recent){
            this.preview = preview;
            this.recent = recent;
            this.clear();
        }
        clear(){
            this.preview.innerText = 0;
            this.recent.innerText = 0;
            this.recent.classList.remove('show');
        }
        delete(){
            this.preview.innerText = this.preview.innerText.slice(0, -1);
            if(this.preview.innerText == '')this.preview.innerText = 0;
            if(this.preview.innerText == 0){
                this.preview.innerText = this.recent.innerText;
                this.recent.innerText = 0;
                this.recent.classList.remove('show');
            }
        }
        appendDot(dot){
            if(this.preview.innerText == 0){this.preview.innerText = 0 + dot;}else{
                this.preview.innerText = String(this.preview.innerText) + String(dot);
            }
        }
        appendNum(num){
            if(this.preview.innerText == "0.")return this.preview.innerText = this.preview.innerText + String(num);
            if(this.preview.innerText == 0)this.preview.innerText = null;
            this.preview.innerText = String(this.preview.innerText) + String(num);
        }
        appendOperator(op){
            let stringOp = String(op);
            const lastChar = this.preview.innerText[this.preview.innerText.length - 1];
            if(lastChar == stringOp){
                const newPrev = this.preview.innerHTML.slice(0, this.preview.innerText.length -1) + stringOp;
                this.preview.innerText = newPrev;
            }else if(this.preview.innerText.length == 0){
                console.log('press the number first');
            }else{
                this.preview.innerText += stringOp;
            }
        }
        calculate(){
            this.recent.classList.add('show');
            this.recent.innerText = this.preview.innerText;
            this.preview.innerText = eval(this.preview.innerText);
            return parseFloat(this.preview.innerText);
        }
        // percentage(perc){
        //     let stringOp = String(perc);
        //     const lastChar = this.preview.innerText[this.preview.innerText.length - 1];
        //     if(lastChar == stringOp){
        //         const newPrev = this.preview.innerHTML.slice(0, this.preview.innerText.length -1) + stringOp;
        //         this.preview.innerText = newPrev;
        //     }else if(this.preview.innerText.length == 0){
        //         console.log('press the number first');
        //     }else{
        //         this.preview.innerText += parseFloat(this.preview.innerText) / 100;
        //     }
        // }
    }

    const calculator = new Calculator(valPrev, valRecent);

    window.addEventListener('click', (e)=>{
        if(e.target.classList.contains('clear'))calculator.clear();
        if(e.target.classList.contains('delete'))calculator.delete();
        if(e.target.classList.contains('number'))calculator.appendNum(e.target.innerText);
        if(e.target.classList.contains('operator'))calculator.appendOperator(e.target.innerText);
        if(e.target.classList.contains('dot'))calculator.appendDot(String(e.target.innerText));
        if(e.target.classList.contains('equal'))calculator.calculate();
        // if(e.target.classList.contains('percentage'))calculator.percentage(String(e.target.innerText));
    })

    
    
    
    