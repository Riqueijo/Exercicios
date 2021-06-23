function confirm(){

    let begin = Number(window.document.getElementById("fone").value)
    let end = Number(window.document.getElementById("ftwo").value)
    let tab = window.document.getElementById("table")
    let num = 1
    if (begin == 0 || end <= 0){
      alert("[ERROR]")

    }else{
        //res.innerHTML = 'Calculando... '
        for (c = num; c <= end; c++){
            // ` <br> ${begin} X ${c} = ${begin*c} `
            let item = document.createElement('option')
            item.text = `${begin} X ${c} = ${begin*c} `
            tab.appendChild(item)
    } 

        }

    

   

}