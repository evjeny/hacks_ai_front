function classify(text) {
	fetch("http://192.168.140.160:8000/classify/" + text).then((response) => {
		return response.json()
	}).then((json) => {
		console.log(json)
		document.getElementById("table").innerHTML = "" 
		add_to_table("Категория товара", "Описание категории товара", "Вероятность правильности")

		for (var i = 0; i < json.categories.length; i++) {
			var cat = json.categories[i]
			console.log(cat)
			add_to_table(cat.category, cat.category_description, cat.probability.toFixed(2))
		}
	})
}

function add_to_table(category, description, probability) {
	let table = document.getElementById("table")
	var rowCount = table.rows.length;
	
	var row = table.insertRow(rowCount);
	
	var cat = document.createElement("output")
	cat.value = category
	row.insertCell(0).appendChild(cat)

	var desc = document.createElement("output")
	desc.value = description
	row.insertCell(1).appendChild(desc)

	var proba = document.createElement("output")
	proba.value = probability
	row.insertCell(2).appendChild(proba)
}
