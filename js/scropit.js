for (let i = 1; i <= 100; i ++){
    console.log (i)

    if( i % 3 == 0 ) { 
        console.log("Multiplo  di 3");  

        }else if( i % 5 == 0){
            console.log("Multiplo di 5")

        }else if( i % 3 && % 5){
            console.log("Multiplo di 3 e di 5")
        }
        
}