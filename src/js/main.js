console.log(`Hello.`)    
var i;
let access_token; // create a variable 
let dog_file;
let content_wrapper = document.querySelector("content-wrapper")
let adoptions = document.querySelector(".adoptions");
let input_zipCode = document.querySelector("#zipCode");
let zipCode;
let petGender;
let input_petGender = document.querySelector("[name=pup_gender]");

function clearResults(){
    console.log("cleared results", adoptions);
    adoptions.innerHTML = " ";
}


//define HTML div to append elements to later 

function get_parameters(){
   zipCode = input_zipCode.value

   //petGender = input_petGender.value
    console.log("button was checked", petGender )

    clearResults();    
    goGetDogs();
}

let showDogs = function(){
    
    console.log('showDogs function');
   // console.log(dog_file[0].name);

   //create a container for adoptions
   let adoption_container = document.createElement("section");
    for (i = 0; i < dog_file.length; i++){
        //i=0; so long as i's value is shorter than the lentgh of the array; increase the value of i until finished
        
        //store pet data from dog_file into vars
        //each loop, var = value of the object in the array
      
       //dog description
        let dog_name = dog_file[i].name;
        let dog_desc = dog_file[i].description;
        let dog_gender = dog_file[i].gender;
        let dog_age = dog_file[i].age;
        let dog_size = dog_file[i].size;
        let dog_url = dog_file[i].url;
        let dog_breed = dog_file[i].breeds.primary;

        //dog location
        let dog_city = dog_file[i].contact.address.city;
        let dog_state = dog_file[i].contact.address.state;
        let dog_zip = dog_file[i].contact.address.postcode;

       //dog photos
        let dog_photos = dog_file[i].primary_photo_cropped;
        //console.log (dog_photos);
        let md_no_photo;
        let md_dog_photo_approved;
        //this is an array of photos per dog, some arrays are null
        if(dog_photos !=null){ //if the array is not empty
            md_dog_photo_approved = dog_photos.full;
           // console.log("these have pics", md_dog_photo_approved);
        }else {
            md_no_photo = "dist/img/dog_comingSoon1.png" ;
           // console.log ("this one will be removed ",md_no_photo)          
        }  

        //attributes
        let dog_attributes = dog_file[i].attributes
        let HB = dog_attributes.house_trained;
        let SC = dog_attributes.shots_current;
        let SN = dog_attributes.spayed_neutered;
        let SPN = dog_attributes.special_needs;

        if(HB){
            HB = "dist/img/green_check.png";
        }else{
            HB ="dist/img/red_xmark.png";
        }

        if(SC){
            SC = "dist/img/green_check.png";
        }else{
            SC = "dist/img/red_xmark.png";
        }

        if(SN){
            SN = "dist/img/green_check.png";
        }else{
            SN = "dist/img/red_xmark.png";
        }

        if(SPN){
            SPN = "dist/img/green_check.png";
        }else{
            SPN = "dist/img/red_xmark.png";
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
     
        var pet_age = document.createElement("p");
        pet_age.setAttribute("class","pet-age");
        
        var pet_gender = document.createElement("p");
        pet_gender.setAttribute("class" , "pet-gender");

        var pet_size = document.createElement("p");
        pet_size.setAttribute("class" , "pet-size");

        var pet_breed = document.createElement("p");
        pet_breed.setAttribute("class" , "pet-breed");

        var pet_address = document.createElement("p")
        pet_address.setAttribute("class","pet-location")



        var pet_HB = document.createElement("p");
        pet_HB.setAttribute("class", "icon-HB icons"); 
        var pet_SN = document.createElement("p")
        pet_SN.setAttribute("class", "icon-SN icons");
        var pet_SC = document.createElement("p")
        pet_SC.setAttribute("class", "icon-SC icons");
        var pet_SPN = document.createElement("p")
        pet_SPN.setAttribute("class", "icon-SPN icons");

        var pet_url = document.createElement("a");
        pet_url.setAttribute("class", "pet-url");
        pet_url.setAttribute("target", "_blank")
        pet_url.href= dog_url;

        var adopt_button = document.createElement("button");

        var pet_photo = document.createElement("img");
        pet_photo.setAttribute("class","pet-img");
        pet_photo.src= `${md_dog_photo_approved}`;
        
        if(pet_photo.src != `${md_dog_photo_approved}`){
            adoption_file.className += "-hidden"; 
            //stylng for .adoption-file-hidden set to display:none;
        }


        //add inner data to elements 
        adopt_button.innerHTML = 'Learn More About ' + "<br>" + dog_name;
        pet_name.innerText = dog_name; 
        pet_gender.innerHTML = "Gender: " + "<span>" + dog_gender  + "</span>";
        pet_size.innerHTML = "Size: " + "<span>" + dog_size + "</span>";
        pet_breed.innerHTML = "Breed: " + "<span>" + dog_breed  + "</span>";
        pet_age.innerHTML = "Age: " + "<span>" + dog_age  + "</span>";
        pet_address.innerHTML = "Location: "+ "<br>" + "<span>" + dog_city  + "," + " " + dog_state  +  " "  + dog_zip  + "</span>";

        pet_HB.innerHTML = "Housebroken:" + " " + "<img class='icon' src=" + HB + ">";
        pet_SN.innerHTML = "Spayed/Neutered:"+ " " +"<img class='icon' src=" + SN + ">";
        pet_SC.innerHTML = "Vaccinations:"+ " " +"<img class='icon' src=" + SC + ">";
        pet_SPN.innerHTML = "Special Needs: "+ " " + "<img class='icon' src=" + SPN + ">";
        
        
        //add text divs to pet_info 
        pet_desc.appendChild(pet_age);
        pet_desc.appendChild(pet_gender);
        pet_desc.appendChild(pet_size);
        pet_desc.appendChild(pet_breed);
        pet_desc.appendChild(pet_address);

        //add icon divs to pet_icons
        pet_icons.appendChild(pet_HB);
        pet_icons.appendChild(pet_SN);
        pet_icons.appendChild(pet_SC);
        //pet_icons.appendChild(pet_SPN);

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
    
    adoptions.style ="display:flex"

}

let goGetDogs = function(){
    console.log('goGetDogs function')

    let api_call = 'http://circuslabs.net/proxies/petfinder/?endpoint=animals?type=dog&token='

    let param_zipCode = '&location='+zipCode;

    axios
        .get( api_call + access_token + param_zipCode) // a request for the info from the api
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
    .then(get_parameters) //execute named function stored in the variable
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

