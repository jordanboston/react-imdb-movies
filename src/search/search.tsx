import React from 'react';
import './search.css';

class Search extends React.Component<any> {
  constructor(props: any) {
    super(props as any);
    this.state = {
      title: '',
    };
  }

  handleSubmit = () => {
    const { title }: any = this.state;
    this.props.handleSendRequest(title);
    this.setState({ title: '' });
  };

  handleInputTitle = (event: any) => {
    event.preventDefault();
    const title = event.target.value;
    this.setState({ title });
  };

  render() {
    const { title }: any = this.state;
    return (
      <div className="search">
        <input className="search-box" type="text" onChange={this.handleInputTitle} value={title} />
        <input className="button" type="submit" onClick={this.handleSubmit} value="Search" />
      </div>
    );
  }
}

export default Search;
