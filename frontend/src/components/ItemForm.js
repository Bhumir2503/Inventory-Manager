import { useState } from 'react'
import { useItemsContext } from '../hooks/useItemsContext'

const ItemForm = () => {
  const { dispatch } = useItemsContext()

  const [title, setTitle] = useState('')
  const [count, setCount] = useState('')
  const [price, setPrice] = useState('')
  const [PLU, setPLU] = useState('')
  const [group, setGroup] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const item = {title, count, price, PLU, group}
    
    const response = await fetch('localhost:4000/Inventory-Manager/api/items/', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setCount('')
      setPrice('')
      setGroup('')
      setPLU('')
      dispatch({type: 'CREATE_ITEM', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Item</h3>

      <label>Item Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />
      
      <label>PLU:</label>
      <input 
        type="number" 
        onChange={(e) => setPLU(e.target.value)} 
        value={PLU}
        className={emptyFields.includes('PLU') ? 'error' : ''}
      />

      <label>Group:</label>
      <input 
        type="text" 
        onChange={(e) => setGroup(e.target.value)} 
        value={group}
        className={emptyFields.includes('group') ? 'error' : ''}
      />

      <label>Count:</label>
      <input 
        type="number" 
        onChange={(e) => setCount(e.target.value)} 
        value={count}
        className={emptyFields.includes('count') ? 'error' : ''}
      />

      <label>Price:</label>
      <input 
        type="number" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
        className={emptyFields.includes('price') ? 'error' : ''}
      />

      <button>Add Item</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ItemForm