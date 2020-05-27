console.log(`Hello.`)    
let access_token; // create a variable 
let dog_file;
var i;
let adoptions = document.querySelector(".adoptions");

//define HTML div to append elements to later 

let showDogs = function(){
    
    console.log('showDogs function');
   // console.log(dog_file[0].name);
    let intro = "Hello, my name is ";
    for (i = 0; i < dog_file.length; i++){
        //i=0; so long as i's value is shorter than the lentgh of the array; increase the value of i until finished
        
        //store pet data from dog_file into vars
            //each loop, var = value of the object in the array
        //console.log(dog_name);
        let dog_name = dog_file[i].name;
        let dog_desc = dog_file[i].description;
        let dog_gender = dog_file[i].gender;
        let dog_photos = dog_file[i].primary_photo_cropped;
        //console.log (dog_photos);
        let sm_dog_photo;
        //this is an array of photos per dog, some arrays are null
        if(dog_photos !=null){ //if the array is not empty
            sm_dog_photo = dog_photos.small;
            //console.log(sm_dog_photo);
        } else{ //if array is empty, img src is default img
            sm_dog_photo = "dist/img/dog-heads.png";
        }
       
        //each pet has a file (adoption card), each card has text section (adoption info) and picture section (adoption photo.

        //create divs and add class names
        // this div is a container per pet info 
        var adoption_file = document.createElement("div");
        adoption_file.setAttribute("class", "adoption-file");
      
       //this div is a countainer for all text info about each dog
        var adoption_info = document.createElement("div"); 
        adoption_info.setAttribute("class","adoption-info")
       
       //this div holds the text information about each dog
        var pet_info = document.createElement("div"); 
        pet_info.setAttribute("class","pet-info")
       
        //this div holds the photo of each dog
        var adoption_photo = document.createElement("div");
        adoption_photo.setAttribute("class","adoption-photo");
        

        //create elements and add class name
        var pet_name = document.createElement("h3");
        pet_name.setAttribute("class","pet-name");

        var pet_desc = document.createElement("p");
        pet_desc.setAttribute("class","pet-desc");

        var adopt_button = document.createElement("button");

        var pet_photo = document.createElement("img");
        pet_photo.setAttribute("class","pet-img");
        pet_photo.src= `${sm_dog_photo}`;
        

        //add inner data to elements 
        pet_name.innerText = dog_name; 
        pet_desc.innerHTML =  dog_desc + "<br>" + "Gender: " + dog_gender;
        adopt_button.innerText = 'Learn More'
        
        //add text divs to pet_info 
        pet_info.appendChild(pet_name);
        pet_info.appendChild(pet_desc);
        pet_info.appendChild(adopt_button);
        

        //add all pet_info to adoption_info
        adoption_info.appendChild(pet_info);

        //add img to adoption_photo
        adoption_photo.appendChild(pet_photo);

        //add all adoption_info and adoption_photo to adoption_file
        adoption_file.appendChild(adoption_info);
        adoption_file.appendChild(adoption_photo);
       
        //add adoption card to HTML document
        adoptions.appendChild(adoption_file);

    }
   
    // document.getElementsByClassName(".adoptions").innerHtml += intro;

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

