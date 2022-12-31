import React, { useState } from 'react';
import Button from '../components/Button/Button';
import { AiFillCamera, AiFillDollarCircle, AiFillRocket } from 'react-icons/ai';
import Input from '../components/Input/Step2.0/Input';
import Tooltip from '../components/Tooltip/Step1.0/Tooltip';
import ModalStep1TestPage from '../components/Modal/Step1/ModalTestPage';
import ModalStep2TestPage from '../components/Modal/Step2/ModalTestPage';
import ModalStep3TestPage from '../components/Modal/Step3/ModalTestPage';

const ComponentLibraryPage = () => {
  const [clearButtonValue, setClearButtonValue] = useState('');

  return (
    <div className={'container'}>
      <div className={'header'}>
        <h1>React + Typescript + Storybook</h1>
        <p>Component implementation project with storybook.</p>
      </div>
      <div className={'component-box-container'}>
        <div className={'component-box'} id={'button'}>
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
        <div className={'component-box input'} id={'input'}>
          <h2>Input</h2>
          <h3>[Step1.0]</h3>
          <h3>Default</h3>
          <div className={'components block'}>
            <Input type={'text'} placeholder={'이름을 입력하세요'} />
            <Input type={'email'} placeholder={'이메일을 입력하세요'} />
          </div>
          <h3>Size</h3>
          <div className={'components block'}>
            <Input type={'text'} placeholder={'Small Input'} size={'small'} />
            <Input type={'email'} placeholder={'Large Input'} size={'large'} />
          </div>
          <h3>[Step1.5]</h3>
          <h3>Prefix, Suffix</h3>
          <div className={'components block'}>
            <Input
              type={'text'}
              placeholder={'URL을 입력하세요'}
              prefix={'https://'}
            />
            <Input
              type={'text'}
              value={100000}
              prefix={<AiFillDollarCircle />}
              suffix={'달러'}
            />
          </div>
          <h3>[Step2.0]</h3>
          <h3>AddOnBefore, AddOnAfter</h3>
          <div className={'components block'}>
            <Input
              type={'text'}
              placeholder={'URL을 입력하세요'}
              addOnBefore={'https://'}
            />
            <Input
              type={'text'}
              placeholder={'URL을 입력하세요'}
              addOnAfter={<AiFillRocket />}
            />
            <Input
              type={'text'}
              value={100000}
              addOnBefore={<AiFillDollarCircle />}
              addOnAfter={'달러'}
            />
          </div>
          <h3>Clear Button</h3>
          <div className={'components block'}>
            <Input
              type={'text'}
              placeholder={'포커스되면 clear button이 나타나요'}
              clear
              suffix={'원'}
              value={clearButtonValue}
              onChange={setClearButtonValue}
            />
          </div>
        </div>
      </div>
      <div className={'component-box'} id={'tooltip'}>
        <h2>Tooltip</h2>
        <div className={'components'}>
          <Tooltip tooltip={<div>tooltip content!</div>}>
            The simplest usage. Hover me
          </Tooltip>
        </div>
      </div>
      <div className={'component-box'} id={'modal'}>
        <h2>Modal</h2>
        <div className={'components'}>
          <ModalStep1TestPage />
          <ModalStep2TestPage />
          <ModalStep3TestPage />
        </div>
      </div>
    </div>
  );
};

export default ComponentLibraryPage;
