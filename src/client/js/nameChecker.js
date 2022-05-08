function checkForName(inputText) {
    
 
    if(inputText.includes('.')){
        if(inputText.includes('/')){
            return true
        }else{
            return false
        }
    }else{
        return false
    }

}

export { checkForName }
