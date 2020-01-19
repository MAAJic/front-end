var faker = require('faker');

var database = { event: []};

for (var i = 1; i<= 300; i++) {
  database.event.push({
    eventId: i,
    eventCreator: faker.name.firstName() + ' ' + faker.name.lastName(),
    eventBanner: faker.image.imageUrl(),
    comments:[{author: faker.name.firstName() + ' ' + faker.name.lastName(), image :faker.image.imageUrl(), content: faker.lorem.paragraph()}, {author: faker.name.firstName() + ' ' + faker.name.lastName(), image :faker.image.imageUrl(), content: faker.lorem.paragraph()}, {author: faker.name.firstName() + ' ' + faker.name.lastName(), image :faker.image.imageUrl(), content: faker.lorem.paragraph()}]

  });
}

console.log(JSON.stringify(database));
