import React, { useState } from 'react';
//import todo from '../images/todo.svg';
import '../App.css';

const Todolist = () => {
    
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([]);

    const addItem = () => {
        if(!inputData){

        }else{
            setItems([...items,inputData]);
            setInputData('');
        }
        
    }

    //delete Items

    const deleteItem = (id) => {

        const updatedItems = items.filter((elem, ind) => {
            return ind !== id;
        });

        setItems(updatedItems);
    }

    // remove all

    const removeAll = () => {

        setItems([]);
    }
    
    return(
        <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src="https://i.imgur.com/OvMZBs9.jpg" alt='todologo'/>
                    <figcaption>Add Your List Here ✌️ </figcaption>
                </figure>
              
                <div className='addItems'>
                    <input type='text' placeholder=" ✍️ Add Items ... "
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    ></input>
                    <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
                </div>

                <div className='showItems'>

                    {
                        items.map((element , index) => {
                            return (
                        <div className="eachItem" key={index}>
                            <h3>{element}</h3>
                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={ () => deleteItem(index)}></i>
                        </div>
                            )
                        })
                    }

                    
                </div>
                {/* Clear all button */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button> 
                </div>
            </div>
        </div>
        </>
    )

}

export default Todolist;