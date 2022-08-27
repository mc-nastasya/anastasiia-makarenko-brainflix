import "./FormSubmitted.scss"

function FormSubmitted({setIsSubmitted}) {

  const handleClick = (event)=>{
    event.preventDefault();
    setIsSubmitted(false);
  }

  return (
    <div className="user-notification">
      <p className="user-notification__text">Your video was successfully published</p>
      <button className="user-notification__button" type="button" onClick={handleClick}>Thanks</button>
    </div>
  )
}
export default FormSubmitted