const uuid = require('uuid/v4')
const fsp = require('fs').promises // WARN need node v10+
const path = require('path')

const artistComment = {
    file: 'artist-comments.json',

    __load__(file) {
        return fsp.readFile(file)
            .then(content => JSON.parse(content))
    },

    __save__(file, comments) {
        return fsp.writeFile(file, JSON.stringify(comments, null, 4))
    },

    add(comment) {
        // TODO validate comment (should all field values and types)

        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                comment.id = uuid()

                comments.push(comment)

                return this.__save__(file, comments)
            })
    },

    retrieve(id) {
        // TODO validate id

        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                const comment = comments.find(comment => comment.id === id)

                if (typeof comment === 'undefined') return null

                comment.date = new Date(comment.date)

                return comment
            })
    },

    update(comment) {
        // TODO validate comment (should all field values and types)
        
        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                const index = comments.findIndex(_comment => _comment.id === comment.id)

                if (index < 0) throw Error(`comment with id ${comment.id} not found`)

                comments[index] = comment

                return this.__save__(file, comments)
            })
    },

    remove(id) {
        // TODO validate id

        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                const index = comments.findIndex(comment => comment.id === id)

                if (index < 0) throw Error(`comment with id ${id} not found`)

                comments.splice(index, 1)

                return this.__save__(file, comments)
            })
    },

    removeAll() {
        const file = path.join(__dirname, this.file)
        
        return this.__save__(file, [])
    },

    find(criteria) {
        // TODO validate criteria

        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                const filtered = comments.filter(comment => {
                    for (const key in criteria)
                        if (comment[key] !== criteria[key]) return false

                    return true
                })

                filtered.forEach(comment => comment.date = new Date(comment.date))

                return filtered
            })
    }
}

module.exports = artistComment

    // add(comment) {
    //     comment.id= uuidv4()

    //     return fsPromises.readFile(file, 'utf8')
    //         .then(content => JSON.parse(content))
    //         .then(content => {
    //             content.push(comment)
    //             return content
    //         })
    //         .then(content => fsPromises.writeFile(file, JSON.stringify(content)))
    // },

    // retrieve(commentId) {
    //     return fsPromises.readFile(file, 'utf8')
    //         .then(content => JSON.parse(content))
    //         .then(content => {
    //             let results= content.find(comment => comment.id === commentId )
    //             return results? results: null
    //         })
    // },

    // update(newComment) {
    //     return fsPromises.readFile(file, 'utf8')
    //         .then(content => JSON.parse(content))
    //         .then(content => {
    //                 // content.forEach(comment => {
    //                 //     if(comment.id === newComment.id && comment.text !== newComment.text) {
    //                 //         comment.text = newComment.text
    //                 //     }
    //                 // })
    //                 let index = content.findIndex(comment => comment.id === newComment.id)
    //                 content.splice(index, 1)
    //                 content.push(newComment)
                
    //             return content
    //         })
    //         .then(content => fsPromises.writeFile(file, JSON.stringify(content)))
    // },

    // delete(commentId) {
    //     return fsPromises.readFile(file, 'utf8')
    //         .then(content => JSON.parse(content))
    //         .then(content => {
    //                 let index = content.findIndex(comment => comment.id === commentId)
    //                 content.splice(index, 1)
                
    //             return content
    //         })
    //         .then(content => fsPromises.writeFile(file, JSON.stringify(content)))    

    // },

    // find(criteria) {
    //     return fsPromises.readFile(file, 'utf8')
    //         .then(content => JSON.parse(content))
    //         .then(content => {
    //             Object.keys(criteria).forEach(key => content = content.filter(comment => comment[key] === criteria[key]))

    //             return content
    //         })
    // }
// }

// module.exports = artistComment