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
    const { setView } = this.props;
    const { memberData } = this.state;
    return (
      <>
        {memberData && memberData.map(member => (
          <Card key={member.id} title={member.name} />
        ))}
      </>
    );
  }
}

export default Members;