var google = require('google');

google.resultsPerPage = 10;
var nextCounter = 0;
var data = [];

google('women in tech', function (err, next, links) {
	if (err) {
		console.log(err);
	}

	else {

		for (var i = 0; i < links.length; ++i) {
			var article = {
				title: links[i].title,
				url: links[i].link,
				desc: links[i].description
			};

			// don't send data that has null values
			if (links[i].link != null && links[i].description != '') {
				data.push(article);
			}
		}

		if (nextCounter < 0) {
			nextCounter += 1;
			if (next) {
				next();
			}
		}
	}

	console.log(data);
})