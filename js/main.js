console.log('running ufos.js');

let state = []


fetch("../data/sightings-by-state.json")
	.then(response => response.json())
	.then(data => {
		console.log("Got the data!");
		console.log(data);

		render(data);
		});


let stateInput = document.querySelectorAll(".checkboxItem");



function render(data) {
	let graph = document.querySelector("#graphContainer");
	graph.innerHTML = '';
	for (let stateCount of data) {
		// set base height of bars, equal to graph height
		let baseHeight = '400px';

		// select and populate the checkbox container with states
		let checkboxContainer = document.querySelector(".StateCheckboxContainer");
		let stateLabel = document.createElement("label");
		stateLabel.innerHTML = `
			<input type="checkbox" class="checkboxItem"><span>${ stateCount.state }</span>
			`;
		checkboxContainer.appendChild(stateLabel);

		// create new bars in graph
		let newBar = document.createElement('div');
		newBar.classList.add('Bar');
		newBar.textContent = stateCount.state + ' - ' + stateCount.sightings;
		newBar.style.height = (Number(stateCount.sightings) / 10000) + '%';
		graph.appendChild(newBar);

		}
	}



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
