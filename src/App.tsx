import React from 'react';
import './App.css';
import Button from '../src/components/Button/Button';
import { AiFillCamera } from 'react-icons/ai';

function App(): JSX.Element {
  return (
    <div className={'container'}>
      <div className={'header'}>
        <h1>React + Typescript + Storybook</h1>
        <p>Component implementation project with storybook.</p>
      </div>
      <div className={'component-box-container'}>
        <div className={'component-box'}>
          <h2>Button</h2>
          <h3>Type</h3>
          <div className={'components'}>
            <Button designType={'primary'} text={'Primary Button'} />
            <Button designType={'default'} text={'Default Button'} />
            <Button designType={'text'} text={'Text Button'} />
            <Button designType={'link'} text={'Link Button'} />
            <Button designType={'dashed'} text={'Dashed Button'} />
          </div>
          <div className={'components'}>
            <Button text={'Danger Button'} designType={'primary'} danger />
            <Button text={'Danger Button'} danger />
            <Button text={'Danger Button'} designType={'text'} danger />
          </div>
          <div className={'components'}>
            <Button designType={'primary'} text={'Loading'} loading />
            <Button
              designType={'primary'}
              text={'Icon Button'}
              icon={<AiFillCamera />}
            />
          </div>
          <div>
            <Button designType={'primary'} text={'Block Button'} block />
          </div>
          <div />
          <h3>Size</h3>
          <div className={'components'}>
            <Button
              designType={'primary'}
              size={'large'}
              text={'Large Button'}
            />
            <Button
              designType={'primary'}
              size={'medium'}
              text={'Medium Button'}
            />
            <Button
              designType={'primary'}
              size={'small'}
              text={'Small Button'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
