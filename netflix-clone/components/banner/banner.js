import React from 'react';

const Banner = (props) => {
  const { title, subTitle, imgUrl } = props;

  const handleOnPlay = () => {
    console.log('handleOnPlay');
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <button onClick={handleOnPlay}></button>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
        }}
      >
        hello
      </div>
    </div>
  );
};

export default Banner;
