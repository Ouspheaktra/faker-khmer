var Faker = require('faker/lib');

var faker = new Faker({
	locales: {
		en: require('faker/lib/locales/en'),
		km: require('./km')
	},
	locale: 'km'
});

faker.lorem.words = function (num) {
	if (typeof num == 'undefined') { num = 3; }
	var words = [];
	for (var i = 0; i < num; i++) {
		if ((i + 1) % 7 === 0)
			words.push(' ')
		words.push(faker.lorem.word());
	}
	return words.join('');
};

faker.lorem.sentence = function (wordCount) {
	if (typeof wordCount == 'undefined') {
		wordCount = faker.random.number({ min: 3, max: 10 });
	}
	var sentence = faker.lorem.words(wordCount);
	return sentence + (faker.random.number({ max: 10 }) > 1 ? ' ។' : ' ?');
};

faker.commerce.productName = function () {
	return faker.commerce.product() +
		faker.commerce.productMaterial() +
		faker.commerce.productAdjective();
};

faker.company.companyName = function (format) {

	var formats = [
		'{{name.lastName}} {{company.companySuffix}}',
		'{{name.firstName}} {{name.lastName}} {{company.companySuffix}}',
		'{{name.lastName}} និង {{name.lastName}}'
	];

	if (typeof format !== "number") {
		format = faker.random.number(formats.length - 1);
	}

	return faker.fake(formats[format]);
}

module['exports'] = faker;