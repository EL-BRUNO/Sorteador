function generateNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.ceil(document.querySelector(".input-max").value)

    if (max > min){
      const result = Math.floor(Math.random() * (max - min + 1) + min)
      
      alert(result)
    } else {
      alert('O valor mínimo DEVE ser MENOR  do que o valor máximo!')
    }


    
}

