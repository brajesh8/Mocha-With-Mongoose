const assert = require('assert');
const User = require('../src/user')

describe('Reading users out of the database',() =>{
    let trinayan;
    beforeEach( (done) =>{
        trinayan = new User({ name : 'Trinayan Bhatt'});
        trinayan.save()
            .then(() => done());
    });

    it('Finds all users with a name of Trinayan', (done) =>{
        User.find({ name : 'Trinayan Bhatt'})
            .then((users) =>{
                console.log(trinayan);
                console.log(users);
                assert(users[0]._id.toString() === trinayan._id.toString());
                done();
            })
    });


    it('Fina a user with a particular id', (done) =>{
        User.findOne({_id:trinayan._id})
            .then((user) =>{
                assert(user.name === 'Trinayan Bhatt');
                done();
            })
    })

})