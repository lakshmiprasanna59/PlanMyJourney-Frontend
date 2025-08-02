    let n = document.querySelector("#userName");
    const name = localStorage.getItem("username");
      
    if (name) {
        n.textContent = name;
    } else {
        n.textContent = "Guest";
    }

const pack = [
    //0
    {
        route: "Delhi → Rishikesh → Auli → Joshimath → Chopta → Dehradun (via Haridwar)",
        days : "7 Days / 6 Nights",
        cost : "₹28,000 per person (inclusive of stay, travel, food & guide)"
    },
    //1
    {
        route: "India → Singapore (Marina Bay, Sentosa, Gardens by the Bay) → Kuala Lumpur (Petronas Towers, Batu Caves) → Genting Highlands / Melaka → India",
        days : "7 Days / 6 Nights",
        cost : "₹89,999 per person (All inclusive)"
    },
    //2
    {
        route: "Delhi → Agra → Jaipur → Amritsar → Dharamshala → Manali",
        days : "9 Days / 8 Nights",
        cost : "₹35,000 per person"
    },
    //3
    {
        route: "Bangalore → Mysore → Ooty → Munnar → Alleppey → Kochi",
        days : "8 Days / 7 Nights",
        cost : "₹32,000 per person"
    },
    //4
    {
        route: "Manali → Jispa → Sarchu → Leh → Pangong → Nubra → Leh → Manali",
        days : "6–8 Days",
        cost1: "₹18,000 (without bike rental)",
        cost2: "₹25,000 (with bike & support van)"
    },
    //5
    {
        route: "Port Blair → Havelock Island → Neil Island → Port Blair",
        days : "5 Days / 4 Nights",
        cost : "₹35,000 per person"
    },
    //6
    {
        route: "Coorg → Wayanad → Munnar → Thekkady",
        days : "6 Days / 5 Nights",
        cost : "₹26,000 per person"
    },
    //7
    {
        route: "Pune → Lonavala (Karla Caves – volcanic rock-cut temples) → Ellora Caves (Basalt wonders & Kailasa Temple) → Lonar Crater (World's 3rd largest impact crater lake) → Mawlynnong (Meghalaya) (Cleanest village & living root bridges) → Majuli Island (Assam) (Largest river island) → Return via Guwahati",
        days : "6 Days / 5 Nights",
        cost : "₹44,999 per person (Includes Everything)"
    }
];

let costOfPack = [28000, 89999, 35000, 32000, 18000, 35000, 26000, 44999];

const packageInt = document.querySelector('#package');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const customBox = document.querySelector('#customNotes');
const checkBox = document.querySelector('#checkBike');

let index = -1;

//Selecting Package
packageInt.addEventListener("change", function() {
    packageDetails();
    amountToBePaid();
});

//Filling package details textarea
let packageDetails = () => {
    index = parseInt(packageInt.value);
    customBox.disabled = true;
    checkBox.disabled = true;

    console.log("Selected Index:", index);
    console.log("Pack at index:", pack[index]);

    if(index === 8) {
        customBox.disabled = false;
        p1.textContent = "Enter your route map in custom ";
        p2.textContent = "As per your plan";
        p3.textContent = "Calculated based on your details. Feel free to reach out to us for a custom quote in inquiry.";
    } else if(index === 4) {
        checkBox.disabled = false;
        p1.textContent = pack[index].route;
        p2.textContent = pack[index].days;
        p3.textContent = pack[index].cost1;
    } else {
        p1.textContent = pack[index].route;
        p2.textContent = pack[index].days;
        p3.textContent = pack[index].cost;
    }
}

//After check box toggle
checkBox.addEventListener("change", function() {
    if (checkBox.checked) {
        costOfPack[4] = 25000;
        p3.textContent = pack[index].cost2;
        amountToBePaid();
    } else {
        costOfPack[4] = 18000;
        p3.textContent = pack[index].cost1;
        amountToBePaid();
    }
});

//amount to be paid
let size = document.querySelector('#groupSize');
let amount = document.querySelector('#amount');
amount.value = 'Amount will be shown here';

let amountToBePaid = () => {
    let groupSize = parseInt(size.value);

    let total = groupSize * costOfPack[index];
    
    if(!isNaN(groupSize) && groupSize > 0 && index !== 8) {
        amount.value = `₹${costOfPack[index]} × ${groupSize} = ₹${total}`;
    } else {
        amount.value = 'Amount will be shown here';
    }
}

size.addEventListener("input", function() {
    amountToBePaid();
});