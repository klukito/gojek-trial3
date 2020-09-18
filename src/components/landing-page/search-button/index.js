import React from 'react'
import { Button } from "@chakra-ui/core";

function Btn({text, onClick}) {

    return(
        

        <button onClick={onClick}>

            <Button spacing={4} 
            
            rightIcon= "phone"
            variantColor="white" 
            variant="outline">
            
            </Button>
        
         
            
         </button>
        

    )

}

export default Btn