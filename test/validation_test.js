const assert = require('assert');
const User = require('../src/user');


describe('Validating Records', () =>{
    it('Requires a user name', (done) =>{
        const user = new User({name:undefined});
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name
        console.log(message)
        assert(message ==='User name not provided.');
        done();
    });

    it('Disallows invalid records from being saved',(done) =>{
        const user = new User({name:'Dk'});
        user.save()
            .catch((err) =>{
                const {message} = err.errors.name;
                assert(message === 'Name must be longer than 2 characters.');
                done();
            })
        //done();
    });


    it('Requires a user name longer than 2 characters', (done) =>{
        const user = new User({name:'DK'});
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name
        console.log(message)
        assert(message ==='Name must be longer than 2 characters.');
        done();  
    });
});