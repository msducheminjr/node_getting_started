// destructure array (note empty value not destructuring third element)
const [first, second,, fourth] = [10, 20, 30, 40];

// rest of items will be [20, 30, 40]
const [first, ...restOfItems] = [10, 20, 30, 40];

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'Ron',
  lastName: 'Paul',
}

// NOTE: This creates a shallow copy
// doctorNo: {  firstName: 'Ron', lastName: 'Paul' }
const { temp1, temp2, ...doctorNo } = data;
