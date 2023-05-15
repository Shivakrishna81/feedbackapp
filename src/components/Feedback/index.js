// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBackTrue: true}

  onClickEmoji = () => {
    this.setState({isFeedBackTrue: false})
  }

  render() {
    const {isFeedBackTrue} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    let feedBackContainer

    if (isFeedBackTrue) {
      feedBackContainer = (
        <div className="container2">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="emojiContainer">
            <li className="emoji" key={emojis[0].id}>
              <img
                src={emojis[0].imageUrl}
                alt="Sad"
                onClick={this.onClickEmoji}
              />
              <p>Sad</p>
            </li>

            <li className="emoji" key={emojis[1].id}>
              <img
                src={emojis[1].imageUrl}
                alt="None"
                onClick={this.onClickEmoji}
              />
              <p>None</p>
            </li>

            <li className="emoji" key={emojis[2].id}>
              <img
                src={emojis[2].imageUrl}
                alt="Happy"
                onClick={this.onClickEmoji}
              />
              <p>Happy</p>
            </li>
          </ul>
        </div>
      )
    } else {
      feedBackContainer = (
        <div className="container2">
          <img src={loveEmojiUrl} alt="love emoji" />
          <h1>Thank You!</h1>
          <p>
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }

    return <div className="container">{feedBackContainer}</div>
  }
}

export default Feedback
