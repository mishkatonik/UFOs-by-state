console.log('running ufos.js');


fetch("../data/ufodata.json")
	.then(response => response.json())
	.then(data => {
		console.log("Got the data!");
		console.log(data);
	// TODO: Call a function to do something with this data.
});

function render() {
	let graph = document.querySelector("#graphContainer");
	let height = 70;  //need to make this changeable based on count
	let bar = document.createElement("div");
	bar.classList.add("Bar");
	bar.style.height = height + "%";
	graph.appendChild(bar);
}