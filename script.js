//function to fetch the data from a file 
    
async function fetch_file_data(){
    let data = await fetch("./text.txt");
    let result = await data.text();
    console.log(result);
    return (result);
}

//end of the fetch file from data

//function to fetch API data
async function API(){

    let domain = 'https://mighty-spoons-tap.loca.lt'
    let path = '/calling-data/1';
    let domain1 = 'http://localhost';
    let url = domain1+path;

    let url3 ='https://jsonplaceholder.typicode.com/users';
    let url1='https://loose-singers-fetch.loca.lt/calling-data/1';

     let result = await fetch(url);
     result = await result.json();
     document.getElementById('Name').innerHTML=result.map((user) =>
     `<tr>
        <td>
            <div class="container">

                <div class="name1">
                    <div class="name">${user.calleeName}</div>
                    <div class="shortname">${user.programAttending}</div>
                </div>

                <div class="phone">
                    <a href="tel:${user.mobile}"> 
                        <button  type="button" onclick="change('call2.png','${user.calleeName}')"> 
                            <img src="call.png" id="${user.calleeName}">
                        </button>
                    </a>
                </div>

                <div class="email">
                    <button type="button" onclick="popup('${user.calleeName}','${user.programAttending}','${user.id}')">
                        <img src="message.png" >
                    </button>
                </div>

            </div>
        </td>
      </tr>
     `
     ).join("")
 }
 // end of the function to fetch data
 
 // fnction too change the call image into gray 
 function change(filename,x){
    let img = document.getElementById(x);
    img.setAttribute("src",filename);
 }
 // function ends

 // function to change create the poopup menu 
 function popup(calleeName,programAttending,id){

    document.querySelector('.overlap').classList.add('showoverlap');
    document.querySelector('.resigter').classList.add('showresigter');
    let x = document.getElementById('class_username');
    x.innerText=calleeName;
    let y = document.getElementById('electronic_mail');
    y.innerText=programAttending;
    let z = document.getElementById('mail');
    z.innerText = id;
    
 }
 // funtion popup ends


 //function to close the popup menu
 function closeregister(){

    document.querySelector('.overlap').classList.remove('showoverlap');
    document.querySelector('.resigter').classList.remove('showresigter');
 }
 // fuunction ends


 //function to submit the commnets and ooptions
 function conformation(){

    document.querySelector('.resigter').classList.remove('showresigter');
    document.querySelector('.conform').classList.add('showconform'); 
 }
 //function ends


 // function to remove the tick dialog box//
 function removeconform(){

    document.querySelector('.overlap').classList.remove('showoverlap');
    document.querySelector('.conform').classList.remove('showconform');
    alert("your response submitted successfully");
    update_API();
 }
 //function ends

 //function to add the data in the data base
  function fetch_id(){
    let text = fetch_file_data();
     let y = document.getElementById('mail');
     let fetch_id = y.innerText;
    let option = {
        method: 'PUT',
        headers: {
            'Authorization':text ,
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({
            id: fetch_id,
            intrested: taking_radio_button_input(),
            comments:taking_data_from_element(),

        })
    }
    console.log("from fetch id function: ",text);
    return(option); 
 }
 //fnction ends

 
  async function update_API(){
    let option = fetch_id();
    let url1='http://localhost/calling-data/save';
    let url = 'https://jsonplaceholder.typicode.com/users';
    
    let data =await fetch(url1,option);
    data = await data.json();
 }


 // fuunction to take the commnets inpuut
 function taking_data_from_element(){
    let txt = document.getElementById('placeholder');
    let txtvalue = txt.value;
    return txtvalue;
 }



 //function to taking the input from radio button
function taking_radio_button_input(){
    let Intrested;
    if(document.getElementById('yes').checked){
        Intrested = true;
    }

    else if(document.getElementById('no').checked){
        Intrested = false;
    }
    console.log("radio: ",Intrested);
    return(Intrested);

}

// function showloginform(){
//     document.querySelector('.loging_form_overlap').classList.add('showloginoverlap');
//     document.querySelector('.loginform').classList.add('shwologinform');
// }

function showCallingdata(){
    document.querySelector('.welcome').classList.add('remove_welcome_page');
    // document.querySelector('.prabhupadImage').classList.add('remove_parbhupad_Image');
    document.querySelector('.table').classList.add('show_table');
    // document.querySelector('.loging_form_overlap').classList.remove('showloginoverlap');
    document.querySelector('.loginform').classList.add('shwologinform');
    API();
    fetch_file_data();

}

function fetch_username_and_password(){
    let username = document.querySelector('#user_name').value;
    let password = document.querySelector('#password').value;

    let fetch_username = username;
    let fetch_password = password;

    if((fetch_username =="Ankit") && (fetch_password =="1234")){
        showCallingdata();
    }
    else{
        alert("You enter a worng username or password");
    }
}

// https://dummyjson.com/posts link for post API


async function callAPi(){
    let option={
        method:'GET',
        headers:{
            'Authorization':'8889e93e6bee14060981c590d19478ad',
            'Content-type': 'application/json; charset=UTF-8',
            // 'appid':'8889e93e6bee14060981c590d19478ad'
        }
    }
    let url = 'https://api.openweathermap.org/data/2.5/weather';
    let Herder = 'q=delhi&appid=8889e93e6bee14060981c590d19478ad';
    let final_url = url+Herder;
    let key = await fetch(url,{
        headers:{
            q:'delhi',
            appid:'8889e93e6bee14060981c590d19478ad'
        }
    });
    key = await key.json();
    console.warn(key);
    console.log(key);
}

callAPi();

// appid=8889e93e6bee14060981c590d19478ad
// q=delhi&appid=8889e93e6bee14060981c590d19478ad

// {
//     headers:{
//         q:'delhi',
//         appid:'8889e93e6bee14060981c590d19478ad'
//     }
// }


