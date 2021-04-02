import React,{useState} from 'react';
import './todo.scss';
import {DatePicker} from 'antd';


function Todo () {
    const [list,setList] = useState([]);
    const [inputText,setInputText] = useState('');
    
    const [inputdate,setDate] = useState('');
    
    const addTodoItem = () => {
        if (inputText === '') {
            return alert(`You haven't specified a to do list`)
        };
        if (inputdate === '') {
            return alert(`You haven't specified a date`)
        };
        const newList = [...list];
        newList.push({
            text: inputText,
            date: inputdate,
        });
        setList(newList);
        setInputText('');        
    }
    
    function onChange(date, dateString) {
        setDate(dateString);
        
    }

    function compare(a, b) {
        if (a.text < b.text) {return -1;}
        if (a.text > b.text) {return 1;}
        return 0;
    }

 
    function addDiv () {
        
    }

    return(
        <div className="bigDiv">
            <div className="header">To-Do<button className="sort" onClick={()=>{
                let data2 = [...list]
                data2.sort(compare)
                setList(data2)
            }}>sort</button></div>
            <div className="addTodo"> <h3 onClick={addDiv()}>+ Add a to-do</h3></div>
            <div className="todoList">
                <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
                <DatePicker  onChange={onChange} style={{height:'30px'}} />               
                <button onClick={addTodoItem}>add</button>
              
            </div>
            <div className="list">
                

                <ul>
                    

                        {list.map(((item,index) => <li>{item.text} <p style={{color:'gray'}}>date:{item.date}</p> <button onClick={()=>{
                            let data = [...list]
                            data.splice(index,1)
                            setList(data)                       
                        }}>done</button></li>))}
                </ul>
            </div>
        </div>
    )

}

export default Todo;