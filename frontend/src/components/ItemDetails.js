import { useItemsContext } from '../hooks/useItemsContext'



const ItemDetails = ({ item }) => {
  const { dispatch } = useItemsContext()

  const handleClick = async () => {
    const response = await fetch('/api/items/' + item._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_ITEM', payload: json})
    }
  }

  return (
    <div className="item-details">
      <h4>{item.title}</h4>
      <p><strong>PLU: </strong>{item.PLU}</p>
      <p><strong>Group: </strong>{item.group}</p>
      <p><strong>Price: </strong>{item.price}</p>
      <p><strong>Count: </strong>{item.count}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default ItemDetails