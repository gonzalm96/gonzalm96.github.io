import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import styles from './index.module.css';
import reportWebVitals from './reportWebVitals';

let pOne;
let pTwo;
let maxO;
let outPut = null;
let flag = 0;

class Hello extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {
        input:'',
        //0 - start, 1 - maxOdd set, 2 - playerOne set, 3 - playerTwo set 
        gameStage: 0,
      };
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }
    
    addValue(evt)
    {
      console.log("Passing: "+ this.state.input)
      let cleanedInput = this.state.input.replace(/\D/g,'');
      evt.preventDefault();
      if(this.state.gameStage === 0)
      {
        maxO = cleanedInput;
        this.setState({gameStage: 1, input:''});

      }
      else{
        if(parseInt(this.state.input) <= maxO){
          if(this.state.gameStage === 1){
            pOne = cleanedInput;
            this.setState({gameStage: 2, input:''});
          }
          else if (this.state.gameStage === 2) {
            pTwo = cleanedInput;
            this.setState({gameStage: 3,input:''});
            flag = 1;
          }
          else{
            alert("what is happening");
          }
        }
        else{
          alert("Please choose a number between 1 and " + maxO);
          this.setState({ input: '' });
        }
      } 
    }

    updateInput(evt){
       this.setState({input: evt.target.value});
    }

    calcRes() {
      //if the guesses match
      if (pOne === pTwo) {
        return 0;
      }
      //if they add up to the max
      else if (parseInt(pOne)+parseInt(pTwo) == maxO) {
        return 2;
      }
      //if they dont match
      else if (pOne !== pTwo) {
        return 1;
      
      }
    }
    
    render()
    {
      let status = null;
      let playerInput = null;
      if (!maxO) {
        status = "Please enter a maximum Odd";
      }

      if(this.state.gameStage === 1){
        playerInput = "Player One, a number between 1 and " + maxO;
      }
      else if(this.state.gameStage === 2){
        playerInput = "Player Two, a number between 1 and " + maxO;
      }

      if(this.state.gameStage === 3 && outPut === null){
        outPut = this.calcRes();
        this.props.check();

      }

      const introText = <h2>{ playerInput ? playerInput : status}</h2>;
      return (
      
      <div className={styles.wrapper}>
        <div>
            {introText}
        </div>

        <form>
          <input type="text" value={this.state.input} onChange={this.updateInput} /><br/><br/>
          <button onClick={this.addValue} type="submit">Submit</button>
        </form>
      </div>
      );
    }
  }

class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayResults: false,
      countdown: 3
    };
    this.timer = 0;
    this.startCounter = this.startCounter.bind(this);
    this.counter = this.counter.bind(this);
  }

  startCounter() {
    if (this.timer === 0 && this.state.countdown > 0) {
      this.timer = setInterval(this.counter, 1000);
    }
  }


  counter(){
    let seconds = this.state.countdown - 1;
    this.setState({
      countdown: seconds
    });
    console.log("countdown counter: " +seconds);
    if(seconds === 0){
      clearInterval(this.timer);
      this.setState({displayResults: true});
    }
  }
  
  

  render(){

    let outro = "";

    if (outPut === 0) {
      outro = "Yikes, it's a match!";
    }
    else if (outPut === 1) {
      outro = "Better luck next time!";
    }
    else if (outPut === 2) {
      outro = "How the tables have turned...";
    }

    let count = <h2 className={styles.counter}>{this.state.countdown}</h2>;
    let res =
      <div className={styles.results}>
        <div>
          <h2>{outro}</h2>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <h3>{pOne}</h3>
            <p>P1</p>
          </div>
          <div className={styles.box}>
            <h3>{pTwo}</h3>
            <p>P2</p>
          </div>
        </div>
      </div>;

    console.log(outPut+" called it");
    if(this.state.countdown > 0){
      this.startCounter();
    }
  
    return(
      <div id="resultsWrap">
        <div className={styles.wrapper}> 
          { this.state.displayResults ? res : count }
        </div>
        {/* <button onClick={this.onClick}>New Game</button> */}
      </div>
    );
  }
}

class Heading extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className={styles.menuWrapper}>
        <div className={styles.headings}>
          <h1>What are the odds?</h1>
        </div>
        <div>
          <button className={styles.menuButton} onClick={this.props.showRules}>Help</button>
        </div>
      </div>
    );
  }
}

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //true - getting input, false - ready to display results
      gameState: true,
      showRules: false
    };
  }

  getResults = () => {
    if(flag === 1){
      this.setState({ gameState: false });
    }
  }

  showRules = () => {
    if(this.state.showRules){
      this.setState({showRules: false});
    }
    else{
      this.setState({showRules: true});
    }
  }

  

  render()
  {
    const game = 
    <div>
      {this.state.gameState ? <Hello check={this.getResults} /> : <Results />}
    </div>;

    const rules = 
      <div className={styles.rules}>
        <h3>Rules:</h3>
        <ul>
          <li>Two people make a bet, usually in a "What are the odds you will..." format</li>
          <li>
            The person asked will set an upper limit for a number, recommended ranges for upper limits:
            <ul>
              <li>Something harmless: 1-50</li>
              <li>Something you don't want to do: 50-75</li>
              <li>Something you really don't want to do: 75-150</li>
              <li>Felony: 200+</li>
            </ul>
          </li>
          <li>Player 1 submits a number without showing player&nbsp;2</li>
          <li>Player 2 submits number without showing player&nbsp;1</li>
          <li>After the count of three both players will see who will have to do the bet!
            <ul>
              <li>If the numbers don't match, nobody has to do the bet</li>
              <li>If the numbers do match, the one who set the upper limit must do the bet</li>
              <li>If the sum of the numbers is equal to the upper limit set, the bet is flipped and the initiator must now complete the bet</li>
            </ul>
          </li>
        </ul>
      </div>;

    return(
      <div>
        <div>
          <Heading showRules={this.showRules}/>
        </div>
        <div>
          { game }
          { this.state.showRules ? rules : null }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
