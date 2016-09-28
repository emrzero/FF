	var userData = {}

	function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected')
         .prop('checked', false);
}

$(document).ready(function(){

	var questions = [
		"You love horror movies",
		"You're willing to travel in a foreign country by yourself.",
		"You would give it all up to live in a sailboat and travel the world",
		"People can rarely upset you",
		"It is often difficult for you to relate to other people's feelings.",
		"In a discussion, truth should be more important than people's sensitivities.",
		"You rarely get carried away by fantasies and ideas.",
		"You think that everyone's views should be respected regardless of whether they are supported by facts or not.",
		"You feel more energetic after spending time with a group of people.",
		"Generally speaking, you rely more on your experience than your imagination."
	];

	var answers = [
		"1 Strongly Disagree",
		"2",
		"3",
		"4",
		"5 Strongly Agree"
	];



	questions.forEach(function(q) {
		var newDiv = $('<div>');
		newDiv.addClass('formgroup');
		newDiv.attr('id', 'q' + questions.indexOf(q));
		newDiv.append("<h3>" +  q + "</h3>");



		answers.forEach(function(a){


			var radioDiv = $('<div>');
			radioDiv.addClass('radio');

			var newRadioBtn = $('<input>');
			newRadioBtn.attr('type', 'radio');
			newRadioBtn.attr('name', 'survey' + questions.indexOf(q))
			newRadioBtn.attr('value', answers.indexOf(a));
			newRadioBtn.attr('data-ans',answers.indexOf(a));
			newRadioBtn.attr('data-q', questions.indexOf(q));
			radioDiv.append(newRadioBtn);

			var newLabel = $('<label>');
			newLabel.text(a);
			// newLabel.addClass('label ');
			radioDiv.append(newLabel);

			newDiv.append(radioDiv);
		});



		$('#questions').append(newDiv);
	});

	$('input[type=radio]').change(function(){
		var qNum = parseInt($(this).attr('data-q')) + 1;
		var qAns = parseInt($(this).attr('value')) + 1;

		userData[qNum] = qAns;
	});


	$('#submit').on('click', function () {

					userData.name = $('#usr').val().trim(),
					userData.photo = $('#photo').val().trim(),

				// console.log(userData);

				$.post('/api/friends', userData)
					.done(function (data) {
						// console.log(data);
						// alert("Your best match is " + data.name );
						$('#bestMatch').text(data.name);
						$('#bestMatchPhoto').attr('src', data.photo);
						$('#bestMatchModal').modal('show');

						resetForm($('#survey'));
					});

				return false;
			});

});
