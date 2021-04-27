import './App.css';
import Limited_sides from "./components/Limited_sides/Limited_sides";


function App(props) {
  return (
    <div className='main'>
        <Limited_sides postData={props.postData} DialogData={props.DialogData} MessagesData={props.MessagesData}/>
    </div>
  );
}

export default App;
