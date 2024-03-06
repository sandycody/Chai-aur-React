import Chai from './Chai.jsx';

function App() {
  // If we want to show some variables on browser then that must be done by using curly braces {}.
  const username = "Navaan Sandhu";
  const email = "Navaan@waymaker.com";
  return (
    // <></> is known as fragment
    <>
      <Chai />
      <h2>Let's show some variables : </h2>
      <div>
        <p>Username : {username}</p> {/* {username} --> this is an evaluated expression */}
        <p>Email : {email}</p>
      </div>
      <button>Mera Button</button>
    </>
  );
}

export default App;

