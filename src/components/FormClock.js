import React, { useState } from 'react';
import Button from './generic/Button';
import Input from './generic/Input';
import ClockModel from './helperFunctions/ClockModel';


export default function FormClock({ onAddClock }) {
  const [form, setForm] = useState({ cityName: '', timeZone: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataClock = new ClockModel(form.cityName, form.timeZone);
    onAddClock(dataClock);

    setForm({ cityName: '', timeZone: '' });
  };

  return (
    <form id='form' className='row form-city mt-4' onSubmit={handleSubmit}>
      <div className='col-4'>
        <label className='w-100' htmlFor='cityName'>
          Название
        </label>
        <Input
          type='text'
          value={form.cityName}
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
          min={-12}
          max={14}
          value={form.timeZone}
          onChange={handleChange}
          name='timeZone'
          required
        />
      </div>

      <Button className='btn btn-primary col-3'>Добавить</Button>
    </form>
  );
}
