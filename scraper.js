var google = require('google');	// for data gathering
var fs = require('fs');		// for writing file to be interpreted by vanilla JS elsewhere

google.resultsPerPage = 10;

var nextCounter = 0;
var data = [];

function findNews() {
	google('site:news.google.com women in tech', function (err, next, links) {
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
			if (links[i].link !== null && links[i].description !== '') {
				data.push(article);

				writeFile(article);
			}
		}
		// nonop right now, this can be adjusted to gather more than 10 results max
		if (nextCounter < 0) {
			nextCounter += 1;
			if (next) {
				next();
			}
		}
	}
});

}


function writeFile(article) {
	var file = 'data.json';

	fs.appendFileSync(file, JSON.stringify(article));

}

findNews();
