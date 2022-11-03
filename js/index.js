api_token="XdTTJdo17K1iSCm1dnW7elgw1WLQdOEBCZXlgEJnJq2rFvIxyEP49neb1cGO";//better to share with environement

function getData(){
  url="https://cricket.sportmonks.com/api/v2.0/team-rankings?api_token=XdTTJdo17K1iSCm1dnW7elgw1WLQdOEBCZXlgEJnJq2rFvIxyEP49neb1cGO";
  fetch(url).then((response)=>{
    return response.json()

  }).then((data)=>{
    console.log(data);
  })
}

getData()


//ALTERNATIVE API😁😁
//API LIMIT 100/day
//apikey="0a3c63ff-dda2-4b4d-8a5e-a2d5bd44457c&id=f0546052-55a0-4071-a763-2b569de51234" {Prefer to be stored with environment variables}


function apiAlternative(){
  url="https://api.cricapi.com/v1/match_scorecard?apikey=0a3c63ff-dda2-4b4d-8a5e-a2d5bd44457c&id=f0546052-55a0-4071-a763-2b569de51234";
  fetch(url).then((response)=>{//convert data to object
    return response.json()

  }).then((data)=>{
    console.log(data);
    console.log(data.data.name);

    /*-------------Changing text on website with JavaScript.Data we got is from Rest API----------------*/


    document.getElementById("Data-1").innerHTML=data.data.name;
    document.getElementById("Data-3").innerHTML=data.data.score[0].inning+" : "+data.data.score[0].r+"/"+data.data.score[0].w;
    document.getElementById("Data-4").innerHTML=data.data.score[1].inning+" : "+data.data.score[1].r+"/"+data.data.score[1].w;

    //Similarly all cards can be changed 😊😊
    //QuerySelector can also be used instead of id method 😃


  });

}

apiAlternative()
