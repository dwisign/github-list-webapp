import GithubList from './components/GithubList.js';
import './App.css';

function App() {
  const containerStyle = {
    maxWidth: '768px', 
    marginTop: '30px'
  }
  return (
    <div className="wrap">
      <div className="container" style={containerStyle}>
        <div className="profile">
          <div className="row">
              <div className="cols-12">
                <div className="card mb-3">
                  <div className="card-body">
                    <h3 className="card-title">Welcome to {} repository page</h3>
                    <p className="card-text">You can get my github repository from github api</p>
                  </div>
                </div>
                <GithubList/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
