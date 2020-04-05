import React from 'react';
import styles from './search.module.scss';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

interface Props {
  handleSendRequest: Function;
  loading: boolean;
 }
interface State {
  expression: string;
}
class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props as any);
    this.state = {
      expression: '',
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

  input: HTMLDivElement | null = null;

  onEnterKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  };

  render() {
    const { expression }: any = this.state;
    return (
      <div className={styles.search}>
        <InputGroup className={styles.searchBar}>
          <FormControl
            className={this.props.loading ? styles.disabled : ''}
            placeholder={this.props.loading ? 'Searching…' : 'Search for a movie'}
            aria-label="Search for a movie"
            aria-describedby="basic-addon2"
            onChange={this.handleInputExpression}
            onKeyDown={this.onEnterKeyDown}
            value={expression}
          />
          <InputGroup.Append className={this.props.loading ? styles.disabled : ''}>
            <Button variant="secondary" onClick={this.handleSubmit}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
