// to display the log_out message on hover//
let display_hover_message = document.querySelector('.logout_image');
display_hover_message.addEventListener('mouseover',function(){
    document.querySelector('.logout_btton_hover_message').classList.add('show_logout_btton_hover_message');
})
display_hover_message.addEventListener('mouseout',function(){
    document.querySelector('.logout_btton_hover_message').classList.remove('show_logout_btton_hover_message');
})
// end of the log out message//


//function to fetch the data from a file 
    
async function fetch_file_data(){
    let data = await fetch("./text.txt");
    let result = await data.text();
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
    let aws_url='https://ec2-16-171-229-85.eu-north-1.compute.amazonaws.com:8443/calling-data/';
    let local_url='http://localhost:80/calling-data/';


	let user_name = taking_data_from_element_user_name();

     let result = await fetch(aws_url+user_name);
	

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
 let id_of_callee=0;
 // function to change create the poopup menu 
 function popup(calleeName,programAttending,id){

    id_of_callee =id;
    document.querySelector('.overlap').classList.add('showoverlap');
    document.querySelector('.resigter').classList.add('showresigter');
    let x = document.getElementById('class_username');
    x.innerText=calleeName;
    let y = document.getElementById('electronic_mail');
    y.innerText=programAttending;
    let z = document.getElementById('mail');
    z.innerText = id;
    fetch_commnets_and_intrested();
    
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
            'Authorization':'Basic fetch_file_data()',
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({
            id: fetch_id,
            isIntrested: taking_radio_button_input(),
            comments:taking_data_from_element(),

        })
    }
    return(option); 
 }
 //fnction ends

 
  async function update_API(){
    let count1= 0;
    let count2 =0;
    try{
        let option = fetch_id();
        let url1='http://localhost/calling-data/save';
        let aws_url='https://ec2-16-171-229-85.eu-north-1.compute.amazonaws.com:8443/calling-data/save';
        let local_url='https://localhost:8443/calling-data/save';
        let data =await fetch(aws_url,option);
        data = await data.json();
        count1 = count1+2;
        show_conformation_message(count1);
    }
    catch(error){
        count2=count2+1;
        show_conformation_message(count2);
    }
 }


 // fuunction to take the commnets inpuut
 function taking_data_from_element(){
    let txt = document.getElementById('placeholder');
    let txtvalue = txt.value;
    return txtvalue;
 }

 function taking_data_from_element_user_name(){
    let txt = document.getElementById('user_name');
    let txtvalue = txt.value;
    return txtvalue;
 }

 //function to taking the input from radio button
function taking_radio_button_input(){
    let Intrested;
    Intrested = document.querySelector('#yes_or_no').value;
    return(Intrested);
}


function showCallingdata(){
    document.querySelector('.table').classList.add('show_table');
    document.querySelector('.loginform').classList.add('shwologinform');
    document.querySelector('.login_cover').classList.add('hide_login_cover');
    document.querySelector('.calling_data_overlap').classList.add('show_calling_data_overlap');
    document.querySelector('.logout_image').classList.add('show_logout_image');
    API();
    fetch_file_data();

}

function fetch_username_and_password(){
    let username = document.querySelector('#user_name').value;
    let password = document.querySelector('#password').value;

    let fetch_username = username;
    let fetch_password = password;

    if((fetch_password =="1234")){
        showCallingdata();
    }
    else{
        alert("You enter a worng username or password");
    }
}

function logout_from_calling_seva(){
    document.querySelector('.table').classList.remove('show_table');
    document.querySelector('.loginform').classList.remove('shwologinform');
    document.querySelector('.login_cover').classList.remove('hide_login_cover');
    document.querySelector('.loginform').classList.remove('shwologinform');
    document.querySelector('.calling_data_overlap').classList.remove('show_calling_data_overlap');
    document.querySelector('.logout_image').classList.remove('show_logout_image');
    document.querySelector('.logout_btton_hover_message').classList.remove('show_logout_btton_hover_message');

    alert("You are log out successfully");

    let clear_user_name = document.querySelector('#user_name');
    let clear_password = document.querySelector('#password');

    clear_user_name.value = '';
    clear_password.value = '';
    
}

async function fetch_commnets_and_intrested(){
    let id2=0;
    let i=0;
    let aws_url='https://ec2-16-171-229-85.eu-north-1.compute.amazonaws.com:8443/calling-data/';
    let user_name = taking_data_from_element_user_name();
    let result = await fetch(aws_url+user_name);
    result = await result.json();
    let count = result.length;
    for(i=0;i<=count-1;i++){
        id2 = result[i].id;
        if(id2==id_of_callee){
            break;
        }
    }

    let comments1 = document.getElementById('placeholder');
    comments1.value = result[i].comments;

    let select = document.querySelector('#yes_or_no');
    let option0 = document.querySelector('.No_Answer');
    let option1 = document.querySelector('.Will_Come');
    let option2 = document.querySelector('.Not_Confirm');
    let option3 = document.querySelector('.Out_of_Delhi');
    let option4 = document.querySelector('.Time_not_suitable');
    let option5 = document.querySelector('.Day_not_suitable');
    let option6 = document.querySelector('.Switch_OFF');
    let option7 = document.querySelector('.Wrong_number');
    if(result[i].isIntrested == "No Answer"){
        select.value = option0.value;
    }
    else if(result[i].isIntrested == "Will Come"){
        select.value = option1.value;
    }
    else if(result[i].isIntrested == "Not Confirm"){
        select.value = option2.value;
    }
    else if(result[i].isIntrested == "Out of Delhi"){
        select.value = option3.value;
    }
    else if(result[i].isIntrested == "Time not Suitable"){
        select.value = option4.value;
    }
    else if(result[i].isIntrested == "Day not Suitable"){
        select.value = option5.value;
    }
    else if(result[i].isIntrested == "Switch OFF"){
        select.value = option6.value;
    }
    else{
        select.value = option7.value;
    }
}
function show_conformation_message(check_even_odd){
    let conformation = document.querySelector('.conformation_message');
    if(check_even_odd%2 == 0){
        conformation.innerText = "Your response submitted sucessfully";
        document.querySelector('.conformation_message').classList.add('show_conformation_message');
        setTimeout(function remove_conformation_message(){
            document.querySelector('.conformation_message').classList.remove('show_conformation_message');
        },4000);
    }
    else{
        conformation.innerText = "Their is some problem";
        document.querySelector('.conformation_message').classList.add('show_conformation_message');
        setTimeout(function remove_conformation_message(){
            document.querySelector('.conformation_message').classList.remove('show_conformation_message');
        },4000);
    }
}


