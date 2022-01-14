const servicesData = [
    {
        id: 1,
        "title": "Usman",
        "description": "Web Developer",
        "Image": "./first_one.jpg",

    },
    {
        id: 1,
        "title": "Umer",
        "description": "Full-Stack Developer",
        "Image": "./third_one.jpg",
    },
    {
        id: 3,
        "title": "Qaisar",
        "description": "Graphic Designer",
        "Image": "./fourth_one.jpg",

    },
    {
        
        "id": 4,
        "title": "Julia",
        "description": "UI/UX Designer",
        "Image": "./next.jpg",
        "Job": "Heapware"

    },
    {
        "title": "Alex",
        "description": "Web Developer",
        "Image": "./next_one.jpg",
    },
    {
        
        "title": "Christine",
        "description": "Full-Stack Developer",
        "Image": "./second_one.jpg",
        "Job": "Heapware"

    },
]

const runData = (servicesData) => {
    const cardContainer = document.querySelector('.services');
    i=0;
    
    do{
        let card = 
        ` <div class="card_items">
        <img src=${servicesData[i].Image} alt="">
        <h3>${servicesData[i].title}</h3>
        <p>${servicesData[i].description}</p>
    </div>`

            cardContainer.innerHTML += card;
        i++
    }
    while (i<servicesData.length)
}


// This function gives all its data to its argument servicesData.
runData(servicesData);


function webDeveloper(servicesData) {
    const webServices = servicesData.filter((webs) => webs.Job == "Heapware");
    let webTemplate = '';
    webServices.forEach((node) => {
        const cards = 
        `
        <div class= "card_items">
          <img src="${node.Image}" alt="Image Available Soon" />
          <h3>${node.title}</h3>
          <p>${node.description}</p>
          
      </div>
        `;
        webTemplate += cards;
    })
    cardsContainer.innerHTML = webTemplate;
}

const cardsContainer = document.querySelector('.services')
// This Button will show you filtered data.
function filterIt(servicesData) {
    const filteredServices = servicesData.filter((web) => web.id === 1);
    let htmlTemplate = '';
    filteredServices.forEach((node) => {
      const cards = `
      <div class= "card_items">
          <img src="${node.Image}" alt="Image Available Soon" />
          <h3>${node.title}</h3>
          <p>${node.description}</p>
          
      </div> `;
      htmlTemplate += cards;
    });
    cardsContainer.innerHTML = htmlTemplate;
}

// function filterIt(servicesData) {
//     const cardContainer = document.querySelector('.services');

//     servicesData.map((webs)=> {
//         if(webs.id == 1){
//             let card = 
//                 ` <div class="card_items">
//                 <img src=${webs.Image} alt="">
//                 <h3>${webs.title}</h3>
//                 <p>${webs.description}</p>
//             </div>
//             `
//             cardContainer.innerHTML += card;
//         }
//     })
// }
// This Button will show you all the data.
function allData(servicesData) {
    const cardContainer = document.querySelector('.services');
    
    let card = servicesData.map((Data)=> { 
        return `<div class="card_items">
        <img src=${Data.Image} alt="">
        <h3>${Data.title}</h3>
        <p>${Data.description}</p>
        </div>
        `
    })
    cardContainer.innerHTML = card;

}


function searchBar(servicesData) {
    let input = document.getElementById('search-bar').value;
    input = input.toLowerCase();
    console.log(input);
}





