// Count handler 
let interviewList = [];
let rejectedList = [];
let currentStudus = `all`;


let totalCount = document.getElementById(`total-job`);
let totalInterview = document.getElementById(`total-interview`);
let totalRejected = document.getElementById(`total-rejected`);
let jobCount = document.getElementById(`jobCount`);

const cardContainer = document.getElementById(`card-container`);
function calculation(){
    totalCount.innerText = cardContainer.children.length;
    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
}
calculation()

const mainContainer = document.querySelector(`main`);
const alertItem = document.getElementById(`alert`);

// Button toggoling
const allBtn = document.getElementById(`all-btn`);
const interviewBtn = document.getElementById(`interview-btn`);
const rejectedBtn = document.getElementById(`rejected-btn`);

function onlyClick(id){
    allBtn.classList.add(`bg-gray-50`);
    interviewBtn.classList.add(`bg-gray-50`);
    rejectedBtn.classList.add(`bg-gray-50`);

    allBtn.classList.remove(`bg-blue-300`);
    interviewBtn.classList.remove(`bg-blue-300`);
    rejectedBtn.classList.remove(`bg-blue-300`);
    
    currentStudus = id;

    const selected = document.getElementById(id);
    selected.classList.remove(`bg-gray-50`);
    selected.classList.add(`bg-blue-300`);

    if(id == `interview-btn`){
    cardContainer.classList.add(`hidden`);
    filterSection.classList.remove(`hidden`);

    if(interviewList.length === 0){
      alertItem.classList.remove(`hidden`);
    }
    else{
      alertItem.classList.add(`hidden`);
    }

    jobCount.innerText = interviewList.length;
    renderInterview();
    }else if(id == `all-btn`){
    cardContainer.classList.remove(`hidden`);
    filterSection.classList.add(`hidden`);
    
    jobCount.innerText = cardContainer.children.length ;
    calculation();
    if(rejectedList.length === 0 && interviewList.length === 0){
      alertItem.classList.add(`hidden`);
    }else if(rejectedList.length>interviewList.length || rejectedList.length<interviewList.length ){
      alertItem.classList.add(`hidden`);
    }
   }

    if(id==`rejected-btn`){
    cardContainer.classList.add(`hidden`);
    filterSection.classList.remove(`hidden`);
    if(rejectedList.length === 0){
      alertItem.classList.remove(`hidden`);
    }else{
      alertItem.classList.add(`hidden`);
    }
    jobCount.innerText = rejectedList.length;
    renderRejected();
  }

}

// Call Maincontainer to get specipic interviewBtn or rejectedBtn information 

mainContainer.addEventListener(`click`,function(event){
  if(event.target.closest(`#delete`)){
  const card = event.target.closest(`.card`);
  if(card){
    card.remove();
    calculation();
    document.getElementById(`jobCount`).innerText = cardContainer.children.length;
  }
  if(cardContainer.children.length == 0 ){
    alertItem.classList.remove(`hidden`);
  }}

  if(event.target.closest(`#card-interview-btn`)){
   
    const parentNodes = event.target.parentNode.parentNode;

    const companyName = parentNodes.querySelector(`.company`).innerText;
    const skill = parentNodes.querySelector(`.skill`).innerText;
    const demand = parentNodes.querySelector(`.demand`).innerText;
    const applyStutus = parentNodes.querySelector(`.apply-studus`).innerText;
    const description = parentNodes.querySelector(`.description`).innerText;
     
    parentNodes.querySelector(`.apply-studus`).innerText = `Interview`;

    const cardInfo = {
    companyName,
    skill,
    demand,
    applyStutus : `Interview`,
    description
    }

  const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName)

  if(!companyExist){
    interviewList.push(cardInfo);
  }
  rejectedList = rejectedList.filter(item=> item.companyName != cardInfo.companyName ) //don`t understand
  if(currentStudus == `interview-btn`){
    renderInterview(); //don`t understand

  }
  else if(currentStudus == `rejected-btn`){
    renderRejected();
  }

  else{
       parentNodes.querySelector(`.apply-studus`).innerText = `Interview`;
     }
  calculation();
 }
    else if(event.target.closest(`#card-rejected-btn`)){
   
    const parentNodes = event.target.parentNode.parentNode;

    const companyName = parentNodes.querySelector(`.company`).innerText;
    const skill = parentNodes.querySelector(`.skill`).innerText;
    const demand = parentNodes.querySelector(`.demand`).innerText;
    const applyStutus = parentNodes.querySelector(`.apply-studus`).innerText;
    const description = parentNodes.querySelector(`.description`).innerText;
     
    parentNodes.querySelector(`.apply-studus`).innerText = `Rejected`;

    const cardInfo = {
    companyName,
    skill,
    demand,
    applyStutus : `Rejected`,
    description
  }
  const companyExist = rejectedList.find(item=> item.companyName == cardInfo.companyName)
  if(!companyExist){
    rejectedList.push(cardInfo);
  }
  interviewList = interviewList.filter(item=> item.companyName != cardInfo.companyName )  //don`t understand
  if(currentStudus == `rejected-btn`){
    renderRejected(); //don`t understand
  }
  else if(currentStudus == `interview-btn`){
    renderInterview();
  }
  else {
    parentNodes.querySelector(`.apply-studus`).innerText = `Rejected`;
  }
  calculation()
 
  }
 })

// buttonClick and show the empty array informatation and than count 
const filterSection = document.getElementById(`filter-section`);

function renderRejected(){
    filterSection.innerHTML = ``

    // loop for RejectedviewList

    for(let reject of rejectedList){
     const div = document.createElement(`div`);
     div.className = `card bg-gray-50 space-y-4 px-10 py-10`;
     div.innerHTML = `

 <div class="right flex justify-end ">
 <i class="fa-solid fa-trash-can"></i>
 </div>
 <h1 class=" company font-bold text-2xl">${reject.companyName}</h1>
 <p class=" skill text-neutral/50 text-2xl">${reject.skill}</p>
 <p class=" demand text-neutral/50 text-[20px]">${reject.demand}</p>
 <p class=" apply-studus text-2xl rounded-md bg-blue-100 py-2 px-4 w-fit">${reject.applyStutus}</p>
 <p class=" description text-[20px]">${reject.description}</p>
 <div class="twin-btn flex gap-4 ">
     <button  id="card-interview-btn" class=" text-[20px] border-2 border-green-500 px-4 py-2 font-semibold text-green-500 rounded-md" >interview</button>
     <button  id="card-rejected-btn" class="text-[20px] border-2 border-red-500 px-4 py-2 font-semibold text-red-500 rounded-md">Rejected</button>
 </div>
     `
     filterSection.appendChild(div)
    }
    
}
function renderInterview(){
    filterSection.innerHTML = ``

    // loop for interviewList
    for(let inter of interviewList){
     const div = document.createElement(`div`);
     div.className = `card bg-gray-50 space-y-4 px-10 py-10 `;
     div.innerHTML = `
 <div class="right flex justify-end">
 <i class="fa-solid fa-trash-can"></i>
 </div>
 <h1 class=" company font-bold text-2xl">${inter.companyName}</h1>
 <p class=" skill text-neutral/50 text-2xl">${inter.skill}</p>
 <p class=" demand text-neutral/50 text-[20px]">${inter.demand}</p>
 <p class=" apply-studus text-2xl rounded-md bg-blue-100 py-2 px-4 w-fit">${inter.applyStutus}</p>
 <p class=" description text-[20px]">${inter.description}</p>
 <div class="twin-btn flex gap-4 ">
     <button  id="card-interview-btn" class=" text-[20px] border-2 border-green-500 px-4 py-2 font-semibold text-green-500 rounded-md" >interview</button>
     <button  id="card-rejected-btn" class="text-[20px] border-2 border-red-500 px-4 py-2 font-semibold text-red-500 rounded-md">Rejected</button>
 </div>

     `
     filterSection.appendChild(div)
    }
}