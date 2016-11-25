(function(){
'use strict';

var chai = require('chai');
var expect = chai.expect;
var myBuzz = require('../app/fizzbuzz.js');
describe("Fizz Buzz tests ", function() {



 it("should return `Fizz` for number divisible by 3", function() {

   expect(myBuzz.fizzBuzz(3)).to.equal('Fizz');

 });



 it("should return `Buzz` for number divisible by 5", function() {

   expect(myBuzz.fizzBuzz(5)).to.equal('Buzz');

 });



 it("should return `FizzBuzz` for 15", function() {

   expect(myBuzz.fizzBuzz(15)).to.equal('FizzBuzz');

 });



 it("should return `FizzBuzz` for 45", function() {

   expect(myBuzz.fizzBuzz(45)).to.equal('FizzBuzz');

 });
})



 it("should return `FizzBuzz` for 90", function() {

   expect(myBuzz.fizzBuzz(90)).to.equal('FizzBuzz');

 });



 it("should return `Fizz` for 63", function() {

   expect(myBuzz.fizzBuzz(63)).to.equal('Fizz');

 });



 it("should return 7 since its indivisible by 3 and 5", function() {

   expect(myBuzz.fizzBuzz(7)).to.equal(7);

 });



 it("should return 101 since its indivisible by 3 and 5", function() {

   expect(myBuzz.fizzBuzz(101)).to.equal(101);

 });