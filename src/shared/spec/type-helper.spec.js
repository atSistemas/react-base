import expect from 'expect'
import fetchTypes from '../../types/fetch-types'
import { typeBuilder, generetaFetchTypes } from '../type-helper'

describe('shared', () => {

  describe('type helper', () => {

    it('should return type builder object', () => {

      let TypeExamples = ['typeExample', 'typeExample2']

      let types = typeBuilder(TypeExamples)

      expect(types.typeExample).toEqual('typeExample') 

      expect(types.typeExample2).toEqual('typeExample2') 

    })

    it('should return fetch tyspes', () => {

      let TypeExamples = 'TEST'

      let types = generetaFetchTypes(TypeExamples)

      expect(types.length).toEqual(3) 

      expect(types[0]).toEqual('TEST_REQUEST')      
      expect(types[1]).toEqual('TEST_SUCCESS')
      expect(types[2]).toEqual('TEST_ERROR')

    })

  })

})