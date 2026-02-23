1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer :
 getElementById ==>  getElementById hocche dom e thaka ekti method jeti diye html e thaka ekti eliment_e thaka specific id khujte help kore abong eti use korar maddhome oy id k call diye bhibonno logic build kora jai,
 output hishebe ekti object provite kore and jdi kicho na fai tahole null diye dey.

 getElementByClassName ==>  getElementByClassName hocche html e thka kono element_er class name khuje ber kora,jehtu ekti class onk gula element e thakte pare thai eti output hishebe ekti HTMLcollecttion provite kore ja
 onk tai array er moto kaj kore , er bishesh shubidha hocche eti live method orthad probhrti te jdi html e kono notun element plus kora hoi tahole eti auto update hoiye jai.

 querySelector ==> querySelector hocche ekti CSS selector jeti use kore css er jekhno class catch kora jai ex: docoment.querySelector(`.class`),docoment.querySelector(`#id`).eti ekti static method karon html e probhrtite
 change korle method_e ar change hobe na and arekti shubida hocche ei method condition puron kora 1st element k provide kore.

 querySelectorAll ==> querySelector at querySelectorAll er moddhe major kono differt nai tbe kicho ta ektu bhinno output provide kore , jemon : querySelector er ketthre condition puron kora 1st element k provide kore but
 querySelectorAll hocche condition puron kora sb gula element k provide kore.

2. How do you create and insert a new element into the DOM?

  answer :
  new element create : docoment.createElement(`li`) , Eikhane li name ekti element create kora holo but eikhane shes noi create kora element ti onno kono element_e add krte hbe . ex: ul.appendChild(li);
  eikhane agee thaka ekti ul list er bhito create kora li ti append hoiye geche.
  

3.  What is Event Bubbling? And how does it work?

  
 event bubbling holo JavaScript DOM-er ekta important concept. eta muloto ekta process jekhane ekta event (dhoren click event) ekta element theke onno element-e chhoriye pore.
 Shohoj bhabe bolle, jokhon apni kono element-e (dhoren ekta button-e) click koren, tokhon shei click event-ta shudhu oi button-er moddhe thake na; eta bubble ba budbud-er moto dhire dhire upor-er dike uthte thake ebong tar shob Parent element guloke touch kore,
 Jokhon apni kono nested (ekter vetore arekta) element-e click koren, tokhon event ta niche dewa sequence ba dhape dhape kaj korte thake :
 Target Element => prothome thik je element-e click kora hoyeche, shei element-ta event-ta handle kore.
 Parent Element => erpor event-ta tar thik upor-er Parent element-e chole jay.
 Top Level => ebhabe dhap-e dhap-e eta Document ebong shesh porjonto Window object porjonto pouchhay.
 
4. What is Event Delegation in JavaScript? Why is it useful?

 event delegation holo JavaScript-er emon ekta technique jekhane amra prothtekta child element_e (dhoren onek gulo button ba list item) alada alada bhabe EventListener jog na kore, tader main Parent Element-e matro ekta listener jog kore.
eta muloto Event Bubbling-er shubidha niye kaj kore. Jehetu child element-e click korle shei event-ta bubble hoye parent porjonto pouchhay, tai amra parent element-e boshei shei click-ta dhorte pari.

5. What is the difference between preventDefault() and stopPropagation() methods?

   preventDefault() :
   ei method-ta use kora hoy kono ekta element-er tader nijer  ba behavior  bondho korar jonno.ex:* Kono <a>  tag-e click korle sheta onno page-e niye jay. preventDefault()) use korle sheta ar jabe na.
   
   stopPropagation() :
   Ei method-ta use kora hoy Event Bubbling bondho korar jonno. ex: dhoren ekta <div> er bhetore ekta <button> ache. Button-e click korle event-_ta bubble hoye div-e chole jay. stopPropagation() use korle click-ta shudhu button-er moddhei thakbe, div-e jabe na.
   
