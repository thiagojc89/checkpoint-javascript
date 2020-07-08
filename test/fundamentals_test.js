const expect = require("chai").expect
const { foods, last, favoriteFoods, instructor } = require('../fundamentals.js');

describe('foods', () => {
  it('foods is an array', function () {
    expect(foods).to.be.an('array')
  })
  it('foods contains three strings', function() {
    expect(foods.length).to.equal(3)
    expect(foods.every(food => food.constructor === String)).to.equal(true)
  })
})

describe('last', ()=> {
  it('last is a string', function() {
    expect(last).to.be.a('string')
  })
  it('last is equal to the last item in foods', function() {
    expect(last).to.equal(foods[2])
  })
})

describe('favoriteFoods',()=> {
  it('favoriteFoods is defined', function() {
    expect(favoriteFoods).to.be.not.undefined
  })
  it('favoriteFoods is an array', function() {
    expect(favoriteFoods).to.be.an('array')
  })
})

describe('favoriteFoods', ()=> {
  it('favoriteFoods contains three foods', function() {
    expect(favoriteFoods.length).to.equal(3)
  })
  it('favoriteFoods contains the same values as foods', function() {
    expect(
      favoriteFoods.reduce((a, b) => a + b)
    ).to.equal(
      foods.reduce((a, b) => a + b)
    )
  })
})

describe('instructor', ()=> {
  it('instructor is an object', function() {
    expect(instructor).to.be.an('object')
  })
  it('instructor has three key-value pairs', function() {
    expect(Object.keys(instructor).length).to.be.above(3)
  })
})

describe('instructor', ()=> {
  it('instructor has four key-value pairs', function() {
    expect(Object.keys(instructor).length).to.be.equal(4)
  })
  it('instructor has a hasOfficeHours property', function() {
    expect(instructor).to.have.property('hasOfficeHours')
  })
  it('hasOfficeHours has a boolean value', function() {
    expect(instructor).property('hasOfficeHours').to.be.a('boolean')
  })
})