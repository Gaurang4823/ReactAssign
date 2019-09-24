import React from "react";
//import ReactDom from "react-dom"

class MemeGernatorTest extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      memeImages: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getRandomDatafromMeme = this.getRandomDatafromMeme.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        const { memes } = data.data;
        this.setState({
          memeImages: memes
        });
      });
    console.log("ememe", this.state.memeImages);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  getRandomDatafromMeme(event) {
    event.preventDefault();
    const memeDat = this.state.memeImages;
    const randomdata = memeDat[Math.floor(Math.random() * memeDat.length)];
    this.setState({
      randomImg: randomdata.url
    });
    axios;
    //console.log("memem", randomdata);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.topText}
          name="topText"
          placeholder="Top Text"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          value={this.state.bottomText}
          name="bottomText"
          placeholder="Bottom Text"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="button"
          value="Gernate Meme"
          onClick={this.getRandomDatafromMeme}
        />
        <div>
          <img src={this.state.randomImg} alt="tets" />
          <h2>{this.state.topText}</h2>
          <h2>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
export default MemeGernatorTest;
