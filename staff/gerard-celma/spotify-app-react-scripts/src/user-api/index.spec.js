'use strict'

import userApi from '.'

describe('user api', () => {
    const username = `manuelbarzi-${Math.random()}`
    const password = '123'


    describe('register', () => {
        it('should succeed on correct data', () =>
            userApi.register(username, password)
                .then(id => expect(id).toBeDefined())
                .catch(error => expect(error).toBeUndefined())
        )

        it('should fail on already existing user', () =>
            userApi.register(username, password)
                .then(() => {
                    throw Error('should not have passed by here')
                })
                .catch(error => {
                    expect(error).toBeDefined()
                    expect(error.message).toBe(`user with username \"${username}\" already exists`)
                })
        )
    })

    describe('auth', () => {
        it('should succeed on correct data', () =>
            userApi.authenticate(username, password)
                .then(data => expect(data.token).toBeDefined())
                .catch(error => expect(error).toBeUndefined())
        )

        const username1 = `gcelm`
        const password1 = '123'

        it('should fail on not existing user', () =>
            userApi.authenticate(username1, password1)
                .then(() => {
                    throw Error('should not have passed by here')
                })
                .catch(error => {
                    expect(error).toBeDefined()
                    expect(error.message).toBe(`user with username \"${username1}\" does not exist`)
                })
        )
    })

    describe('retrieve', () => {
        it('should succeed on correct data', () =>
            userApi.authenticate(username,password)
            .then((data) => 
                userApi.retrieve(data.id,data.token)
                .then(res => { 
                    expect(res.username).toBe(username)
                    expect(res.id).toBe(data.id)
                })
            ) 
        )

        it('should fail on incorrect id', () =>
            userApi.authenticate(username,password)
            .then((data) => 
                userApi.retrieve("falseid",data.token)
                .then(() => {
                    throw Error('should not have passed by here')
                })
                .catch(error => {
                    expect(error).toBeDefined()
                    expect(error.message).toBe(`token id \"${data.id}\" does not match user \"falseid\"`)
                })
            )
        )
    })

    describe('update', () => {
        it('should succeed on adding new data', () =>
            userApi.authenticate(username,password)
            .then((data) =>
                userApi.update(data.id,data.token,{age:34})
                .then((res) => expect(res).toBeTruthy())
                .then(() => 
                    userApi.retrieve(data.id,data.token)
                    .then((info) => expect(info.age).toBe(34))
                )
            )
        )
    })

    describe('remove', () => {
        it('should remove user', () =>
            userApi.authenticate(username,password)
            .then((data) =>
                userApi.remove(data.id,data.token,username,password)
                .then(res => expect(res).toBeTruthy())
            )
        )
    })
})