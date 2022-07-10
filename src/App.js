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
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Welcome to {} repository page</h3>
                    <p className="card-text">You can get my github repository from github api</p>
                  </div>
                </div>
                <div className="list-group mt-3">
                  <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>
                  <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
