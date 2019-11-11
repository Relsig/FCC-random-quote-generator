import React, { useState, useEffect } from 'react';
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
 
function App({ classes }) {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     quotes: [],
  //     quoteIndex: 0
  //   };
  //   this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  //   this.chooseQuoteIndex = this.chooseQuoteIndex.bind(this);
  // }
  useEffect(() => {
    async function fetchData() {
    const data = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
    const quotes = await  data.json();
    setQuotes( quotes );
    setQuoteIndex(Math.ceil(Math.random() * (quotes.length - 1)));
    }
    fetchData();
  }, []);


  const [quotes, setQuotes] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(null);




  function selectedQuote() {
    if (!quotes.length || !Number.isInteger(quoteIndex)) {
      return undefined;
    }
    return quotes[quoteIndex];
  }
  
  function chooseQuoteIndex() {
    if (!quotes.length) {
      return undefined;
    } else {
     return Math.ceil(Math.random() * quotes.length -1);
    }
    
  }

  function assignNewQuoteIndex() {
    setQuoteIndex(chooseQuoteIndex());
  }

  
    return (
      <Grid className={classes.container} id="quote-box" justify="center" container>
        <Grid xs={10} lg={7} item>
          {
            selectedQuote() 
            ? <QuoteMachine 
                selectedQuote={selectedQuote()}
                assignNewQuoteIndex={assignNewQuoteIndex}
              />
            : null
          }
          
        </Grid>
      </Grid>
    );
}

export default withStyles(styles)(App);
