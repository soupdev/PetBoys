"use strict";console.log("Hello.");var i,access_token=void 0,dog_file=void 0,adoptions=document.querySelector(".adoptions"),showDogs=function(){console.log("showDogs function");for(i=0;i<dog_file.length;i++){var e=dog_file[i].name,t=dog_file[i].description,o=dog_file[i].gender,n=dog_file[i].primary_photo_cropped,s=void 0;s=null!=n?n.small:"dist/img/dog-heads.png";var a=document.createElement("div");a.setAttribute("class","adoption-file");var c=document.createElement("div");c.setAttribute("class","adoption-info");var d=document.createElement("div");d.setAttribute("class","pet-info");var l=document.createElement("div");l.setAttribute("class","adoption-photo");var r=document.createElement("h3");r.setAttribute("class","pet-name");var p=document.createElement("p");p.setAttribute("class","pet-desc");var g=document.createElement("button"),u=document.createElement("img");u.setAttribute("class","pet-img"),u.src=""+s,r.innerText=e,p.innerHTML=t+"<br>Gender: "+o,g.innerText="Learn More",d.appendChild(r),d.appendChild(p),d.appendChild(g),c.appendChild(d),l.appendChild(u),a.appendChild(c),a.appendChild(l),adoptions.appendChild(a)}},goGetDogs=function(){console.log("goGetDogs function"),axios.get("http://circuslabs.net/proxies/petfinder/?endpoint=animals?type=dog&token="+access_token).then(function(e){dog_file=e.data.animals,console.log(dog_file)}).then(showDogs).catch(function(e){console.log(e)}).then(function(){})};axios.get("http://circuslabs.net/proxies/petfinder/?endpoint=oauth2/token").then(function(e){access_token=e.data.access_token,console.log(e.data.access_token)}).then(goGetDogs).catch(function(e){console.log(e)}).then(function(){});
//# sourceMappingURL=main.js.map