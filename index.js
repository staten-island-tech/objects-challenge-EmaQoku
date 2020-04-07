

/*  const Caroline = {
     name: "Caroline",
     dob: 2004,
     graduated: false,
     age: function(){
         console.log(this);
         return 2020 - this.dob;
     }
    };
const Diego = Caroline; */

/* const Homer = {
    name: "Homer",
    age: 32,
    family: {
         wife: {
             name: "Marge"
         },
         son:{
             name: "Bart"
         }
     },
     pets: ["cat", "dog"]
}; */

/*const Haoran = {
    name: "how",
    dob: 2001,
    year: "Senior",
    age: function(){
        return 2020- this.dob;
    }
}; 
 const Eric = Haoran.year; //reference to Haoran
Eric.name = "Eric";
const Christian = {};
Christian.dob = Haoran.dob;
Christian.dob = 2003; */
/* const calculator = {
    add: //function x + y
    subtract: //function x - y

} */


/*

const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
   
  //Challenge Questionss
  //1) Filter all presidents, leaving only the Democratic ones
 const democrat = presidents.filter(president => president.party === "D");

  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const oneTermRep = presidents.filter(function(pres){
  if(pres.terms === 1 && pres.party === "R"){
    return true;
  }
})

  //3) return only the last three presidents
  /*
  console.log(presidents[0]);
  console.log(presidents[1]);
  console.log(presidents[2]);
*/
/*const reverse = presidents.reverse().slice(presidents.length - 3);

  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
   const Dems2 = presidents
   .filter((president) => president.party === "D")
   .filter((el) => el.terms === 2);
  
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"  
/*
  if (presidents[10].terms >= 2){
    alert("LBJ served two terms")
}
else{
    alert("LBJ was one and done")
}
*/


//const headerClass = document.querySelector("#Idheader")
//const items = document.querySelectorAll(".list-item")
//const itemArr = Array.from(items);
//headerClass.textContent = "test";

/* const headerClass = document.querySelector("#Idheader");
/* const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function(){
  headerClass.classList.toggle("Karen");
}); */
//headerClass.classList.add("Karen");
//headerClass.classList.remove("Karen");

/*
 const background = document.querySelector(".background");
 const changeBtn = document.querySelector(".button");
 const headerTwo = document.querySelector(".header-two");

 changeBtn.addEventListener("click", function(){
  if(background.style.backgroundColor !== "rgb(255, 0, 0)") {
    background.style.backgroundColor = "rgb(255, 0, 0)";
    headerTwo.textContent = "RED";
  } else {
    background.style.backgroundColor = "rgb(0, 0, 255)";
    headerTwo.textContent = "BLUE";
  }
 });

*/


 ////challenge use const = R, const = B, const = G to create button with random backgroun color, use math.random and math.floor
 const background = document.querySelector(".background");
 const changeBtn = document.querySelector(".button");
 const headerTwo = document.querySelector(".header-two");

 changeBtn.addEventListener("click", function(){
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + R + "," + G + "," + B + ")";
    headerTwo.textContent = "BACKGROUND COLOR";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }
 )
