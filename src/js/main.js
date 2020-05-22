console.log(`Hello.`)    
let access_token; // create a variable 
let dog_file;
var i;
let pet_names = document.querySelectorAll(".pet-name");

//define HTML div to append elements to later 
let showDogs = function(){
    
    console.log('showDogs function');
   // console.log(dog_file[0].name);
    let intro = "Hello, my name is ";
    for (i = 0; i < dog_file.length; i++){
        //i=0; so long as i's value is shorter than the lentgh of the array; increase the value of i until finished
        let dog_name = dog_file[i].name;
        //each loop, the value of dog_name = the name: of the looped object in the array
        //console.log(dog_name);
        //intro += dog_name + "<br/>";
       
        let x;
        for (x=0; x < pet_names.length;x++){
            pet_names[x].innerHTML += intro + dog_name;
        }
       //adoption_cards[0].innerHTML += intro + dog_name + "<br/>";
   
    }
   
    // document.getElementsByClassName(".adoption_card").innerHtml += intro;

    // let x;
    // for (x=0; x < adoption_card.length;x++){
    //     adoption_card[x].innerHTML += intro;
    // }

    //here is where I make divs, classes, etc and append to html 

    

}

let goGetDogs = function(){
    console.log('goGetDogs function')

    axios
        .get('http://circuslabs.net/proxies/petfinder/?endpoint=animals?type=dog&token=' + access_token) // a request for the info from the api
        .then(function (response) {
            // handle success
            dog_file = response.data.animals; //.data.access_token; // store the access inside the variable that's on the global scope 
            console.log(dog_file); //show inside object > data > access token 
        })
        .then(showDogs)
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

axios //the javascript library that makes the request 
    .get('http://circuslabs.net/proxies/petfinder/?endpoint=oauth2/token') // a request for the access token
    .then(function (response) {
        // handle success
        access_token = response.data.access_token; // store the access inside the variable that's on the global scope 
        console.log(response.data.access_token); //show inside object > data > access token 
    })
    .then(goGetDogs) //execute named function stored in the variable
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

