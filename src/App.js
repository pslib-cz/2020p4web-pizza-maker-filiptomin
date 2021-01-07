import './App.css';
import React from 'react';
import {v4 as uuidv4} from 'uuid';

const initialList = [
  {
    id: '1',
    itemname: 'tlačenka',
    
    
  },
  {
    id: '2',
    itemname:'cibulka'
  }
]
const App = () => {
  const [list, setList] = React.useState(initialList)
  const [itemname, setName] = React.useState('')
  function handleChange(event){
    setName(event.target.value);
  }
  function handleAdd(){
    const newList = list.concat({itemname, id: uuidv4()})
    setList(newList);
    setName('')
  }
  function handleRemove(id)
  {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }
  function handleColorSwitch()
  {
    const NewList = list.concat({ite})
  }
  return(
    <div>
      <AddItem
        name={itemname}
        onChange={handleChange}
        onAdd={handleAdd}
      />
     
    <List list={list} onRemove={handleRemove}/>
    </div>
  )
}
const AddItem = ({itemname, onChange, onAdd})=>(
  <div>
        <input type="text" value={itemname} onChange={onChange}/>
        <button type="button" onClick={onAdd}>
          ADD
        </button>
      </div>
);
const List = ({ list, onRemove }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.id} item={item} onRemove={onRemove} />
    ))}
  </ul>
);
 
const Item = ({ item, onRemove }) => (
  <li>
    <span>{item.itemname}</span>
    <button type="button" onClick={() => onRemove(item.id)}>
      Remove
    </button>
    <button type="button" onClick={() => onSwitchColor(item.color)}>
      Took
    </button>
  </li>
);
export default App;
