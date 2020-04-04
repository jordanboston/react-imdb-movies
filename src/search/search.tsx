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
    const { expression }: any = this.state;
    if (expression) {
      this.props.handleSendRequest(expression);
      this.setState({ expression: '' });
    }
    return;
  };

  handleInputExpression = (event: any) => {
    event.preventDefault();
    const expression = event.target.value;
    this.setState({ expression });
  };

  render() {
    const { expression }: any = this.state;
    return (
      <div className="search">
        <TextField
          id="standard-secondary"
          className="search-box"
          color="secondary"
          label="Search for a movie"
          onChange={this.handleInputExpression}
          value={expression}
        />
        <Button size="large" variant="contained" color="secondary" onClick={this.handleSubmit}>
          Search
        </Button>
      </div>
    );
  }
}

export default Search;
