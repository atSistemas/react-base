import expect from 'expect'
import reducer from '../Filters'
import types from '../../types' 



describe('filters reducer', () => {

  it('should return the initial state', () => {

    const initial = types.SHOW_ACTIVE

    expect(reducer(undefined, {})).toEqual(initial)
  })


it('should handle change filter', () => {
    expect(
      reducer([], {
        type: types.SET_VISIBILITY_FILTER, 
        filter: types.SHOW_ALL 
      })
    ).toEqual(
      types.SHOW_ALL
    )

    expect(
      reducer(
        [
           types.SHOW_ALL
        ],
        {
          type: types.SET_VISIBILITY_FILTER, 
          filter: types.SHOW_REMOVED 
        }
      )
    ).toEqual(
      types.SHOW_REMOVED 
    )
  })

})