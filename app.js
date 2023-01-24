const countNum = document.querySelector('#count-num');
const clearButton = document.querySelector('#clear-button');
const saveButton = document.querySelector('#save-button');
const groups = [];
const totalPassengers = document.querySelector('#total-passengers');
const allGroups = document.querySelector('#all-groups');
const totalPassengersBadge = document.querySelector('.passengers-badge');
const noSavedGroups = document.querySelector('#no-saved-groups');

// Increment the count
function increment() {
    countNum.textContent = Number(countNum.textContent) + 1;
    clearButton.disabled = false;
    saveButton.disabled = false;
}

// Clear the count
function clearNum() {
    countNum.textContent = 0;
    clearButton.disabled = true;
    saveButton.disabled = true;
}

// Save group
function saveGroup() {
    groups.push(countNum.textContent);
    displayAllGroups();
    displayTotalPassengers();
    clearNum();
}

// Display total passengers
function displayTotalPassengers() {
    totalPassengers.textContent = groups.reduce((a, b) => Number(a) + Number(b));
}

// Display all groups
function displayAllGroups() {
    totalPassengersBadge.classList.remove('hidden');
    noSavedGroups.classList.add('hidden');
    allGroups.innerHTML = '';
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        const span = document.createElement('span');
        span.classList.add('badge', 'bg-success');
        span.textContent = group;
        allGroups.appendChild(span);
        if (i !== groups.length - 1) {
            allGroups.appendChild(document.createTextNode(" "));
        }
    }
}
