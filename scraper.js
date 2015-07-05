var google = require('google');	// for data gathering
var fs = require('fs');		// for writing file to be interpreted by vanilla JS elsewhere

google.resultsPerPage = 10;
google.timeSpan = 'm'; // information indexed in the past week 

var nextCounter = 0;
var data = [];

function findNews() {
	google('women in tech', function (err, next, links) {
	if (err) {
		console.log(err);
	}

	else {
		// write the opening bracket for valid json format
		var file = 'data.json';

		fs.writeFileSync(file, '[');

		// loop through the object, search for valid data, write it to the output file
		for (var i = 0; i < links.length; ++i) {
			var article = {
				title: links[i].title,
				url: links[i].link,
				desc: links[i].description
			};

			// don't send data that has null values
			if (links[i].link !== null && links[i].description !== '') {
				// hacky way of making sure json formatting is valid
				// when it reaches the last position, calls the noComma function and doesn't add an invalid comma
				if (i !== (links.length - 1)) {
					data.push(article);

					writeFile(article);
				}
				else {
					data.push(article);

					noComma(article);
				}
			}
		}

		// add closing bracket for json object
		fs.appendFileSync(file, ']');

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

function deleteFile() {
	var file = 'data.json';

	if (fs.exists(file)) {
		fs.unlink(file);
	}
}


function writeFile(article) {
	var file = 'data.json';

	fs.appendFileSync(file, JSON.stringify(article) + ',');

}

function noComma(article) {
	var file = 'data.json';

	fs.appendFileSync(file, JSON.stringify(article));

}

// because the above appends to an existing file, any current file needs to be deleted when script rerun
deleteFile();

// then create new file with new data
findNews();
