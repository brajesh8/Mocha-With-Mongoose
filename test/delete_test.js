const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () =>{
    let trinayan;
    beforeEach((done) =>{
        trinayan = new User({ name :'Trinayan Bhatt'});
        trinayan.save()
            .then(()=> done());
    });

    it('MODEL instance remove' ,(done) =>{
        trinayan.remove()
            .then(() => User.findOne({name :'Trinayan Bhatt'}))
            .then((user) => {
                assert(user === null);
                done();
            })
    });

    it('Class method remove', (done) =>{
        // Remove a bunch of records with some given criteria
        User.remove({name : 'Trinayan Bhatt'})
        .then(() => User.findOne({name :'Trinayan Bhatt'}))
        .then((user) => {
            assert(user === null);
            done();
        });
    });

    it('Class method findOneAndRemove', (done) =>{
        User.findOneAndRemove({ name : 'Trinayan Bhatt'})
            .then(() => User.findOne({name :'Trinayan Bhatt'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('Class method findByIdAndRemove', (done) =>{
        User.findByIdAndRemove(trinayan._id)
        .then(() => User.findOne({name :'Trinayan Bhatt'}))
        .then((user) => {
            assert(user === null);
            done();
        });
    });
})