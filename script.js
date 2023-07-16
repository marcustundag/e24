function renderDiv(){
    for(i=1;i<4;i++){
        cardClass="card mb-2 ";
        label=""
        switch(i){
            case 1: 
              cardClass+="bg-primary";
              label="Grams:"
              unitAbrev="gm"
              break;
            case 2: 
              cardClass+="bg-success";
              label="Kilogram:"
              unitAbrev="kg"
              break;
            case 3: 
              cardClass+="bg-danger";
              label="Ounces:"
              unitAbrev="oz"
              break;
              default:
                 cardClass="";
        } 
    document.write(`
        <div id="card_${i}" class="${cardClass}">
            <div class="card-body">
                <h4> ${label}</h4>
                <div id="${unitAbrev}Output"></div>
            </div>
       </div>
    `);
   } 
   document.getElementById("lbsInput").addEventListener(
            "input",
            function(e){
                let lbs = e.target.value;
                document.getElementById("gmOutput").innerHTML=lbs/0.0022
                document.getElementById("kgOutput").innerHTML=lbs/2.2046
                document.getElementById("ozOutput").innerHTML=lbs*16
            }
            );
 }


