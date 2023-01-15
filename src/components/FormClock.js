import React from 'react';
import Button from './generic/Button';
import Input from './generic/Input';

export default function FormClock({ state, handleSubmit, handleChange }) {
  return (
    <form id='form' className='row form-city' onSubmit={handleSubmit}>
      <div className='col-4'>
        <label className='w-100' htmlFor='cityName'>
          Название
        </label>
        <Input
          type='text'
          value={state.cityName}
          onChange={handleChange}
          name='cityName'
          required
        />
      </div>

      <div className='col-4'>
        <label className='w-100' htmlFor='timeZone'>
          Временная зона
        </label>
        <Input
          type='number'
          step='1'
          value={state.timeZone}
          onChange={handleChange}
          name='timeZone'
          required
        />
      </div>

      <Button className='btn btn-primary col-3'>Добавить</Button>
    </form>
  );
}
