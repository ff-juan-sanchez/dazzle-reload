import React from 'react';
const HelloWorld = (props) => {
  const { data } = props;
  const url = data ? data : 'http://static.simpledesktops.com/uploads/desktops/2013/08/09/space-RGB-01.png.625x385_q100.png';
  return (
    <div>
      <img src={url} width="325px" />
    </div>
  );
};

export default HelloWorld;
