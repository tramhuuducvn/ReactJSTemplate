import {useState} from 'react'

const courses = [
  {
    id: 1,
    name: 'HTML, CSS',
  },
  {
    id: 2,
    name: 'Javascript',
  },
  {
    id: 3,
    name: 'ReactJS',
  },
  {
    id: 4,
    name: 'Java spring',
  },
]

const UseStateDemo = () => {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id)=>{
    setChecked(prev => {
      if(prev.includes(id)){
        return prev.filter(item => item !== id)
      }
      return [...prev, id]
    })
  }

  return (
    <div style={{padding: 16}}>
      {courses.map(course => 
        (
          <div key={course.id}>
            <input 
              type="checkbox"
              onChange={() => handleCheck(course.id)}
              checked={checked.includes(course.id)}
            />
            {course.name}
          </div>
        )
      )}
    </div>
  )
}

export default UseStateDemo;


/*
<=== Simple example ===>
const data = [100, 200, 300, 400]
const [counter, setCounter] = useState(()=>{
    const total = data.reduce((total, cur)=> total + cur);
    console.log(total);
    return total;
  });

  const handleIncrease = ()=>{
    setCounter(counter + 1);
  }  
  
  const handleDecrease = ()=> {
    setCounter(counter - 1);
  }

  return (
    <div className='App' style={{padding: 16}}>
      <h1>{counter}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
*/
