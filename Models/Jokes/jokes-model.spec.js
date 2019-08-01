const db = require('../../data/dbConfig');

const Jokes = require('./jokes-model');
beforeEach(async () => {
    // this function executes and clears out the table before each test
    await db('jokes').truncate();
});

describe('jokes model', () => {
    describe('insert()', () => {
        it('should insert the provided jokes into the db', async () => {
    
            await Jokes.insert({ joke: 'Why did the chicken cross the road? To get to the other side' , status: 'public', user_id: 2});
            await Jokes.insert({  joke: 'Did you hear about the crook who stole a calendar. He got twelve months' , status: 'public', user_id: 2});

            const jokes = await db('jokes');

            expect(jokes).toHaveLength(2);

        });

        it('should insert a particular joke into the db', async () => {
            let joke = await Jokes.insert({ joke: 'Who is the chicken man', status: 'private', user_id: 1});
            expect(joke.status).toBe('private');

            joke = await Jokes.insert({ joke: 'Funny', status: 'public', user_id: 1});
            expect(joke.joke).toBe('Funny');
        });
    });

    
  });