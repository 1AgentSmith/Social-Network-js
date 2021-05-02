import './App.css';
import Limited_sides from "./components/Limited_sides/Limited_sides";


function App(props) {
  return (
    <div className='main'>
        <Limited_sides state={props.state} addPost={props.addPost}/>
    </div>
  );
}

export default App;
