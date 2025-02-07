
// Immediately Invoked Function Expressions (  IIFE  )
// imedetly execute
//  IMP  used to remove globle scope polution issue 

(function chai(){            // named iife
    console.log(`D CONNECTED`)

})();       // we have to must write ';'

(
    (name)=> {
        console.log(`DB2 CONNCTED ${name}`)
    }
)("arjun")