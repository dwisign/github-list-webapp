import React from 'react';
import axios from 'axios';

export default class GithubList extends React.Component {
  state = {
    lists: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/dwisign/repos`)
      .then(res => {
        const lists = res.data;
        this.setState({ lists });
      })
  }

  render() {
    return (
      <ul className="list-group mb-5">
        {
          this.state.lists
            .map(list =>
              <li key={list.id} className="list-group-item d-flex justify-content-between align-items-center">
                {list.full_name}
                <span class="badge bg-success rounded-pill">{list.language}</span>
              </li>
          
            )
        }
      </ul>
    )
  }
}