import React from 'react';

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'https://i.imgflip.com/1bij.jpg',
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * 99) + 1;
    console.log(randNum);
    const randMemeImg = this.state.allMemeImgs[[randNum]].url;
    console.log(randMemeImg);

    this.setState({ randomImg: randMemeImg });
  }

  render() {
    return (
      <div className='row'>
        <form className='meme-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            name='topText'
            value={this.state.topText}
            placeholder='Top Text'
          />
          <input
            type='text'
            onChange={this.handleChange}
            name='bottomText'
            value={this.state.bottomText}
            placeholder='Bottom Text'
          />
          <button>Generate</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImg} alt='' />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes);
        this.setState({ allMemeImgs: memes });
      });
  }
}

export default MemeGenerator;
