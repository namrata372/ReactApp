import React from 'react';
function Welcome(props) {
  return <h6>Hello, {props.name}</h6>;
}

function Props() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
