import React, { Component, Fragment} from 'react';
import { Button, Jumbotron } from 'reactstrap';
import axios from 'axios';
import './QuoteMachine.css';

class QuoteMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: null,
            author: null,
            quote: null,
            hasQuote: false,
            animate: false
        },
        this.END_POINT = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    }


    componentDidMount() {
        axios.get(this.END_POINT)
             .then(res => {
                console.log(res.data)
                const { quotes } = res.data
                console.log(res.data);
                this.setState({ quotes })
            return res.data.quotes
            })
        requestAnimationFrame(() => {
            // Firefox will sometimes merge changes that happened here
            requestAnimationFrame(() => {
                this.setState({ animate: true });
            });
        });
    }
    getRandomQuote = () => {

        const { quotes, quote, author, hasQuote, animate } = this.state;
        const randomSelection = quotes[Math.floor(Math.random() * 100)];

        this.setState({quote: randomSelection.quote, author:randomSelection.author, hasQuote: true, animate: true});
     
    }

    renderQuote = () => {
        
        const { hasQuote, author, quote, animate } = this.state;

        console.log(quote, 'quote length: ', quote.length)
        author.replace(/–/g, '');

        return (
        <div 
            onAnimationEnd={()=>this.setState({animate: false})}
            className={animate ? 'animate ' : ''} >

                <h2 className="main-text">{author}</h2>
                <p className = "lead">{quote}</p>
            <br />
        </div>
            
        )

    }

    shareOnTwitter = () => {
            // Opens a pop-up with twitter sharing dialog
        const { quote, author } = this.state;
        const text = `${quote} - ${author}`
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }
    
    render() {
        const { hasQuote, animate } = this.state;
        return (
<div className="project-border app-background">
    <Jumbotron className="something">
        <br /> 
        <div className="fix-height">
                {hasQuote === true ? 
                    this.renderQuote() : <h1
                    style={{'padding':'' , 'font-size':'25px'}}>Press New Quote to begin.</h1>}
               </div>
                    <Button color="primary" 
                    onClick={this.getRandomQuote}>
                        New Quote
                    </Button>
                    <Button color="info" className="pull-right" onClick={this.shareOnTwitter}>
                    <i class="fa fa-twitter fa-lg" alt="Post on Twitter" />
                    </Button>
    </Jumbotron>
</div>
                );
    }
}

export default QuoteMachine;
