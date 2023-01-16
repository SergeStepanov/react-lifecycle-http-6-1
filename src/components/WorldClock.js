import React, { useState } from 'react';
import WidgetClock from './WidgetClock';
import FormClock from './FormClock';
import ClockModel from './helperFunctions/ClockModel';
import List from './generic/List';
import ListItem from './generic/ListItem';

function WorldClock() {
  const [clocks, setClocks] = useState([
    new ClockModel('Moscow', 3),
    new ClockModel('Tokyo', 9),
  ]);

  const handleClock = (clock) => {
    const arrClocks = Array.from(clocks);
    arrClocks.push(clock);
    setClocks(arrClocks);
  };

  const hendleRemove = (id) => {
    // clocks.filter((item) => item.id !== id);
    setClocks((prevClocks) => prevClocks.filter((item) => item.id !== id));
  };

  return (
    <>
      <FormClock onAddClock={handleClock} />

      {clocks.length !== 0 && (
        <List className='row mt-5' items={clocks}>
          {(items) =>
            items.map((item) => (
              <ListItem key={item.id} id={item.id} className='col-4'>
                <WidgetClock
                  id={item.id}
                  cityName={item.cityName}
                  timeZone={item.timeZone}
                  hendleRemove={() => hendleRemove(item.id)}
                />
              </ListItem>
            ))
          }
        </List>
      )}
    </>
  );
}

export default WorldClock;
