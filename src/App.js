import logo from './logo.svg';
import './App.css';
import Logo from './Logo'
import PrimaryNavigationLink from './PrimaryNavigationLink'

  const primaryNavLinks = [{
    id: 1,
    url: "#",
    text: "Home",
  },{
    id: 2,
    url: "#",
    text: "TV",
  },{
    id: 3,
    url: "#",
    text: "Movies",
  },{
    id: 4,
    url: "#",
    text: "Huluween",
  },{
    id: 5,
    url: "#",
    text: "My Stuff",
  },{
    id: 6,
    url: "#",
    text: "Hubs",
  }]

function App() {

  return (
    <div className="App">
      <header>
        <section className="top-bar">
          <Logo />
          <nav className="primary-navigation">
            <ul>
            {
              primaryNavLinks.map(({id, url, text}) => (
                  <li key={id}>
                    <PrimaryNavigationLink
                      url={url}
                      text={text}
                    />
                  </li>
              ))
            }
            </ul>
          </nav>
          <div className="search-and-profile">
            <span>Magnifying glass</span>
            <span className="user-icon">K</span>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
