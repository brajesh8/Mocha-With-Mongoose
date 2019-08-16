const assert = require('assert');
const User = require('../src/user')

describe('Updating Records', () =>{
    let trinayan;

    beforeEach((done) =>{
        trinayan = new User({ name : 'Trinayan Bhatt',postCount : 0});
        trinayan.save()
            .then(() => done());
    });

    function assertName(operation,done){
        operation
        .then(() => User.find({}))
            .then((users) =>{
                assert(users.length === 1);
                assert(users[0].name === 'Brajesh');
                done();
            })
    }

    it('Instance type using  set and save', (done) =>{        
        trinayan.set('name','Brajesh');
        assertName(trinayan.save(),done);
            
    });

    it('A model instance can update', (done) =>{        
        assertName(trinayan.update({name : 'Brajesh'}),done);
    });

    it('A model class can update', (done) =>{        
        assertName(
        User.update({name : 'Trinayan Bhatt'},{name:'Brajesh'})
        ,done);
    });

    it('A model class can update one record', (done) =>{        
        assertName(
            User.findOneAndUpdate({name : 'Trinayan Bhatt'},{name:'Brajesh'})
            ,done);
    });

    it('A model class can find a record with an Id andupdate', (done) =>{        
        assertName(
            User.findByIdAndUpdate(trinayan._id,{name:'Brajesh'})
            ,done);
    });

    it('A user can have their postCount incremented by 1', (done) =>{
        User.update({name :'Trinayan Bhatt'},{$inc: {postCount:1}})
            .then(() => User.findOne({name :'Trinayan Bhatt'}))
            .then((user) =>{
                assert(user.postCount === 1);
                done();
            });
    });


});

