import React from 'react';
import styles from './search.module.scss';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

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
      <div className={styles.search}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for a movie"
            aria-label="Search for a movie"
            aria-describedby="basic-addon2"
            onChange={this.handleInputExpression}
            value={expression}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.handleSubmit}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
