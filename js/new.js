// let's begin the party

// console.log("new js");




var headerDiv = document.createElement("div");
headerDiv.classList.add("header");
// links

//Home link
var homeLink = document.createElement("a");
homeLink.href="#";
var hlText = document.createTextNode("Home");
homeLink.appendChild(hlText);
// div of link
var hldiv = document.createElement("div");
hldiv.classList.add("link");

// contact link
var contactLink = document.createElement("a");
contactLink.href="#";
var clText = document.createTextNode("Contact");
contactLink.appendChild(clText);
// div of link
var cldiv = document.createElement("div");
cldiv.classList.add("link");





// #todo use function of Args
hldiv.appendChild(homeLink);
cldiv.appendChild(contactLink);

headerDiv.appendChild(hldiv);
headerDiv.appendChild(cldiv);
// making sure all is good 


// console.log(headerDiv);

document.body.appendChild(headerDiv);


// conect server 



function view(arr){
    var list =document.createElement("ul");
    list.classList.add("product-list");
    document.body.appendChild(list);
    for(i=0; i<arr.length;i++){
        // need listItem
        var listitem = document.createElement("li");
        listitem.classList.add("li");
        // var test = document.createTextNode(arr[i].Category);
        // console.log(test);
        
        
        
        // new code here
        
        
        // section1
        var sec1 = document.createElement("div");
        sec1.classList.add("sec1");
        // link
        var detailsLink = document.createElement("a");
        detailsLink.href = "#";
        detailsLink.target = "_self";
        
        // imge
        var proImage = document.createElement("img");
        proImage.src = arr[i].ProductPicUrl;
        proImage.alt = "elctroPic";
        proImage.classList.add("proImage");
        
        // >>product name
        var proName = document.createElement("h3");
        var proNametext = document.createTextNode(arr[i].Name);
        proName.appendChild(proNametext);
        
        // section2
        var sec2 = document.createElement("div");
        sec2.classList.add("sec2");
        
        // >>price 
        var proPrice = document.createElement("ins");
        var proPriceText = document.createTextNode(arr[i].Price);
    
        // >>add to cart   
        var addDiv= document.createElement("div")
        addDiv.classList.add("add");
        
        
        
        
        // add new child here
        
        proPrice.appendChild(proPriceText);
        sec2.appendChild(proPrice);
        sec2.appendChild(addDiv);
        detailsLink.appendChild(proImage);
        sec1.appendChild(detailsLink);
        sec1.appendChild(proName);
        listitem.appendChild(sec1);
        listitem.appendChild(sec2);
        list.appendChild(listitem);
        
    }

    
    
    
    
    
    
    // add icon 
    var addIcon = document.createElement("img");


}

function homeview(){
    console.log("hi");
    var server = new XMLHttpRequest();

    // open a connection ("type of conection" , "URL")

    server.open("get","https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json");
    // let's send an order
    server.send();
    // useig the response
    
    server.onreadystatechange = function(){
        if(this.readyState ==4 ){
            // console.log(server);
            var data = JSON.parse(this.responseText);
            var proList = data["ProductCollection"];
            view(proList);
            // console.log("productList",proList);
            // work
            console.log("FOOOOLA");
        }else{
            console.log("loading")
        }
};


}
function contactview(){
    
    
    var formDiv = document.createElement("div");
    formDiv.classList.add("formDiv");
    var h2Form = document.createElement("h2"); 
    var formForm = document.createElement("form"); 
    formForm.name ="contacts"
    
    var name = document.createElement("input"); 
    name.type = "text";
    name.name="name";
    name.placeholder = "enter your name";
    
    var email = document.createElement("input"); 
    email.type = "email";
    email.name = "email";
    email.placeholder = "Your email";
    
    var subject = document.createElement("input"); 
    subject.name = "subject";
    subject.type = "text";
    subject.placeholder = "Subject";
    
    var message = document.createElement("textarea");
    message.name = "message";
    message.placeholder = "enter your message";
    
    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "submit";

    // adding to form
    formForm.appendChild(name);
    formForm.appendChild(email);
    formForm.appendChild(subject);
    formForm.appendChild(message);
    formForm.appendChild(submit);
    
    // add to the form div
    formDiv.appendChild(h2Form);
    formDiv.appendChild(formForm);

    // view in body

    document.body.appendChild(formDiv);
    formForm.addEventListener("submit",function(event){
        event.preventDefault();

        var data = {
            name: this.name.value,
            email: this.email.value,
            subject: this.subject.value,
            message: this.message.value,
        };

        // console.log(data);

        var emailServer = new XMLHttpRequest();
        emailServer.open("POST","http://js.vacsera.com/api/final-project");
        emailServer.setRequestHeader("Content-Type","application/json");
        emailServer.send(JSON.stringify(data));

        emailServer.onreadystatechange = function(){
            if(this.readyState == 4){
                console.log(this.responseText);
            }
        };

    });
}

// adding some interactions
homeLink.addEventListener("click",()=>{
    homeview();
})
contactLink.addEventListener("click",()=>{
    contactview();
})
