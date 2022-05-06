import React, { useState } from 'react';

const MemeGenerator = () => {
  const [topText, setTopText] = useState<string>('');
  const [bottomText, setBottomText] = useState<string>('');
  const [randomImg, setRandomImg] = useState<string>(
    'https://i.imgflip.com/1bij.jpg'
  );
  const [allMemeImgs, setAllMemeImgs] = useState<[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTopText(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Submitted!');
  };
  return (
    <div className='row'>
      <form className='meme-form' onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          onChange={(e) => handleChange(e)}
          name='topText'
          value={topText}
          placeholder='Top Text'
        />
        <input
          type='text'
          onChange={(e) => setBottomText(e.target.value)}
          name='bottomText'
          value={bottomText}
          placeholder='Bottom Text'
        />
        <button>Submit</button>
      </form>
      <div className='meme'>
        <img src={randomImg} alt='' />
        <h2 className='top'>{topText}</h2>
        <h2 className='bottom'>{bottomText}</h2>
      </div>
    </div>
  );
};

export default MemeGenerator;
