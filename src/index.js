import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('N0,0.00');
//was added to debug the code and show actual code
//debugger;
console.log(`I would pay ${courseValue} for this awesome course!`); //eslint-disable-line no-console