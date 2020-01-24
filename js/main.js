console.log('running ufos.js');


doFetch();



function doFetch() {
	fetch("../data/sightings-by-state.json")
	.then(response => response.json())
	.then(data => {
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

// work in progress...ideally get inputs and make new state to render from
function getInputs() {
	let checkedThings = document.querySelectorAll("input:checked");
	let arrayOfCheckedThings = Array.from(checkedThings);
	let checkedThingsValues = arrayOfCheckedThings.map(thing => thing.value);
	console.log(checkedThings);
	console.log(arrayOfCheckedThings);
	console.log(checkedThingsValues);
}


// select and populate the checkbox container with states from data
function makeCheckboxes(data) {
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



// For setting bar height based on highest sightings count of selected states:
// let highest = Math.max(...powerLevels.map(pair => pair[0]));






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