import React from 'react';
import './search.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
        <TextField
          id="standard-basic"
          className="search-box"
          label="Search for a movie"
          onChange={this.handleInputTitle}
          value={title}
        />
        <Button variant="contained" color="default" onClick={this.handleSubmit}>
          Search
        </Button>
      </div>
    );
  }
}

export default Search;
