document.addEventListener('DOMContentLoaded', main);

const ramens = [
    { id: 1, name: "korjiro", restaurant: "Ichiran", image: "kojiro.jpg", rating: 8, comment: "Classic and tasty." },
    { id: 2, name: "naruto", restaurant: "Menya", image: "naruto.jpg", rating: 9, comment: "Rich and flavorful." },
    { id: 3, name: "nirvana", restaurant: "Ramen-ya", image: "nirvana.jpg", rating: 7, comment: "Creamy broth." },
    { id: 4, name: "gyukotsu", restaurant: "Hot Spot", image: "gyukotsu.jpg", rating: 10, comment: "Absolutely amazing!" },
    { id: 5, name: "shoyu", restaurant: "Green Bowl", image: "shoyu.jpg", rating: 6, comment: "Decent vegetarian option." },
];

function setupRamenImages() {
    document.addEventListener('DOMContentLoaded', main);
    
    const ramens = [
        { id: 1, name: "korjiro", restaurant: "Ichiran", image: "kojiro.jpg", rating: 8, comment: "Classic and tasty." },
        { id: 2, name: "naruto", restaurant: "Menya", image: "naruto.jpg", rating: 9, comment: "Rich and flavorful." },
        { id: 3, name: "nirvana", restaurant: "Ramen-ya", image: "nirvana.jpg", rating: 7, comment: "Creamy broth." },
        { id: 4, name: "gyukotsu", restaurant: "Hot Spot", image: "gyukotsu.jpg", rating: 10, comment: "Absolutely amazing!" },
        { id: 5, name: "shoyu", restaurant: "Green Bowl", image: "shoyu.jpg", rating: 6, comment: "Decent vegetarian option." },
    ];
    
    function setupRamenImages() {
        const ramenImages = document.querySelectorAll('#ramen-menu img');
        ramenImages.forEach(img => {
            img.addEventListener('click', handleClick);
        });
           if (ramens.length > 0) {
            displayRamenDetails(ramens[0]);
        }
    }
    
    function handleClick(event) {
        const ramenId = parseInt(event.target.dataset.id);
        const selectedRamen = ramens.find(ramen => ramen.id === ramenId);
        if (selectedRamen) {
            displayRamenDetails(selectedRamen);
        }
    }
    
    function displayRamenDetails(ramen) {
        const ramenDetail = document.getElementById('ramen-detail');
        ramenDetail.innerHTML = `
            <img src="${ramen.image}" alt="${ramen.name}">
            <h2>${ramen.name}</h2>
            <p><strong>Restaurant:</strong> ${ramen.restaurant}</p>
            <p><strong>Rating:</strong> ${ramen.rating}/10</p>
            <p><strong>Comment:</strong> ${ramen.comment}</p>
        `;
    }
    
    function addSubmitListener() {
        const form = document.getElementById('new-ramen-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
    
            const name = document.getElementById('name').value;
            const restaurant = document.getElementById('restaurant').value;
            const image = document.getElementById('image').value;
            const rating = parseInt(document.getElementById('rating').value);
            const comment = document.getElementById('comment').value;
    
            const newRamen = {
                id: ramens.length + 1,
                name: name,
                restaurant: restaurant,
                image: image,
                rating: rating,
                comment: comment
            };
    
            ramens.push(newRamen);
            // Add the new ramen image to the ramen-menu div
            const newImg = document.createElement('img');
            newImg.src = image;
            newImg.alt = name;
            newImg.dataset.id = ramens.length;
            newImg.addEventListener('click', handleClick);
            document.getElementById('ramen-menu').appendChild(newImg);
    
            form.reset();
        });
    }
    
    function main() {
        setupRamenImages();
        addSubmitListener();
    }
    const ramenImages = document.querySelectorAll('#ramen-menu img');
    ramenImages.forEach(img => {
        img.addEventListener('click', handleClick);
    });
    //Display the first ramen by default, like in the screenshot.
    if (ramens.length > 0) {
        displayRamenDetails(ramens[0]);
    }
}

function handleClick(event) {
    const ramenId = parseInt(event.target.dataset.id);
    const selectedRamen = ramens.find(ramen => ramen.id === ramenId);
    if (selectedRamen) {
        displayRamenDetails(selectedRamen);
    }
}

function displayRamenDetails(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.innerHTML = `
        <img src="${ramen.image}" alt="${ramen.name}">
        <h2>${ramen.name}</h2>
        <p><strong>Restaurant:</strong> ${ramen.restaurant}</p>
        <p><strong>Rating:</strong> ${ramen.rating}/10</p>
        <p><strong>Comment:</strong> ${ramen.comment}</p>
    `;
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const restaurant = document.getElementById('restaurant').value;
        const image = document.getElementById('image').value;
        const rating = parseInt(document.getElementById('rating').value);
        const comment = document.getElementById('comment').value;

        const newRamen = {
            id: ramens.length + 1,
            name: name,
            restaurant: restaurant,
            image: image,
            rating: rating,
            comment: comment
        };

        ramens.push(newRamen);
        // Add the new ramen image to the ramen-menu div
        const newImg = document.createElement('img');
        newImg.src = image;
        newImg.alt = name;
        newImg.dataset.id = ramens.length;
        newImg.addEventListener('click', handleClick);
        document.getElementById('ramen-menu').appendChild(newImg);

        form.reset();
    });
}

function main() {
    setupRamenImages();
    addSubmitListener();
}