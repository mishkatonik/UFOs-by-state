console.log('running ufos.js');


doFetch();

// example checkbox thing from Mark:
// http://chat.kickstartcoding.com/cohort1910/pl/3x47899f83bopm4rquat6ikpoa
	let checkedThings = document.querySelectorAll("input:checked") // gets all the boxes that are currently selected
	let arrayOfCheckedThings = Array.from(checkedThings)           // turn the nodelist into an array for iteration




function doFetch() {
	fetch("../data/sightings-by-state.json")
	.then(response => response.json())
	.then(data => {
		console.log("Got the data!");
		console.log(data);
		let checkboxItem = document.querySelector(".checkboxItem");
		// create checkbox container, but only the first time the page renders
		if (typeof(checkboxItem) != 'undefined' && checkboxItem != null) {
			return;
		} else {
			makeCheckboxes(data);
		}
		render(data);
	});
}

function getInputs() {
	let checkedThings = document.querySelectorAll("input:checked");
	let arrayOfCheckedThings = Array.from(checkedThings);
	let checkedThingsValues = arrayOfCheckedThings.map(thing => thing.value);
	console.log(checkedThings);
	console.log(arrayOfCheckedThings);
	console.log(checkedThingsValues);
}


function makeCheckboxes(data) {
	// select and populate the checkbox container with states
	for (let stateCount of data) {
		let checkboxContainer = document.querySelector(".StateCheckboxContainer");
		let stateLabel = document.createElement("label");
		stateLabel.innerHTML = `
			<input type="checkbox" class="checkboxItem" onClick="getInputs()"><span>${ stateCount.state }</span>
			`;
		checkboxContainer.appendChild(stateLabel);
	}
}




function render(data) {
	let graph = document.querySelector("#graphContainer");
	graph.innerHTML = '';
	for (let stateCount of data) {
		// set base height of bars, equal to graph height
		let baseHeight = '400px';

		// create new bars in graph
		let newBar = document.createElement('div');
		newBar.classList.add('Bar');
		newBar.textContent = stateCount.state + ' - ' + stateCount.sightings;
		newBar.style.height = ((Number(stateCount.sightings) / 1000)*baseHeight) + '%';
		graph.appendChild(newBar);

		}
	}


let highest = Math.max(...powerLevels.map(pair => pair[0]));



// from 2.2 activity solution ///////////////////////////////////////////
		// let powerLevels = [
		//     [5, 'Jane'],
		//     [3, 'Kali'],
		// ];

		// function renderex() {
		//     console.log('---------- rendering!')
		//     // Fetch the div from the page
		//     let resultsDiv = document.querySelector('#results');

		//     // Clear anything that might be in the div
		//     resultsDiv.innerHTML = '';

		//     // Loop through the array of information
		//     for (let powerLevelInfo of powerLevels) {

		//         // Grab the powerLevel and name of each test subject
		//         let powerLevel = powerLevelInfo[0];
		//         let name = powerLevelInfo[1];

		//         // Create a new div that contains this information
		//         let newDiv = document.createElement('div');

		//         // Give that div the class TestSubject, and fill in text with the name
		//         newDiv.classList.add('TestSubject');

		//         // Challenge 2:
		//         newDiv.textContent = name + ' - ' + powerLevel;

		//         // Challenge 3:
		//         newDiv.style.width = powerLevel * 100 + 'px';

		//         // Add the div to the page
		//         console.log('made a new div:', newDiv)
		//         resultsDiv.appendChild(newDiv);
		//     }
		// }

// 		function recordItem() {
// 		    console.log('-------- recordItem');

// 		    // Fetch the inputs from the page (and console.log for debugging)
// 		    let nameInput = document.querySelector('#name-input');
// 		    let powerInput = document.querySelector('#power-input');
// 		    console.log('Inputs:', nameInput, powerInput);

// 		    // Get the value of the inputs (and console.log for debugging)
// 		    let name = nameInput.value;
// 		    let powerLevel = powerInput.value;
// 		    console.log('Values:', name, powerLevel);

// 		    // Challenge 4:
// 		    if (name === '') {
// 		        return; // End the function, prevent an empty input
// 		    }

// 		    // Push the new info onto the array & rerender
// 		    let pair = [powerLevel, name];
// 		    powerLevels.push(pair);
// 		    render();

// 		    // Challenge 4:
// 		    powerInput.value = '';
// 		    nameInput.value = '';
// 		}

// render();





// LIST OF STATES (if needed i hope not)
// AL
// AK
// AZ
// AR
// CA
// CO
// CT
// DE
// FL
// GA
// HI
// ID
// IL
// IN
// IA
// KS
// KY
// LA
// ME
// MD
// MA
// MI
// MN
// MS
// MO
// MT
// NE
// NV
// NH
// NJ
// NM
// NY
// NC
// ND
// OH
// OK
// OR
// PA
// RI
// SC
// SD
// TN
// TX
// UT
// VT
// VA
// WA
// WV
// WI
// WY