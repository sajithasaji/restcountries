async function getJSON(){
    try{
        let resp=await fetch('https://restcountries.eu/rest/v2/all')
        let data=await resp.json();
        foo(data)
    }
    catch(error){
        console.log(error)

    }
   
    }

    getJSON();

    function foo(data){
   
        data.forEach(element => {
          var row=document.getElementById("row");
  
          var col=document.createElement("div")
          col.setAttribute('class','col-4 mb-3')
    
          var card=document.createElement("div")
          card.setAttribute('class','card h-100')
    
          var cardImg=document.createElement("img")
          cardImg.setAttribute('class','card-img-top')
          cardImg.setAttribute('src',element.flag)
    
          var cardBody=document.createElement("div")
          cardBody.setAttribute('class','card-body')
    
          var cardTitle=document.createElement("h2")
          cardTitle.setAttribute('class','h2')
          cardTitle.innerHTML=element.name
    
          var cardText=document.createElement('p')
          cardText.setAttribute('class','card-text')
          cardText.innerHTML=element.capital + "-"+element.region+"-"+element.population+"-"+element.area;
    
          cardBody.append(cardTitle,cardText)
          card.append(cardImg,cardBody)
    
          
          col.append(card)
          row.append(col)
        });
       
  
        
       
  
    }
    
