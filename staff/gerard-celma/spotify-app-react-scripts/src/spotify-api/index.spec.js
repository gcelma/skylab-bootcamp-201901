'use strict'

import spotifyApi from '.'
const query = 'queen' 
const token = 'BQDVQ0ibr8XlVfVatSkuPUH0y81N5DwpBwAFC6DTW6oY_bNUWamt3JFebmmMVjncb4pNJclv8Wb-JnHlU6CkGJtsNt7DrgCL4aZzTmstVss75dqun9cOPoIB9VMfsncERlzLE2todwQKvsnsZOM'

describe('spotifyApi', () =>
    describe('searchArtists', () =>
        it('should search for artist matching query', () =>
            spotifyApi.searchArtists(query,token)
            .then(items => expect(items).toBeDefined())
            .catch(error => expect(error).toBeUndefined())
        )

        // it('should fail if query is not found', () =>
        //     spotifyApi.searchArtists()
        // )
    )
)