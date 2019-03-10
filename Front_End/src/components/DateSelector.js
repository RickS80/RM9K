import React, {Fragment} from 'react';


const DateSelector = ({onDateSelect}) => {
  return (
    <div>
      <label for="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value="2019-03-22"
        min="2018-01-01"
        max="2019-12-31"
        onInput={(evt) => { onDateSelect(evt)}}
      />
    </div>
  );
}

export default DateSelector;