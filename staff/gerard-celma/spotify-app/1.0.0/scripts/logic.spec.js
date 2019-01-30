spotifyApi.token = 'BQDiqpdWNlnfqXa39n3gl7lp5RIj5sym9vYz4VkwugPJJVBnVrVUlwhaRjibt8qP2vlsJSR9KoGt35vHOVGK6785SPJk3S6YC5Dr2WMYflGcKJDIdJvnIeW_R9iFoGRqcHQECvbaB65u8VV-D2A'

describe('logic', function () {
    describe('search artists', function () {
        it('should succeed on mathing query', function (done) {
            const query = 'madonna'

            logic.searchArtists(query, function (error, artists) {
                expect(error).toBeUndefined()

                expect(artists).toBeDefined()
                expect(artists instanceof Array).toBeTruthy()
                expect(artists.length).toBeGreaterThan(0)

                artists.forEach(({ name }) => expect(name.toLowerCase()).toContain(query))

                done()
            })
        })

        it('should fail on empty query', function () {
            const query = ''

            expect(() => logic.searchArtists(query, function (error, artists) { })).toThrowError('query is empty')
        })
    })
})