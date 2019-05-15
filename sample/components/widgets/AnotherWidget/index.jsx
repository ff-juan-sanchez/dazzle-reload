import React from 'react';
const AnotherWidget = (props) => {
  const { data } = props;
  const url = data ? data : 'http://static.simpledesktops.com/uploads/desktops/2013/08/26/JC_Desktop1.png';
  return (
    <div>
      <img src={url} width="325px" />
    </div>
  );
};

export default AnotherWidget;
