let i=0;
function toggler(...arg) {
  
  
    return ()=> {
        console.log(arg[i++]); 
    };
    
}

let toggle = toggler(1,2,3,4,5)

toggle()
toggle()
toggle()
toggle()
toggle()


