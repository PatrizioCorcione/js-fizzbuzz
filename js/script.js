let limit = 100;
let contenitoreJs = document.getElementById("contenitore");

for (let i = 1; i <= limit; i++) {
  const all = document.createElement("span");

  /*MODIFICA SOLO I MULTIPLI DI 3 E ANCHE DI 5*/

  if(!(i % 3) && !(i % 5)){
    all.innerHTML = "fizzbuzz";
    contenitoreJs.append(all);
    all.classList.add("general","fizz-buzz")

    /*MODIFICA SOLO I MULTIPLI DI 3*/

  }else if(!(i % 3)){
    all.innerHTML = "fizz";
    contenitoreJs.append(all);
    all.classList.add("general","fizz")
    
    /*MODIFICA SOLO I MULTIPLI DI 5*/

  }else if(!(i % 5)){
    all.innerHTML = "buzz";
    contenitoreJs.append(all);
    all.classList.add("general","buzz")

    /*SE NON MODIFICA NIENTE SOPRA LASCIA SOLO IL 
    NUMERO*/
    
  }else{
    all.innerHTML = i;
    contenitoreJs.append(all);
    all.classList.add("general","number")
  }
  console.log(all);
  
}
