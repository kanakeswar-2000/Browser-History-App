import './App.css'
import {Component} from 'react'
import Historyitem from './components/index'
// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class HistoryContainer extends Component {
  state = {
    searchinput: '',
    historyList: initialHistoryList,
  }
  onchangesearchinput = event => {
    this.setState({searchinput: event.target.value})
  }
  deleteitem = key => {
    const {historyList} = this.state
    const filteredList = historyList.filter(eachitem => eachitem.id !== key)
    this.setState({historyList: filteredList})
  }
  render() {
    const {searchinput, historyList} = this.state
    const searchresults = historyList.filter(eachitem =>
      eachitem.title.toLowerCase().includes(searchinput.toLowerCase()),
    )
    let historyelement
    if (searchresults.length === 0) {
      historyelement = (
        <p className="history-text">There is no history to show</p>
      )
    } else {
      historyelement = (
        <div>
          <ul className="history-items-container">
            {searchresults.map(eachitem => (
              <Historyitem
                historyDetails={eachitem}
                key={eachitem.id}
                deleteitem={this.deleteitem}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="history-container">
          <div className="search-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
                className="app-logo"
              />
            </div>
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                type="search"
                onChange={this.onchangesearchinput}
                value={searchinput}
                placeholder="Search history"
              />
            </div>
          </div>
          {historyelement}
        </div>
      </div>
    )
  }
}
const App = () => <HistoryContainer />

export default App
