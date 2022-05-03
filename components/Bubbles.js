import { useNavigate } from "react-router-dom";

function Bubbles(props) {
  let navigate = useNavigate(); 
  const nextButton = () =>{
    let path = '/contact';
    navigate(path);
  }
  const backButton = () =>{
    let path = '/';
    navigate(path);
  }
  return (
    <div className='card2'>
      <h2>{props.text}</h2>
      <br />
      <br />
      <h2>
      Title: Lady of the Canyon
      </h2>
      <h2>
      Year: 2015
      </h2>
      <h2>
      Rated: N/A
      </h2>
      <h2>
      Genre: Drama
      </h2>
      <h2>
      Director: Maria Matteoli
      </h2>      
      <h2>
      Writer: Maria Matteoli
      </h2>
      <button className='button1' onClick={backButton}>
        Back
      </button>
      <button className='button2' onClick={nextButton}>
        Next
      </button>
    </div>
  );
}

export default Bubbles;
