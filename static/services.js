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
];

// function webDeveloper(servicesData) {
//     const webServices = servicesData.filter((webs) => webs.Job == "Heapware");
//     renderCards(webServices);
// }


// // This Button will show you filtered data.
// function filterIt(servicesData) {
//     const filteredServices = servicesData.filter((web) => web.id === 1);
//     renderCards(filteredServices);
// }

// This Button will show you all the data.
function allData(servicesData) {
  renderCards(servicesData);
}

// This function grabs the current user input and shows all services that have a description containing the user input 
function searchBar(element) {
    const userInput = element.value;
    const filteredServices = servicesData.filter((data) => data.description.toLowerCase().includes(userInput.toLowerCase()));
    renderCards(filteredServices);
}


// This function takes an array of services and creates divs for them.
function renderCards(services) {
	let htmlTemplate = '';
	const cardsContainer = document.querySelector('.services')
    services.forEach((node) => {
      const cards = `
      <div class= "card_items">
          <img src="${node.Image}" alt="Image Available Soon" />
          <h3>${node.title}</h3>
          <p>${node.description}</p>
          
      </div> `

      htmlTemplate += cards;
    });
    cardsContainer.innerHTML = htmlTemplate;
}


// This function gives all its data to its argument servicesData.
allData(servicesData);




