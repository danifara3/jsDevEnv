//for the assertion in unit testing
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


//sample unit test code

describe('Our first test', ()=>{
  it('should pass',()=>{
    expect(true).to.equal(true);
  });
});

// describe('index.html', () => {
//   it('should say hello',(done) => {
//     const index = fs.readFileSync('./src/index.html', "utf-8");
//     jsdom.env(index, function(err, window){
//       const h2 = window.document.getElementsByTagName('h2')[0];
//       expect(h2.innerHTML).to.equal("Hello World");
//       done();
//       window.close();
//     });
//   });
// });

describe('index.html', () => {
  it('should have h1 that says users',(done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users Data");
      done();
      window.close();
    });
  });
});