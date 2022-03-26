

//Query Selectors

/*
function changeStyles(){
  const invitewrapper=document.querySelectorAll('Name1', 'Name2', 'Surname', 'Location', 'Date', 'Time');
  let garden = document.getElementById("invite-garden");
  let premium = document.getElementById("invite-premium");
  let coastal = document.getElementById("invite-coastal");

  for 
  
  if (invitewrapper === "garden") {
    invitewrapper.item(i).getElementByClassName = "h1.coastal";
    invitewrapper.item(i).getElementByID = "invite-coastal";
  }
  if else {
  (invitewrapper === "premium") {
    invitewrapper.item(i).getElementByClassName = "h1.premium";
    invitewrapper.item(i).getElementByID = "invite-premium";
  }
  else {
    (invitewrapper === "coastal") {
      invitewrapper.item(i).getElementByClassName = "h1.coastal";
      invitewrapper.item(i).getElementByID = "invite-coastal";
    }
}

*/



function changeMyBg(prm){
  if (prm == "garden") {
    document.getElementById('bg-invitation').classList.add('invite-garden');
    document.getElementById('bg-invitation').classList.remove('invite-premium');
    document.getElementById('bg-invitation').classList.remove('invite-coastal');
    //document.getElementById('Name1rep', 'Name2rep', 'Surnamerep', 'Locationrep', 'Daterep', 'Timerep').style.fontFamily = 'fino-sans, sans-serif';
    //document.getElementById('Name1rep', 'Name2rep', 'Surnamerep', 'Locationrep', 'Daterep', 'Timerep').classList.add('h1.coastal');
    //document.querySelector('Name1rep', 'Name2rep', 'Surnamerep', 'Locationrep', 'Daterep', 'Timerep').style.fontFamily = 'fino-sans, sans-serif';
  }
  else if (prm == "premium") {
    document.getElementById('bg-invitation').classList.add('invite-premium');
    document.getElementById('bg-invitation').classList.remove('invite-garden');
    document.getElementById('bg-invitation').classList.remove('invite-coastal');{
    }
  }
  else if (prm == "coastal") {
    document.getElementById('bg-invitation').classList.add('invite-coastal');
    document.getElementById('bg-invitation').classList.remove('invite-garden');
    document.getElementById('bg-invitation').classList.remove('invite-premium');
  }
}


//var element = document.getElementById('Name1', 'Name2', 'Surname', 'Location', 'Date', 'Time');
//element.id = "newID";

/*
function changeMyFonts(fnt){
  if (fnt === "garden")
  document.getElementById('Name1rep', 'Name2rep', 'Surnamerep', 'Locationrep', 'Daterep', 'Timerep').classList.add('h1.garden');
  document.getElementById('Name1rep', 'Name2rep', 'Surnamerep', 'Locationrep', 'Daterep', 'Timerep').classList.remove('h1.premium');
  document.getElementById('Name1rep', 'Name2rep', 'Surnamerep', 'Locationrep', 'Daterep', 'Timerep').classList.remove('h1.coastal');
}
*/


//document.querySelectorAll('Name1', 'Name2', 'Surname', 'Location', 'Date', 'Time').classList.add('h1.garden');



//Live text

function liveTextFunction(form, invitetext) {
  document.getElementById(form).onkeyup = function () {
  document.getElementById(invitetext).textContent = this.value;
};
}

liveTextFunction("Name1", "Name1rep");
liveTextFunction("Name2", "Name2rep");
liveTextFunction("Surname", "Surnamerep");
liveTextFunction("Location", "Locationrep");
liveTextFunction("Date", "Daterep");
liveTextFunction("Time", "Timerep");






/*
const invite = document.querySelector("invite-premium"); {
  document.getElementById(#Name1rep, #Name2rep, #Locationrep, #Daterep, #Timerep).onclick = function (chang) {
    document.getElementById(invitetext).textContent = this.value;
  };
  
}


const invitewrapper = document.querySelector("invite-premium"); {
const classes = span.invite;

function.addEventListener('click', function() {
  const result = classes.toggle("c");

  if (result) {
    span.textContent = `'c' added; classList is now "${classes}".`;
  } else {
    span.textContent = `'c' removed; classList is now "${classes}".`;
  }
})


const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
*/




