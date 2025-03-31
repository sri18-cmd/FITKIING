const equipmentData = [
    { name: "Dumbbells", description: "Set of adjustable dumbbells", count: 0, reviews: [] },
    { name: "Resistance Bands", description: "Various resistance bands for strength training", count: 0, reviews: [] },
    { name: "Yoga Mat", description: "High-quality yoga mat", count: 0, reviews: [] },
    { name: "Jump Rope", description: "Speed jump rope for cardio workouts", count: 0, reviews: [] },
    { name: "Stability Ball", description: "Exercise ball for core stability exercises", count: 0, reviews: [] },
    { name: "Kettlebell", description: "Cast iron kettlebell for strength and cardio workouts", count: 0, reviews: [] },
    { name: "Pull-up Bar", description: "Doorway pull-up bar for upper body strength training", count: 0, reviews: [] },
    { name: "Foam Roller", description: "Foam roller for self-myofascial release and recovery", count: 0, reviews: [] },
    { name: "Weight Bench", description: "Versatile weight bench for various strength exercises", count: 0, reviews: [] },
    { name: "Medicine Ball", description: "Weighted medicine ball for strength and coordination exercises", count: 0, reviews: [] }
];

// Load availability data from localStorage
if (localStorage.getItem('equipmentAvailability')) {
    const storedAvailability = JSON.parse(localStorage.getItem('equipmentAvailability'));
    equipmentData.forEach((equipment, index) => {
        equipment.count = storedAvailability[index].count;
    });
}

function displayEquipmentList() {
    const equipmentListSection = document.getElementById('equipment-list');

    equipmentData.forEach(equipment => {
        const equipmentItem = document.createElement('div');
        equipmentItem.classList.add('equipment-item');
        equipmentItem.innerHTML = `
            <img src="images/${equipment.name.toLowerCase().replace(/\s/g, '')}.jpeg" alt="${equipment.name}">
            <h2>${equipment.name}</h2>
            <p>${equipment.description}</p>
            <p>Availability: <span id="${equipment.name.toLowerCase().replace(/\s/g, '')}-count">${equipment.count}</span></p>
        
            <button class="request-button" onclick="requestEquipment('${equipment.name}')">Request</button>
        `;
        if (equipment.count === 0) {
            equipmentItem.querySelector('.request-button').style.display = 'none'; // Hide request button if availability is 0
        }
        equipmentListSection.appendChild(equipmentItem);
    });
}

function shareEquipment(equipmentName) {
    equipmentData.forEach(equipment => {
        if (equipment.name === equipmentName && equipment.count === 0) {
            equipment.count = 1; // Increase count by 1
            localStorage.setItem('equipmentAvailability', JSON.stringify(equipmentData)); // Update availability data in localStorage
            const countElement = document.getElementById(`${equipmentName.toLowerCase().replace(/\s/g, '')}-count`);
            countElement.textContent = equipment.count;
            alert(`Thanks for sharing ${equipmentName}! It's now available with count ${equipment.count}.`);
        } else if (equipment.name === equipmentName && equipment.count !== 0) {
            alert(`You have already shared ${equipmentName}.`);
        }
    });
}

function requestEquipment(equipmentName) {
    equipmentData.forEach(equipment => {
        if (equipment.name === equipmentName && equipment.count > 0) {
            equipment.count--; // Decrease count by 1
            localStorage.setItem('equipmentAvailability', JSON.stringify(equipmentData)); // Update availability data in localStorage
            const countElement = document.getElementById(`${equipmentName.toLowerCase().replace(/\s/g, '')}-count`);
            countElement.textContent = equipment.count;
            alert(`You have requested ${equipmentName}. Please wait for confirmation.`);
        } else if (equipment.name === equipmentName && equipment.count === 0) {
            alert(`Sorry, ${equipmentName} is currently unavailable.`);
        }
    });
}

document.addEventListener('DOMContentLoaded', displayEquipmentList);
