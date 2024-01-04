import React from 'react';
import axios from 'axios';

import Card from '../components/Card.jsx';

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberData: null,
    };
  }

  componentDidMount() {
    axios.get('/data/members/list.json')
    .then((response) => {
      this.setState({ memberData: response.data });
    })
  }

  render() {
    const { memberData } = this.state;
    return (
      <>
        <div className="d-flex flex-column align-center"><h1>Team Members</h1></div>
        <div className="d-flex flex-column align-center gap-4">
          {memberData && memberData.map(member => (
            <Card
              key={member.id}
              title={member.name}
              subtitle={member.short_desc}
              links={member.links}
              avatar={
                <>
                  {member.avatar ? (<img src={member.avatar}></img>) : (<div className="avatar-default">{member.name.substring(0, 1)}</div>)}
                </>
              }
            />
          ))}
        </div>
      </>
    );
  }
}

export default Members;