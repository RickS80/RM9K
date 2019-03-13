import React, {Fragment} from 'react';


const DateSelector = ({onDateSelect}) => {
  return (
    <Fragment>
      <label for="date">Date   </label>
      <input
        className="date-input"
        type="date"
        id="date"
        name="date"
        defaultValue="2019-04-14"
        min="2018-01-01"
        max="2019-12-31"
        onInput={(evt) => { onDateSelect(evt)}}
      />
    </Fragment>
  );
}

export default DateSelector;