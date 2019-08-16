const assert  = require('assert');
const User = require('../src/user');

describe('Creating Records', () =>{
    it('saves a user', (done) =>{
        const trinayan = new User({ name :'Trinayan Bhatt' });
        trinayan.save()
            .then(() =>{
                // Has Trinayan been save successfully?
                assert(!trinayan.isNew);
                done();
            })
    });
});