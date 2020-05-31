/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
import React from "react";
// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";

const audios1 = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
];
const audios2 = [
  "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
];
const Q = audios1[0];
const q = audios2[0];
const W = audios1[1];
const w = audios2[1];
const E = audios1[2];
const e = audios2[2];
const A = audios1[3];
const a = audios2[3];
const S = audios1[4];
const s = audios2[4];
const D = audios1[5];
const d = audios2[5];
const Z = audios1[6];
const z = audios2[6];
const X = audios1[7];
const x = audios2[7];
const C = audios1[8];
const c = audios2[8];

const buttonstyle = {
  width: "100px",
  height: "80px",
  margin: "10px 10px 0 0",
  padding: "35px 0 0",
  background: "grey",
  borderRadius: "5px",
  boxShadow: "black 3px 3px 4px",
};
// eslint-disable-next-line react/prefer-stateless-function
let power = false;
let bank = true;
const target = document.getElementById;
function powerButton() {
  power = !power;
  if (power) {
    target.bind(document)("power").className = "float-right";
  } else {
    target.bind(document)("power").className = "float-left";
  }
}
function bankButton() {
  if (power) {
    bank = !bank;
    if (bank) {
      target.bind(document)("bank").className = "float-left";
      target.bind(document)("display").innerHTML = "Heater Kit";
    } else {
      target.bind(document)("bank").className = "float-right";
      target.bind(document)("display").innerHTML = "Piano Kit";
    }
  } else {
    target.bind(document)("display").innerHTML = "";
  }
}
let newVolume = ".5";
function start(I, i, P, p, j) {
  if (power) {
    if (bank) {
      const audio = new Audio(I);
      audio.play();
      audio.volume = newVolume;
      document.getElementById.bind(document)("display").innerHTML = P;
      document.getElementById.bind(document)(j).style.background = "orange";
    } else {
      const audio = new Audio(i);
      audio.play();
      document.getElementById.bind(document)("display").innerHTML = p;
      document.getElementById.bind(document)(j).style.background = "orange";
    }
  }
}
function updateVolume() {
  newVolume = document.getElementById("range").value;

  // eslint-disable-next-line prefer-template
  document.getElementById("display").innerText = "Volume:" + newVolume;
}

document.addEventListener("DOMContentLoaded", function () {
  /* I'll Suggest to use $(document).ready(function(){ }); If Using JQuery */
  document.getElementById("range").addEventListener("input", updateVolume);
});
function change(i) {
  document.getElementById.bind(document)(i).style.background = "grey";
}
document.onkeypress = function (event) {
  if (event.keyCode === 113 || event.which === 81) {
    start(Q, q, "Heater 1", "Chord 1", "Q");
    setTimeout(function () {
      change("Q");
    }, 150);
  } else if (event.keyCode === 119 || event.which === 87) {
    start(W, w, "Heater 2", "Chord 2", "W");
    setTimeout(function () {
      change("W");
    }, 150);
  } else if (event.keyCode === 101 || event.which === 69) {
    start(E, e, "Heater 3", "Chord 3", "E");
    setTimeout(function () {
      change("E");
    }, 150);
  } else if (event.keyCode === 97 || event.which === 65) {
    start(A, a, "Heater 4", "Shaker", "A");
    setTimeout(function () {
      change("A");
    }, 150);
  } else if (event.keyCode === 115 || event.which === 83) {
    start(S, s, "Clap", "Open HH", "S");
    setTimeout(function () {
      change("S");
    }, 150);
  } else if (event.keyCode === 100 || event.which === 68) {
    start(D, d, "Open HH", "Closed HH", "D");
    setTimeout(function () {
      change("D");
    }, 150);
  } else if (event.keyCode === 122 || event.which === 90) {
    start(Z, z, "Kick n' Hat", "Punchy Kick", "Z");
    setTimeout(function () {
      change("Z");
    }, 150);
  } else if (event.keyCode === 120 || event.which === 88) {
    start(X, x, "Kick", "Side Stick", "X");
    setTimeout(function () {
      change("X");
    }, 150);
  } else if (event.keyCode === 99 || event.which === 67) {
    start(C, c, "Closed H", "Snare", "C");
    setTimeout(function () {
      change("C");
    }, 150);
  }
};

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3 className="display-3 text-success text-center d-inline ml-3">
          Drum Machine by S.Tahmid
        </h3>
        <img
          alt="saad"
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            marginLeft: "50px",
          }}
          src="https://scontent.fdac13-1.fna.fbcdn.net/v/t1.0-9/p960x960/81221743_2435285643453823_8990952269633552384_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeEtllR627_6fNsEDufGr2JibcOJ_ncXAc5tw4n-dxcBzrRNHmkA_T7HEp2UFkTLPCBX4l50lE4fKHE7MKBi_Uw0&_nc_ohc=kTiOzM5dqHIAX8E0FlI&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=2c9ff1bbbe909109c0bc50f34bd45bb3&oe=5ED53824"
        />

        <div
          className=" container text-monospace"
          style={{
            background: "#b3b3b3",
            width: "660px",
            height: "320px",
            border: "8px solid orange",
          }}
          id="drumcontainer"
        >
          <div id="pad" className="d-inline-block ml-4 mt-3 float-left">
            <div className="row ">
              <div
                id="Q"
                onClick={() => {
                  start(Q, q, "Heater 1", "Chord 1", "Q");
                  setTimeout(function () {
                    change("Q");
                  }, 150);
                }}
                className="d-flex justify-content-center"
                style={buttonstyle}
              >
                <span className=" font-weight-bold ">Q</span>
              </div>
              <div
                id="W"
                onClick={() => {
                  start(W, w, "Heater 2", "Chord 2", "W");
                  setTimeout(function () {
                    change("W");
                  }, 150);
                }}
                className="d-flex justify-content-center"
                style={buttonstyle}
              >
                <span className="font-weight-bold ">W</span>
              </div>
              <div
                id="E"
                onClick={() => {
                  start(E, e, "Heater 3", "Chord 3", "E");
                  setTimeout(function () {
                    change("E");
                  }, 150);
                }}
                className="d-flex justify-content-center"
                style={buttonstyle}
              >
                <span className="font-weight-bold ">E</span>
              </div>
            </div>
            <div className="row">
              <div
                id="A"
                onClick={() => {
                  start(A, a, "Heater 4", "Shaker", "A");
                  setTimeout(function () {
                    change("A");
                  }, 150);
                }}
                className="d-flex justify-content-center"
                style={buttonstyle}
              >
                <span className="font-weight-bold ">A</span>
              </div>
              <div
                id="S"
                onClick={() => {
                  start(S, s, "Clap", "Open HH", "S");
                  setTimeout(function () {
                    change("S");
                  }, 150);
                }}
                className="d-flex justify-content-center"
                style={buttonstyle}
              >
                <span className="font-weight-bold ">S</span>
              </div>
              <div
                id="D"
                onClick={() => {
                  start(D, d, "Open HH", "Closed HH", "D");
                  setTimeout(function () {
                    change("D");
                  }, 150);
                }}
                className="d-flex justify-content-center"
                style={buttonstyle}
              >
                <span className="font-weight-bold ">D</span>
              </div>
            </div>
            <div className="row">
              <div
                id="Z"
                onClick={() => {
                  start(Z, z, "Kick n' Hat", "Punchy Kick", "Z");
                  setTimeout(function () {
                    change("Z");
                  }, 150);
                }}
                className="d-flex justify-content-center"
                style={buttonstyle}
              >
                <span className="font-weight-bold ">Z</span>
              </div>
              <div
                id="X"
                onClick={() => {
                  start(X, x, "Kick", "Side Stick", "X");
                  setTimeout(function () {
                    change("X");
                  }, 150);
                }}
                className="d-flex justify-content-center"
                style={buttonstyle}
              >
                <span className="font-weight-bold ">X</span>
              </div>
              <div
                id="C"
                onClick={() => {
                  start(C, c, "Closed H", "Snare", "C");
                  setTimeout(function () {
                    change("C");
                  }, 150);
                }}
                className="d-flex justify-content-center"
                style={buttonstyle}
              >
                <span className="font-weight-bold ">C</span>
              </div>
            </div>
          </div>
          <div
            id="controls"
            className=" d-inline-block float-right  mt-5 text-center font-weight-bold  "
            style={{ marginRight: "40px" }}
          >
            <p style={{ margin: "0" }}>Power</p>
            <div
              onClick={powerButton}
              className=" mx-auto"
              style={{
                width: "54px",
                height: "24px",
                padding: "2px",
                backgroundColor: "black",
              }}
            >
              <div
                id="power"
                style={{
                  backgroundColor: "blue",
                  width: "23px",
                  height: "19px",
                  border: "1px solid black",
                }}
              />
            </div>
            <p
              id="display"
              style={{
                padding: "15px 0px",
                width: "200px",
                height: "45px",
                lineHeight: "22px",
                margin: "15px 0px ",
                backgroundColor: "grey",
              }}
            ></p>
            <div style={{ marginBottom: "5px" }}>
              <input
                style={{ color: "black" }}
                type="range"
                id="range"
                min="0"
                step=".1"
                max="1"
              />
            </div>
            <p style={{ margin: "0" }}>Bank</p>
            <div
              onClick={bankButton}
              className=" mx-auto"
              style={{
                width: "54px",
                height: "24px",
                padding: "2px",
                backgroundColor: "black",
              }}
            >
              <div
                id="bank"
                style={{
                  backgroundColor: "blue",
                  width: "23px",
                  height: "19px",
                  border: "1px solid black",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
