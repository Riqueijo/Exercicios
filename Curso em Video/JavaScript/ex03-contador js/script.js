function contar(){
    let begin = window.document.getElementById("txti")
    let end = window.document.getElementById("txtf")
    let step = window.document.getElementById("txtp")
    let res = document.querySelector('div#res')
    if (begin.value == 0 || end.value == 0 || step.value == 0){
        alert('erro' + begin.value + end.value + step.value)
        res.innerHTML= 'contando... '
    } else {
        let b = Number(begin.value)
        let e = Number(end.value)
        let s = Number(step.value)
        if (b < e){
            for (let c = b; c <= e; c += s){
            res.innerHTML += ` \u{1F449} ${c} `
            }
        } else {
            for(let c = b; c >= e; c -= s){
                res.innerHTML += ` \u{1F449} ${c} `
            }
        }
        
        








        }       
}    
