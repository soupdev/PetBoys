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

        let dog_age = dog_file[i].age;

        let dog_size = dog_file[i].size;
        let dog_url = dog_file[i].url;
        let dog_breed = dog_file[i].breeds.primary;
        



        let dog_photos = dog_file[i].primary_photo_cropped;
        //console.log (dog_photos);
        let md_no_photo;
        let md_dog_photo_approved;
        //this is an array of photos per dog, some arrays are null
        if(dog_photos !=null){ //if the array is not empty
            md_dog_photo_approved = dog_photos.medium;
           // console.log("these have pics", md_dog_photo_approved);
        }else {
            md_no_photo ;
            console.log ("this one ",md_no_photo)          
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

        //this div holds the pet icons about each dog
        var pet_icons = document.createElement("div"); 
        pet_icons.setAttribute("class","pet-icons");
       
        //this div holds the photo-container of each dog
        var adoption_photo_container = document.createElement("div");
        adoption_photo_container.setAttribute("class","adoption-photo-container");
        

        //create elements and add class name
        var pet_name = document.createElement("h3");
        pet_name.setAttribute("class","pet-name");
        
        var pet_desc = document.createElement("p");
        pet_desc.setAttribute("class","pet-desc");
        
        var pet_gender = document.createElement("p");
        pet_gender.setAttribute("class" , "pet_gender");

        var pet_size = document.createElement("p");
        pet_size.setAttribute("class" , "pet_size");

        var pet_breed = document.createElement("p");
        pet_breed.setAttribute("class" , "pet_breed");

        var pet_age = document.createElement("p");
        pet_age.setAttribute("class","pet-age");


        var pet_icon1 = document.createElement("p");
        pet_icon1.setAttribute("class", "icon"); 
        var pet_icon2 = document.createElement("p")
        pet_icon2.setAttribute("class", "icon");
        var pet_icon3 = document.createElement("p")
        pet_icon3.setAttribute("class", "icon");
        var pet_icon4 = document.createElement("p")
        pet_icon4.setAttribute("class", "icon");

        var pet_url = document.createElement("a");
        pet_url.setAttribute("class", "pet-url");
        pet_url.href= dog_url;

        var adopt_button = document.createElement("button");

        var pet_photo = document.createElement("img");
        pet_photo.setAttribute("class","pet-img");
        pet_photo.src= `${md_dog_photo_approved}`;
        
        if(pet_photo.src != `${md_dog_photo_approved}`){
            adoption_file.className += "-hidden"; 
        }


        //add inner data to elements 
        adopt_button.innerText = 'Learn More About ' + dog_name;
        pet_name.innerText = dog_name; 
        pet_gender.innerText = "Gender: " + dog_gender;
        pet_size.innerText = "Size: " + dog_size;
        pet_breed.innerText = "Breed: " + dog_breed;
        pet_age.innerText = "Age: " + dog_age;

        pet_icon1.innerText = "Housebroken :";
        pet_icon2.innerText = "Spayed/Neutered :";
        pet_icon3.innerText = "Vaccinations :";
        pet_icon4.innerText = "Special Needs: ";
        
        
        //add text divs to pet_info 
        pet_desc.appendChild(pet_age);
        pet_desc.appendChild(pet_gender);
        pet_desc.appendChild(pet_size);
        pet_desc.appendChild(pet_breed);

        //add icon divs to pet_icons
        pet_icons.appendChild(pet_icon1);
        pet_icons.appendChild(pet_icon2);
        pet_icons.appendChild(pet_icon3);
        pet_icons.appendChild(pet_icon4);

        //wrap button in <a> tag 
        pet_url.appendChild(adopt_button);

        //add major divs to div container
        pet_info.appendChild(pet_name);
        pet_info.appendChild(pet_desc);
        pet_info.appendChild(pet_icons)

      


        //pet_info.appendChild(adopt_button);
        pet_info.appendChild(pet_url);
        
        

        //add all pet_info to adoption_info
        adoption_info.appendChild(pet_info);

        //add img to adoption_photo
        adoption_photo_container.appendChild(pet_photo);
       


        //remove those with no photos 
      

        //add all adoption_info and adoption_photo to adoption_file
        adoption_file.appendChild(adoption_info);
        adoption_file.appendChild(adoption_photo_container);
       
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

