var list = ["The 2016 Deloitte’s Shift Index survey suggested that 80% of working professionals are dissatisfied with their job.",
            "According to Vox, nurturing interest makes people more likely to chose careers they like.",
            "3.5% of Kenya's population had a university degree while 7% have a technical training after the secondary level. This means only 10.5% of the population has a post-highschool education.",
            "According to CAK, the total mobile data/internet subscriptions stood at 47.96 million out of which 67.1 percent were on mobile broadband.",
            "According to UNICEF Data, just two in three children of lower secondary school age attended lower or upper secondary school, and only half of children of upper secondary school age attended either upper secondary school or higher education."
           ];

var fact = document.getElementById("fact");
var generateFactsButton = document.getElementById ("generateFactsButton");
var count = 0;

if (generateFactsButton){
  generateFactsButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = list[count];
  count++;
  if (count == list.length) {
    count = 0;
      console.log("list fact:", list[count]); 
}
}
/* SWAHILI*/
var listSw = ["Utafiti wa Deloitte's Shift Index wa 2016 uligundua kuwa 80% ya wataalamu wanaofanya kazi hawajaridhika na kazi zao.",
             "Kulingana na Vox, kukuza shauku kunawafanya watu wachague kazi wanazopenda.",
             "3.5% ya wakazi wa Kenya walikuwa na shahada ya chuo kikuu wakati 7% wana mafunzo ya kiufundi baada ya ngazi ya sekondari. Hii ina maana ni 10.5% tu ya watu wana elimu ya baada ya shule ya upili.",
             "Kwa mujibu wa CAK, jumla ya usajili wa data/intaneti kwa simu za mkononi ulifikia milioni 47.96 ambapo asilimia 67.1 walikuwa kwenye mtandao wa simu.",
             "Kulingana na Takwimu za UNICEF, ni watoto wawili tu kati ya watatu wa umri wa shule ya sekondari ya chini walisoma shule ya sekondari ya chini au ya juu, na nusu tu ya watoto wa umri wa shule ya sekondari ya juu walihudhuria shule ya sekondari ya juu au elimu ya juu."
           ];

var factSw = document.getElementById("factSw");
var generateFactsButtonSw = document.getElementById ("generateFactsButtonSw");
var count = 0;

if (generateFactsButtonSw){
  generateFactsButtonSw.addEventListener("click", displayFactSw);
}

function displayFactSw() {
  factSw.innerHTML = listSw[count];
  count++;
  if (count == listSw.length) {
    count = 0;
      console.log("list fact:", listSw[count]); 
}
}

