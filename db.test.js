// User can create a recipe
// User can edit a recipe
// User can delete a recipe
// User can view a recipe
// User can view all recipes

const create_a_recipe = require('./index');
 
describe('create_a_recipe', () => {
  it('should create a recipe', () => {
    const recipe = {
      name: 'test',
      ingredients: ['test'],
      instructions: ['test']
    };
    return create_a_recipe(recipe)
      .then(result => {
        expect(result).to.be.an('object');
        expect(result).to.have.property('name', 'test');
        expect(result).to.have.property('ingredients', ['test']);
        expect(result).to.have.property('instructions', ['test']);
      });
  });
});