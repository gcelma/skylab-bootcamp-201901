'use strict'

const user = {
    collection: null,

    add(user) {
        if(!user instanceof Object) throw TypeError(`${user} is not an object`)

        return this.collection.insertOne(user)
            .then(res => res.insertedId.toString())
    },

    findByEmail(userEmail) {
        if(typeof userEmail !== 'string') throw TypeError(`${userEmail} is not a string`)
        if(!userEmail.trim().length) throw Error(`${userEmail} is empty or blank`)

        return this.collection.findOne({email: userEmail})
            .then(user => {
                if (!user) return null
                user.id= user._id.toString()

                delete user._id

                return user
            })

    },

    findById(id) {
        if(typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if(!id.trim().length) throw Error(`${id} is empty or blank`)

        return this.collection.findOne({_id: ObjectId(id)})
            .then(user => {
                if (!user) return null

                return user
            })
    }
}

module.exports = user