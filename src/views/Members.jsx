import React from 'react';
import axios from 'axios';

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
        {JSON.stringify(memberData)}
      </>
    );
  }
}

export default Members;