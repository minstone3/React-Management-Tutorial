import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '홍길동1',
      'birthday': '44444',
      'gender': '여1',
      'job': '프로그래머'
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '홍길동2',
        'birthday': '123',
        'gender': '여2',
        'job': '프로그래머'
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '홍길동3',
        'birthday': '1223',
        'gender': '여3',
        'job': '프로그래머3'
    },

]

function App() {
  return (
      <div>
          {
              customers.map(c => {
                  return (
                      <Customer
                          key={c.id}
                          id={c.id}
                          image={c.image}
                          name={c.name}
                          birthday={c.birthday}
                          gender={c.gender}
                          job={c.job}
                      />

                  );
              })
          }
      </div>
  );
}

export default App;
