import React from 'react';

function App(): JSX.Element {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <h1>React + Typescript + Storybook</h1>
        <p>Component implementation project with storybook.</p>
      </div>
    </div>
  );
}

export default App;
