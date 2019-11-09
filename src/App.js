import React, { Component } from 'react';
import QuoteMachine from './components/QuoteMachine';
import { Grid, withStyles } from '@material-ui/core';
import 'typeface-roboto';

const styles = {
    container: {
      alignItems: 'center',
      display: 'flex',
      height: '100vh'
    }
}
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      quoteIndex: 0
    };
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.chooseQuoteIndex = this.chooseQuoteIndex.bind(this);
  }


  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.quoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.quoteIndex];
  }
  
  chooseQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    } else {
     return Math.ceil(Math.random() * this.state.quotes.length -1);
    }
    
  }

  assignNewQuoteIndex() {
    this.setState({ quoteIndex: this.chooseQuoteIndex() });
  }

  render() {
    console.log("Check it! v");
    console.log(this.state.quotes);
    console.log(this.state.quoteIndex);
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={10} lg={7} item>
          {
            this.selectedQuote 
            ? <QuoteMachine 
                selectedQuote={this.selectedQuote}
                assignNewQuoteIndex={this.assignNewQuoteIndex}
              />
            : null
          }
          
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
