import { useNavigate } from "react-router-dom";

function Start(props) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `random`; 
    navigate(path);
  }
  return (
    <div className='card1'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={routeChange}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Start;