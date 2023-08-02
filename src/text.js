import React from 'react';

class OLDComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    console.log('Component is mounted.');
    this.fetchData();
  }

  componentWillUnmount() {
    console.log('Component is going to be unmounted.');
  }

  fetchData() {
    // Simulate data fetching
    setTimeout(() => {
      this.setState({ data: 'Some fetched data' });
    }, 1000);
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <p>Data: {data}</p>
      </div>
    );
  }
}

export default OLDComponent;
