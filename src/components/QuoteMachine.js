import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({assignNewQuoteIndex, selectedQuote}) => (
    <Card>
        <CardContent>
        
            <Typography id="text">
                {selectedQuote.quote}
                <span id="author">
                  - {selectedQuote.author}
                </span>
            </Typography>
        
        </CardContent>
        
        <CardActions>
            <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>New Quote</Button>
            <IconButton 
                href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote} - ${selectedQuote.author}&hashtags=quotemachine`}
                target="_blank"
                id="tweet-quote"
            >
                <FontAwesomeIcon icon={faTwitter} size="small"/>
            </IconButton>
        </CardActions>
    </Card>
);

export default QuoteMachine;