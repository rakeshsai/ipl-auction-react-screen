import "./App.css";
import React, { Component } from "react";
import TeamCard from "./TeamCard";
import SoldUnsoldList from './SoldUnSoldList.js'
import TopBuys from "./TopBuys";
import Admin from "./Admin";
import BidCard from "./BidCard";
import DisplayScreenw from "./displayScreenw";

const InitialState = {
  amount: 2000000,
  teamBGc:"#343a40",
  bidAmt: "",
  buttonStatex:'',
  tbstate:true,
  players: {},
  currentTeam: "",
  faceFlag: true,
  selectedPlayer: "",
  textVal: "",
  soldPlayers: [],
  unSoldPlayers: [],
  topBuyPlayers:[],
  selectedPlayerName: "",
  soldStyle: {
    bg: "dark",
  },
  rcbStyle: {
    filter: "",
    totalPlayers: 14,
    totalBudget: 354000000,
    faceFlag: true,
  },
  cskStyle: {
    filter: "",
    totalPlayers: 19,
    totalBudget: 199000000,
    faceFlag: true,
  },
  dcStyle: {
    filter: "",
    totalPlayers: 17,
    totalBudget: 134000000,
    faceFlag: true,
  },
  kxipStyle: {
    filter: "",
    totalPlayers: 16,
    totalBudget: 532000000,
    faceFlag: true,
  },
  srhStyle: {
    filter: "",
    totalPlayers: 22,
    totalBudget: 107500000,
    faceFlag: true,
  },
  rrStyle: {
    filter: "",
    totalPlayers: 16,
    totalBudget: 378500000,
    faceFlag: true,
  },
  kkrStyle: {
    filter: "",
    totalPlayers: 17,
    totalBudget: 107500000,

    faceFlag: true,
  },
  miStyle: {
    filter: "",
    totalPlayers: 18,
    totalBudget: 153500000,
    faceFlag: true,
  },
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = sessionStorage.getItem("appState") ? JSON.parse(sessionStorage.getItem("appState")) : InitialState;
  }
  handleClear = (event) => {
    //this.textInput.value = ""
    Array.from(document.querySelectorAll("Input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      amount: 2000000,
      textVal: "",
      currentTeam: "",
      tbstate:true,
      buttonStatex:'',
      faceFlag: true,
      selectedPlayer: "",
      selectedPlayerName: "",
      soldStyle: {
        bg: "dark",
      },
      bidAmt: "",
      rcbStyle: {
        filter: "",
        totalPlayers: this.state.rcbStyle.totalPlayers,
        totalBudget: this.state.rcbStyle.totalBudget,
        faceFlag: true,
      },
      cskStyle: {
        filter: "",
        totalPlayers: this.state.cskStyle.totalPlayers,
        totalBudget: this.state.cskStyle.totalBudget,
        faceFlag: true,
      },
      dcStyle: {
        filter: "",
        totalPlayers: this.state.dcStyle.totalPlayers,
        totalBudget: this.state.dcStyle.totalBudget,
        faceFlag: true,
      },
      kxipStyle: {
        filter: "",
        totalPlayers: this.state.kxipStyle.totalPlayers,
        totalBudget: this.state.kxipStyle.totalBudget,
        faceFlag: true,
      },
      srhStyle: {
        filter: "",
        totalPlayers: this.state.srhStyle.totalPlayers,
        totalBudget: this.state.srhStyle.totalBudget,
        faceFlag: true,
      },
      rrStyle: {
        filter: "",
        totalPlayers: this.state.rrStyle.totalPlayers,
        totalBudget: this.state.rrStyle.totalBudget,
        faceFlag: true,
      },
      kkrStyle: {
        filter: "",
        totalPlayers: this.state.kkrStyle.totalPlayers,
        totalBudget: this.state.kkrStyle.totalBudget,
        faceFlag: true,
      },
      miStyle: {
        filter: "",
        totalPlayers: this.state.miStyle.totalPlayers,
        totalBudget: this.state.miStyle.totalBudget,
        faceFlag: true,
      },
    });
    sessionStorage.setItem('appState', JSON.stringify(this.state));
  };
  handleSold = (event) => {
    Array.from(document.querySelectorAll("Input")).forEach(
      (input) => (input.value = "")
    );
    if (this.state.currentTeam === "RCB") {
      let topBuy ={}
      if(this.state.amount>20000000 || (((this.state.amount/100000) / Number(this.state.selectedPlayer.amount)) > 5)){
        topBuy = {playerName : this.state.selectedPlayerName, playerTeam : "Ee Sala Cup Namde RCB", playerSalary : this.state.amount}
      }

      this.setState({
        textVal: "SOLD",
        buttonStatex:'',
        teamBGc:"#28a745!important",
        faceFlag: false,
        topBuyPlayers:[...this.state.topBuyPlayers, topBuy],
        bidAmt: "",
        soldPlayers: [
          ...this.state.soldPlayers,
          {
            playerName: this.state.selectedPlayerName,
            team: this.state.currentTeam,
            salary: this.state.amount,
          },
        ],

        soldStyle: {
          bg: "success",
        },
        rcbStyle: {
          filter: "",
          totalPlayers: this.state.rcbStyle.totalPlayers + 1,
          totalBudget: this.state.rcbStyle.totalBudget - this.state.amount,
          faceFlag: true,
        },
      });
      sessionStorage.setItem('appState', JSON.stringify(this.state));
    }
    if (this.state.currentTeam === "CSK") {
      let topBuy ={}
      if(this.state.amount>20000000 || (((this.state.amount/100000) / Number(this.state.selectedPlayer.amount)) > 5)){
        topBuy = {playerName : this.state.selectedPlayerName, playerTeam : "Chennai Super Kings", playerSalary : this.state.amount}
      }
      this.setState({
        textVal: "SOLD",
        buttonStatex:'',
        teamBGc:"#28a745!important",
        faceFlag: false,
        topBuyPlayers:[...this.state.topBuyPlayers, topBuy],
        soldPlayers: [
          ...this.state.soldPlayers,
          {
            playerName: this.state.selectedPlayerName,
            team: this.state.currentTeam,
            salary: this.state.amount,
          },
        ],

        bidAmt: "",
        soldStyle: {
          bg: "success",
        },
        cskStyle: {
          filter: "",
          totalPlayers: this.state.cskStyle.totalPlayers + 1,
          totalBudget: this.state.cskStyle.totalBudget - this.state.amount,
          faceFlag: true,
        },
      });
      sessionStorage.setItem('appState', JSON.stringify(this.state));
    }
    if (this.state.currentTeam === "DC") {
      let topBuy ={}
      if(this.state.amount>20000000 || (((this.state.amount/100000) / Number(this.state.selectedPlayer.amount)) > 5)){
        topBuy = {playerName : this.state.selectedPlayerName, playerTeam : "Delhi Capitals", playerSalary : this.state.amount}
      }
      this.setState({
        textVal: "SOLD",
        teamBGc:"#28a745!important",
        buttonStatex:'',
        faceFlag: false,
        topBuyPlayers:[...this.state.topBuyPlayers, topBuy],
        soldPlayers: [
          ...this.state.soldPlayers,
          {
            playerName: this.state.selectedPlayerName,
            team: this.state.currentTeam,
            salary: this.state.amount,
          },
        ],
        soldStyle: {
          bg: "success",
        },

        bidAmt: "",
        dcStyle: {
          filter: "",
          totalPlayers: this.state.dcStyle.totalPlayers + 1,
          totalBudget: this.state.dcStyle.totalBudget - this.state.amount,
          faceFlag: true,
        },
      });
      sessionStorage.setItem('appState', JSON.stringify(this.state));
    }
    if (this.state.currentTeam === "KXIP") {
      let topBuy ={}
      if(this.state.amount>20000000 || (((this.state.amount/100000) / Number(this.state.selectedPlayer.amount)) > 5)){
        topBuy = {playerName : this.state.selectedPlayerName, playerTeam : "Kings Punjab", playerSalary : this.state.amount}
      }
      this.setState({
        textVal: "SOLD",
        teamBGc:"#28a745!important",
        buttonStatex:'',
        faceFlag: false,
        topBuyPlayers:[...this.state.topBuyPlayers, topBuy],
        soldPlayers: [
          ...this.state.soldPlayers,
          {
            playerName: this.state.selectedPlayerName,
            team: this.state.currentTeam,
            salary: this.state.amount,
          },
        ],
        soldStyle: {
          bg: "success",
        },

        bidAmt: "",
        kxipStyle: {
          filter: "",
          totalPlayers: this.state.kxipStyle.totalPlayers + 1,
          totalBudget: this.state.kxipStyle.totalBudget - this.state.amount,
          faceFlag: true,
        },
      });
      sessionStorage.setItem('appState', JSON.stringify(this.state));
    }
    if (this.state.currentTeam === "SRH") {
      let topBuy ={}
      if(this.state.amount>20000000 || (((this.state.amount/100000) / Number(this.state.selectedPlayer.amount)) > 5)){
        topBuy = {playerName : this.state.selectedPlayerName, playerTeam : "SunRisers Hyderabad", playerSalary : this.state.amount}
      }
      this.setState({
        textVal: "SOLD",
        teamBGc:"#28a745!important",
        buttonStatex:'',
        faceFlag: false,
        topBuyPlayers:[...this.state.topBuyPlayers, topBuy],
        soldStyle: {
          bg: "success",
        },
        soldPlayers: [
          ...this.state.soldPlayers,
          {
            playerName: this.state.selectedPlayerName,
            team: this.state.currentTeam,
            salary: this.state.amount,
          },
        ],

        bidAmt: "",
        srhStyle: {
          filter: "",
          totalPlayers: this.state.srhStyle.totalPlayers + 1,
          totalBudget: this.state.srhStyle.totalBudget - this.state.amount,
          faceFlag: true,
        },
      });
      sessionStorage.setItem('appState', JSON.stringify(this.state));
    }
    if (this.state.currentTeam === "RR") {
      let topBuy ={}
      if(this.state.amount>20000000 || (((this.state.amount/100000) / Number(this.state.selectedPlayer.amount)) > 5)){
        topBuy = {playerName : this.state.selectedPlayerName, playerTeam : "Rajasthan Royals", playerSalary : this.state.amount}
      }
      this.setState({
        textVal: "SOLD",
        teamBGc:"#28a745!important",
        buttonStatex:'',
        faceFlag: false,
        soldStyle: {
          bg: "success",
        },
        topBuyPlayers:[...this.state.topBuyPlayers, topBuy],
        soldPlayers: [
          ...this.state.soldPlayers,
          {
            playerName: this.state.selectedPlayerName,
            team: this.state.currentTeam,
            salary: this.state.amount,
          },
        ],

        bidAmt: "",
        rrStyle: {
          filter: "",
          totalPlayers: this.state.rrStyle.totalPlayers + 1,
          totalBudget: this.state.rrStyle.totalBudget - this.state.amount,
          faceFlag: true,
        },
      });
      sessionStorage.setItem('appState', JSON.stringify(this.state));
    }
    if (this.state.currentTeam === "KKR") {
      let topBuy ={}
      if(this.state.amount>20000000 || (((this.state.amount/100000) / Number(this.state.selectedPlayer.amount)) > 5)){
        topBuy = {playerName : this.state.selectedPlayerName, playerTeam : "Kolkata Knight Riders", playerSalary : this.state.amount}
      }
      this.setState({
        textVal: "SOLD",
        buttonStatex:'',
        teamBGc:"#28a745!important",
        faceFlag: false,
        topBuyPlayers:[...this.state.topBuyPlayers, topBuy],
        soldStyle: {
          bg: "success",
        },
        soldPlayers: [
          ...this.state.soldPlayers,
          {
            playerName: this.state.selectedPlayerName,
            team: this.state.currentTeam,
            salary: this.state.amount,
          },
        ],

        bidAmt: "",
        kkrStyle: {
          filter: "",
          totalPlayers: this.state.kkrStyle.totalPlayers + 1,
          totalBudget: this.state.kkrStyle.totalBudget - this.state.amount,
          faceFlag: true,
        },
      });
      sessionStorage.setItem('appState', JSON.stringify(this.state));
    }
    if (this.state.currentTeam === "MI") {
      let topBuy ={}
      if(this.state.amount>20000000 || (((this.state.amount/100000) / Number(this.state.selectedPlayer.amount)) > 5)){
        topBuy = {playerName : this.state.selectedPlayerName, playerTeam : "Mumbai Indians", playerSalary : this.state.amount}
      }
      this.setState({
        textVal: "SOLD",
        teamBGc:"#28a745!important",
        buttonStatex:'',
        faceFlag: false,
        topBuyPlayers:[...this.state.topBuyPlayers, topBuy],
        soldStyle: {
          bg: "success",
        },
        soldPlayers: [
          ...this.state.soldPlayers,
          {
            playerName: this.state.selectedPlayerName,
            team: this.state.currentTeam,
            salary: this.state.amount,
          },
        ],

        bidAmt: "",
        miStyle: {
          filter: "",
          totalPlayers: this.state.miStyle.totalPlayers + 1,
          totalBudget: this.state.miStyle.totalBudget - this.state.amount,
          faceFlag: true,
        },
      });
      sessionStorage.setItem('appState', JSON.stringify(this.state));
    }
  };
  handleKeyDown = (event) => {
    let updatedAmount = this.state.amount;
    if (this.state.amount >= 10000000 && this.state.amount < 20000000)
      updatedAmount = this.state.amount + 1000000;
    else if (this.state.amount >= 20000000 && this.state.amount < 50000000) {
      updatedAmount = this.state.amount + 2000000;
    } else if (this.state.amount >= 50000000) {
      updatedAmount = this.state.amount + 2500000;
    } else updatedAmount = this.state.amount + 500000;
    if (event.keyCode === 49) {
      console.log(this.state.amount);
      this.setState({
        faceFlag: false,
        currentTeam: "RCB",
        amount: updatedAmount,
        buttonStatex:' ',
        rcbStyle: {
          totalPlayers: this.state.rcbStyle.totalPlayers,
          totalBudget: this.state.rcbStyle.totalBudget,
          filter: "brightness(1.75) saturate(1.2) contrast(0.85)",
          faceFlag: false,
        },
        cskStyle: {
          totalPlayers: this.state.cskStyle.totalPlayers,
          totalBudget: this.state.cskStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
        dcStyle: {
          totalPlayers: this.state.dcStyle.totalPlayers,
          totalBudget: this.state.dcStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kxipStyle: {
          totalPlayers: this.state.kxipStyle.totalPlayers,
          totalBudget: this.state.kxipStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        srhStyle: {
          totalPlayers: this.state.srhStyle.totalPlayers,
          totalBudget: this.state.srhStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        rrStyle: {
          totalPlayers: this.state.rrStyle.totalPlayers,
          totalBudget: this.state.rrStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
        kkrStyle: {
          totalPlayers: this.state.kkrStyle.totalPlayers,
          totalBudget: this.state.kkrStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
        miStyle: {
          totalPlayers: this.state.miStyle.totalPlayers,
          totalBudget: this.state.miStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
      });
    }
    if (event.keyCode === 50) {
      console.log(this.state.amount);
      this.setState({
        faceFlag: false,
        amount: updatedAmount,
        currentTeam: "CSK",
        buttonStatex:' ',
        rcbStyle: {
          totalPlayers: this.state.rcbStyle.totalPlayers,
          totalBudget: this.state.rcbStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
        cskStyle: {
          totalPlayers: this.state.cskStyle.totalPlayers,
          totalBudget: this.state.cskStyle.totalBudget,
          bidAmoubt: this.state.amount,
          filter: "brightness(1.75) saturate(1.2) contrast(0.85)",
          faceFlag: false,
        },
        dcStyle: {
          totalPlayers: this.state.dcStyle.totalPlayers,
          totalBudget: this.state.dcStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kxipStyle: {
          totalPlayers: this.state.kxipStyle.totalPlayers,
          totalBudget: this.state.kxipStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        srhStyle: {
          totalPlayers: this.state.srhStyle.totalPlayers,
          totalBudget: this.state.srhStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        rrStyle: {
          totalPlayers: this.state.rrStyle.totalPlayers,
          totalBudget: this.state.rrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kkrStyle: {
          totalPlayers: this.state.kkrStyle.totalPlayers,
          totalBudget: this.state.kkrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        miStyle: {
          totalPlayers: this.state.miStyle.totalPlayers,
          totalBudget: this.state.miStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
      });
    }
    if (event.keyCode === 51) {
      console.log(this.state.amount);
      this.setState({
        faceFlag: false,
        amount: updatedAmount,
        currentTeam: "DC",
        buttonStatex:' ',
        rcbStyle: {
          totalPlayers: this.state.rcbStyle.totalPlayers,
          totalBudget: this.state.rcbStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
        cskStyle: {
          totalPlayers: this.state.cskStyle.totalPlayers,
          totalBudget: this.state.cskStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
        dcStyle: {
          totalPlayers: this.state.dcStyle.totalPlayers,
          totalBudget: this.state.dcStyle.totalBudget,
          faceFlag: false,
          bidAmoubt: this.state.amount,
          filter: "brightness(1.75) saturate(1.2) contrast(0.85)",
        },
        kxipStyle: {
          totalPlayers: this.state.kxipStyle.totalPlayers,
          totalBudget: this.state.kxipStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        srhStyle: {
          totalPlayers: this.state.srhStyle.totalPlayers,
          totalBudget: this.state.srhStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        rrStyle: {
          totalPlayers: this.state.rrStyle.totalPlayers,
          totalBudget: this.state.rrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kkrStyle: {
          totalPlayers: this.state.kkrStyle.totalPlayers,
          totalBudget: this.state.kkrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        miStyle: {
          totalPlayers: this.state.miStyle.totalPlayers,
          totalBudget: this.state.miStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
      });
    }
    if (event.keyCode === 52) {
      console.log(this.state.amount);

      this.setState({
        faceFlag: false,
        amount: updatedAmount,
        currentTeam: "KXIP",
        buttonStatex:' ',
        rcbStyle: {
          totalPlayers: this.state.rcbStyle.totalPlayers,
          totalBudget: this.state.rcbStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
        cskStyle: {
          totalPlayers: this.state.cskStyle.totalPlayers,
          totalBudget: this.state.cskStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
        dcStyle: {
          totalPlayers: this.state.dcStyle.totalPlayers,
          totalBudget: this.state.dcStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kxipStyle: {
          totalPlayers: this.state.kxipStyle.totalPlayers,
          totalBudget: this.state.kxipStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(1.75) saturate(1.2) contrast(0.85)",
        },
        srhStyle: {
          totalPlayers: this.state.srhStyle.totalPlayers,
          totalBudget: this.state.srhStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        rrStyle: {
          totalPlayers: this.state.rrStyle.totalPlayers,
          totalBudget: this.state.rrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kkrStyle: {
          totalPlayers: this.state.kkrStyle.totalPlayers,
          totalBudget: this.state.kkrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        miStyle: {
          totalPlayers: this.state.miStyle.totalPlayers,
          totalBudget: this.state.miStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
      });
    }
    if (event.keyCode === 53) {
      console.log(this.state.amount);
      this.setState({
        faceFlag: false,
        amount: updatedAmount,
        buttonStatex:' ',
        currentTeam: "SRH",
        rcbStyle: {
          totalPlayers: this.state.rcbStyle.totalPlayers,
          totalBudget: this.state.rcbStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        cskStyle: {
          totalPlayers: this.state.cskStyle.totalPlayers,
          totalBudget: this.state.cskStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        dcStyle: {
          totalPlayers: this.state.dcStyle.totalPlayers,
          totalBudget: this.state.dcStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kxipStyle: {
          totalPlayers: this.state.kxipStyle.totalPlayers,
          totalBudget: this.state.kxipStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        srhStyle: {
          totalPlayers: this.state.srhStyle.totalPlayers,
          totalBudget: this.state.srhStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(1.75) saturate(1.2) contrast(0.85)",
        },
        rrStyle: {
          totalPlayers: this.state.rrStyle.totalPlayers,
          totalBudget: this.state.rrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kkrStyle: {
          totalPlayers: this.state.kkrStyle.totalPlayers,
          totalBudget: this.state.kkrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        miStyle: {
          totalPlayers: this.state.miStyle.totalPlayers,
          totalBudget: this.state.miStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
      });
    }
    if (event.keyCode === 54) {
      console.log(this.state.amount);
      this.setState({
        faceFlag: false,
        amount: updatedAmount,
        currentTeam: "RR",
        buttonStatex:' ',
        rcbStyle: {
          totalPlayers: this.state.rcbStyle.totalPlayers,
          totalBudget: this.state.rcbStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        cskStyle: {
          totalPlayers: this.state.cskStyle.totalPlayers,
          totalBudget: this.state.cskStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        dcStyle: {
          totalPlayers: this.state.dcStyle.totalPlayers,
          totalBudget: this.state.dcStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kxipStyle: {
          totalPlayers: this.state.kxipStyle.totalPlayers,
          totalBudget: this.state.kxipStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        srhStyle: {
          totalPlayers: this.state.srhStyle.totalPlayers,
          totalBudget: this.state.srhStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        rrStyle: {
          totalPlayers: this.state.rrStyle.totalPlayers,
          totalBudget: this.state.rrStyle.totalBudget,
          faceFlag: false,
          filter: "",
        },
        kkrStyle: {
          totalPlayers: this.state.kkrStyle.totalPlayers,
          totalBudget: this.state.kkrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        miStyle: {
          totalPlayers: this.state.miStyle.totalPlayers,
          totalBudget: this.state.miStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
      });
    }
    if (event.keyCode === 55) {
      console.log(this.state.amount);
      this.setState({
        amount: updatedAmount,
        currentTeam: "KKR",
        buttonStatex:' ',
        rcbStyle: {
          totalPlayers: this.state.rcbStyle.totalPlayers,
          totalBudget: this.state.rcbStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        cskStyle: {
          totalPlayers: this.state.cskStyle.totalPlayers,
          totalBudget: this.state.cskStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        dcStyle: {
          totalPlayers: this.state.dcStyle.totalPlayers,
          totalBudget: this.state.dcStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kxipStyle: {
          totalPlayers: this.state.kxipStyle.totalPlayers,
          totalBudget: this.state.kxipStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        srhStyle: {
          totalPlayers: this.state.srhStyle.totalPlayers,
          totalBudget: this.state.srhStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        rrStyle: {
          totalPlayers: this.state.rrStyle.totalPlayers,
          totalBudget: this.state.rrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kkrStyle: {
          totalPlayers: this.state.kkrStyle.totalPlayers,
          totalBudget: this.state.kkrStyle.totalBudget,
          faceFlag: false,
          filter: "",
        },
        miStyle: {
          totalPlayers: this.state.miStyle.totalPlayers,
          totalBudget: this.state.miStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
          faceFlag: false,
        },
      });
    }
    if (event.keyCode === 56) {
      console.log(this.state.amount);
      this.setState({
        faceFlag: false,
        amount: updatedAmount,
        buttonStatex:' ',
        currentTeam: "MI",
        rcbStyle: {
          totalPlayers: this.state.rcbStyle.totalPlayers,
          totalBudget: this.state.rcbStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        cskStyle: {
          totalPlayers: this.state.cskStyle.totalPlayers,
          totalBudget: this.state.cskStyle.totalBudget,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        dcStyle: {
          totalPlayers: this.state.dcStyle.totalPlayers,
          totalBudget: this.state.dcStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kxipStyle: {
          totalPlayers: this.state.kxipStyle.totalPlayers,
          totalBudget: this.state.kxipStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        srhStyle: {
          totalPlayers: this.state.srhStyle.totalPlayers,
          totalBudget: this.state.srhStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        rrStyle: {
          totalPlayers: this.state.rrStyle.totalPlayers,
          totalBudget: this.state.rrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        kkrStyle: {
          totalPlayers: this.state.kkrStyle.totalPlayers,
          totalBudget: this.state.kkrStyle.totalBudget,
          faceFlag: false,
          filter: "brightness(0.5) saturate(0) contrast(1.2) blur(20px)",
        },
        miStyle: {
          totalPlayers: this.state.miStyle.totalPlayers,
          totalBudget: this.state.miStyle.totalBudget,
          filter: "brightness(1.75) saturate(1.2) contrast(0.85)",
          faceFlag: false,
        },
      });
    }

    console.log(this.state.amount);
  };
  handleAmount = (currentPlayer) => {
    console.log(currentPlayer.amount);
    let num = Number(currentPlayer.amount);
    if (num>=200 && num < 500){
      num = num -10;
    }
    else if(num>=100 && num < 200 ){
      num = num -10;
    }
    else{
      num = num -5;
    }
    let updatedAmount = num * 100000;
    console.log(updatedAmount);
    this.setState({
      selectedPlayer: currentPlayer,
      tbstate:false,
      selectedPlayerName: currentPlayer.firstName + " " + currentPlayer.Surname,
      amount: updatedAmount,
    });
    console.log(this.state.amount);
  };

  handleUnsold = () => {
    Array.from(document.querySelectorAll("Input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      amount: 2000000,
      textVal: "UNSOLD",
      faceFlag: true,
      buttonStatex:'',
      soldStyle: {
        bg: "danger",
      },
      unSoldPlayers:[
        ...this.state.unSoldPlayers,
        {
          playerName: this.state.selectedPlayerName,
        },
      ],
  });
  sessionStorage.setItem('appState', JSON.stringify(this.state));
}

  render() {
    const amountFormatter = (amt) => {
      let amtString = amt.toString();
      //return amtString + "L";
      return amtString.substr(0, amtString.length - 5) + "L";
    };
    const budgetFormatter = (amt) => {
      let shtAmt = (amt / 100000).toString();
      console.log(shtAmt);
      if (shtAmt.length <= 4 && shtAmt.length > 3) {
        console.log(shtAmt.slice(0, 2) + "." + shtAmt.slice(2, 4) + "Cr.");
        return shtAmt.slice(0, 2) + "." + shtAmt.slice(2, 4) + "Cr.";
      } else if (shtAmt.length <= 3 && shtAmt.length > 2)
        return shtAmt.slice(0, 1) + "." + shtAmt.slice(1, 3) + "Cr.";
      else if (shtAmt.length <= 2 && shtAmt.length > 1)
        return "00." + shtAmt.slice(0, 2) + "Cr.";
      else if (shtAmt.length <= 1 && shtAmt.length > 0)
        return "00.0" + shtAmt.slice(0, 1) + "Cr.";
    };
    return (
      <div className="App">
        <div className="row1">
          <div className="SAdmin">
            <Admin parentCallback={this.handleAmount}></Admin>
            <input
              type="Text"
              onKeyDown={this.handleKeyDown}
              autoFocus={true}
              disabled = {this.state.tbstate}
              style={{ width: "50%" }}
            ></input>
            <button onClick={this.handleClear} style={{ width: "70%" }}>
              Reset
            </button>
            <button disabled ={!this.state.buttonStatex} onClick={this.handleSold} style={{ width: "70%" }}>
              Sold
            </button>
            <button disabled ={this.state.buttonStatex} onClick={this.handleUnsold} style={{ width: "70%" }}>
              UNSOLD
            </button>
          </div>
          <div className="Player" style={{}}>
            <BidCard
              player={{
                bg:this.state.soldStyle.bg,
                set: this.state.selectedPlayer.Set,
                name: this.state.selectedPlayerName,
                country: this.state.selectedPlayer.Country,
                Specialism: this.state.selectedPlayer.Specialism,
                age: this.state.selectedPlayer.Age,
                category: this.state.selectedPlayer.category,
                StateAssociation: this.state.selectedPlayer.StateAssociation,
                team2020: this.state.selectedPlayer.Team,
                previousTeams: this.state.selectedPlayer.PreviousIPLTeams,
                basePrice: this.state.selectedPlayer.amount,
                iplMatches: this.state.selectedPlayer.IPL,
              }}
            ></BidCard>
            <TopBuys tpb = {this.state.topBuyPlayers}></TopBuys>
            <div style={{ margin: '0px 0px 0px 16px', flex:'row',  height: "4%",
        width: "95%", }}>
        <SoldUnsoldList sp = {this.state.soldPlayers} usp = {this.state.unSoldPlayers}/>
            {/* <button style={{ flex:'50%', fontSize: '0.3rem', width:'50%', backgroundColor:'#28a745'}}>S</button>
            <button style={{ flex:'50%', fontSize: '0.3rem', width:'50%', backgroundColor:'#dc3545' }}>U</button> */}
            </div>

          </div>
          <div className="Middle" style={{ backgroundColor: "snow" }}>
            <div className="Middle1">
              <DisplayScreenw
                bg={this.state.soldStyle.bg}
                textVal={this.state.textVal}
              />
              <DisplayScreenw
                bg={this.state.soldStyle.bg}
                textVal={this.state.textVal}
              />
              <DisplayScreenw
                bg={this.state.soldStyle.bg}
                textVal={this.state.textVal}
              />
              <DisplayScreenw
                bg={this.state.soldStyle.bg}
                textVal={this.state.textVal}
              />
            </div>
            <div
              style={{
                height: "28%",
                backgroundColor: "lightgrey",
                position: "relative",
                fontFamily: "Exo, sans-serif",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              <svg
                viewBox="0 0 46 18"
                style={{ width: "100%", height: "100%" }}
              >
                <text x="0" y="15">
                  {amountFormatter(this.state.amount)}
                </text>
              </svg>
            </div>
            <div className="Middle1">
              <DisplayScreenw
                bg={this.state.soldStyle.bg}
                textVal={this.state.textVal}
              />
              <DisplayScreenw
                bg={this.state.soldStyle.bg}
                textVal={this.state.textVal}
              />
              <DisplayScreenw
                bg={this.state.soldStyle.bg}
                textVal={this.state.textVal}
              />
              <DisplayScreenw
                bg={this.state.soldStyle.bg}
                textVal={this.state.textVal}
              />
            </div>
          </div>
          {/* style={{backgroundColor:this.state.teamBGc}} */}
          <div className="Team" >
            <div className="Team-Right1" >
              <TeamCard
                style={{
                  backgroundColor: "#e00c0b",
                  color: "#f8f9fa",
                  filter: this.state.rcbStyle.filter,
                }}
                name="RCB"
                players={this.state.rcbStyle.totalPlayers}
                budgetLeft={budgetFormatter(this.state.rcbStyle.totalBudget)}
                faceFlag={this.state.faceFlag}
                bidAmt={amountFormatter(this.state.amount)}
              ></TeamCard>
              <TeamCard
                style={{
                  backgroundColor: "rgb(252, 255, 51)",
                  color: "Black",
                  filter: this.state.cskStyle.filter,
                }}
                bid={this.state.cskStyle.bidAmoubt}
                name="CSK"
                players={this.state.cskStyle.totalPlayers}
                budgetLeft={budgetFormatter(this.state.cskStyle.totalBudget)}
                faceFlag={this.state.faceFlag}
                bidAmt={amountFormatter(this.state.amount)}
              ></TeamCard>
              <TeamCard
                style={{
                  backgroundColor: "#00196b",
                  filter: this.state.dcStyle.filter,
                  color: "#f8f9fa",
                }}
                name="DC"
                players={this.state.dcStyle.totalPlayers}
                budgetLeft={budgetFormatter(this.state.dcStyle.totalBudget)}
                faceFlag={this.state.faceFlag}
                bidAmt={amountFormatter(this.state.amount)}
              ></TeamCard>
              <TeamCard
                style={{
                  backgroundColor: "#8c0004",
                  filter: this.state.kxipStyle.filter,
                  color: "#f8f9fa",
                }}
                name="KXIP"
                players={this.state.kxipStyle.totalPlayers}
                budgetLeft={budgetFormatter(this.state.kxipStyle.totalBudget)}
                faceFlag={this.state.faceFlag}
                bidAmt={amountFormatter(this.state.amount)}
              ></TeamCard>
              <TeamCard
                style={{
                  backgroundColor: "#e75900",
                  filter: this.state.srhStyle.filter,
                  color: "#f8f9fa",
                }}
                name="SRH"
                players={this.state.srhStyle.totalPlayers}
                budgetLeft={budgetFormatter(this.state.srhStyle.totalBudget)}
                faceFlag={this.state.faceFlag}
                bidAmt={amountFormatter(this.state.amount)}
              ></TeamCard>
              <TeamCard
                style={{
                  backgroundColor: "#EA1985",
                  filter: this.state.rrStyle.filter,
                  color: "#f8f9fa",
                }}
                name="RR"
                players={this.state.rrStyle.totalPlayers}
                budgetLeft={budgetFormatter(this.state.rrStyle.totalBudget)}
                faceFlag={this.state.faceFlag}
                bidAmt={amountFormatter(this.state.amount)}
              ></TeamCard>
              <TeamCard
                style={{
                  backgroundColor: "#563089",
                  filter: this.state.kkrStyle.filter,
                  color: "#f8f9fa",
                }}
                name="KKR"
                players={this.state.kkrStyle.totalPlayers}
                budgetLeft={budgetFormatter(this.state.kkrStyle.totalBudget)}
                faceFlag={this.state.faceFlag}
                bidAmt={amountFormatter(this.state.amount)}
              ></TeamCard>
              <TeamCard
                style={{
                  backgroundColor: "#083f88",
                  filter: this.state.miStyle.filter,
                  color: "#f8f9fa",
                }}
                name="MI"
                players={this.state.miStyle.totalPlayers}
                budgetLeft={budgetFormatter(this.state.miStyle.totalBudget)}
                faceFlag={this.state.faceFlag}
                bidAmt={amountFormatter(this.state.amount)}
              ></TeamCard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
