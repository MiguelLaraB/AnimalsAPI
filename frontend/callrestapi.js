var url = "http://localhost:3300/api/animals";

function postAnimal() {
	console.log(url);

	var myName = $('#name').val();
	var myAnimal =$('#animal').val();
	var myDate = $('#date').val();
	var myComments = $('#comments').val();
	var myUrl = $('#url').val();

	var myanimal = {
		name: myName,
		animal: myAnimal,
		date: myDate,
		comments: myComments,
		url: myUrl
	};
	console.log(myanimal);

	$.ajax({
		url: url,
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		success: function (data) {
			console.log(data);
			$('#resultado').html(JSON.stringify(data.animal));
		},
		data: JSON.stringify(myanimal)
	});
}

function getAnimal() {
	console.log(url);

	$.getJSON(url,
		function(json) {
			console.log(json);

			var arrAnimals = json.animals;

			var htmlTableAnimals = '<table border=1>';

			arrAnimals.forEach(function(item) {
				console.log(item);
				htmlTableAnimals += '<tr>' +
					'<td>' + item.id + '</td>' +
					'<td>' + item.animal + '</td>'+
					'<td>' + item.name + '</td>' +
					'<td>' + item.date + '</td>' +
					'<td>' + item.comments + '</td>' +
					'<td> <img src= "' + item.url + '"style= "max-width:150px; max heigth: 150px;"> </td>' +
					'</tr>';
			});

			htmlTableAnimals += '</table>';

			$('#resultado').html(htmlTableAnimals);

		}
	);
}
