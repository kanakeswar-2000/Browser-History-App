const Historyitem = props => {
  const {historyDetails, deleteitem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteitem(id)
  }
  return (
    <li className="history-item-container">
      <div>
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="container">
        <div className="app-details-container">
          <img src={logoUrl} className="app-image" alt="domain logo" />
          <p className="app-name">{title}</p>
          <p className="app-url">{domainUrl}</p>
        </div>
        <button type="button" data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default Historyitem
