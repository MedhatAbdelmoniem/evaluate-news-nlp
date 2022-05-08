function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkForName(formText))
    {  
    const formdata = new FormData();
    fetch('http://localhost:8081/res')
    .then(res => res.json()).then((res)=>{
        formdata.append("key", res.application_key);
        formdata.append("url", formText);
        formdata.append("lang", "en");
       
    }).then(()=>{
        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };

    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => ({
      status: response.status, 
      body: response.json()
    }))
    .then(({body }) => {
    return body
    }).then((body)=>{
        document.getElementById('results').append('subjectivity is ' + body.subjectivity )
        
    })
    })}else{
        alert('Please enter a valid url')
    }
  
   

    

}

export { handleSubmit }
