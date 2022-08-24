import "./ButtonComponent.scss";

function ButtonComponent({addClass, buttonContent}) {


    return (
    
    <button 
    className={`button ${addClass}`} 
    type="submit" 
    value="submit">
        {buttonContent}
    </button>
  )
}
export default ButtonComponent;