import { newKitFromWeb3 } from "@celo/contractkit";
import { useState, useEffect } from "react";
import New from "./components/New";
import BigNumber from "bignumber.js";
import star from "./star.jpg";
import view from "./view.jpg";
import Web3 from "web3";
import "./App.css";
import erc20abi from "./contracts/erc20.abi.json";
import reelsAbi from "./contracts/reels.abi.json";

const reelsAddress = "0xd74E4aC49C0f3E5D0d242d5e5c8fF0cBDabE7A81";
const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
const ERC20_DECIMALS = 18;

function App() {
  const [kit, setKit] = useState();
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState();
  const [movies, setMovies] = useState();
  const [reels, setReels] = useState();

  useEffect(() => {
    if (reels) {
      allMovies();
    }
  }, [reels, movies]);

  useEffect(() => {
    if (kit && address) {
      getBalance();
    }
  }, [kit, address]);

  useEffect(() => {
    connectWallet();
  }, []);

  // function to query all movies
  const allMovies = async () => {
    try {
      const length = await reels.methods.serialNumber().call();
      const _movies = [];
      for (let i = 0; i < length; i++) {
        let movie = await new Promise(async (resolve) => {
          let _movie = await reels.methods.getMovieDetails(i).call();
          resolve({
            index: i,
            name: _movie[0],
            description: _movie[1],
            thumbnail: _movie[2],
            length: _movie[3],
            views: _movie[4],
            rating: _movie[5],
            initialVal: _movie[6],
            currentVal: _movie[7],
          });
        });
        _movies.push(movie);
      }
      const movies = await Promise.all(_movies);
      setMovies(movies);
    } catch (e) {
      console.log(e);
    }
  };

  // function to add new movie
  const addMovie = async (name, description, thumbnail, length, baseValue) => {
    try {
      const value = new BigNumber(baseValue)
        .shiftedBy(ERC20_DECIMALS)
        .toString();
      const txn = await reels.methods
        .addMovie(name, description, thumbnail, length, value)
        .send({ from: address });
    } catch (e) {
      console.log(e);
    }
  };

  // function to watch movie
  const watchMovie = async (currentVal, serial) => {
    try {
      await approvePayment(currentVal);
    } catch (e) {
      console.log(e);
    }

    try {
      await reels.methods.watchMovie(serial).send({ from: address });
    } catch (e) {
      console.log(e);
    }
  };

  // function to rate movie
  // NOTE: user can rate a movie only once
  const rateMovie = async (serial, rate) => {
    try {
      await reels.methods.rateMovie(serial, rate).send({ from: address });
    } catch (e) {
      console.log(e);
    }
  };

  const approvePayment = async (_amount) => {
    const cUSDContract = new kit.web3.eth.Contract(
      erc20abi,
      cUSDContractAddress
    );
    await cUSDContract.methods
      .approve(reelsAddress, _amount)
      .send({ from: kit.defaultAccount });
  };

  // function to connect this dapp to the wallet address
  const connectWallet = async () => {
    if (window.celo) {
      // alert("⚠️ Please approve this DApp to use it.");
      try {
        await window.celo.enable();
        const web3 = new Web3(window.celo);
        let kit = newKitFromWeb3(web3);

        const accounts = await kit.web3.eth.getAccounts();
        const defaultAccount = accounts[0];
        kit.defaultAccount = defaultAccount;

        setKit(kit);
        setAddress(defaultAccount);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(
        "You need to install the celo wallet extension in order to use this app"
      );
    }
  };

  // function to set balance of wallet address (in cUSD) and "reels" contract
  const getBalance = async () => {
    try {
      const balance = await kit.getTotalBalance(address);
      const cUsdBalance = balance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2);
      const reels = new kit.web3.eth.Contract(reelsAbi, reelsAddress);

      setBalance(cUsdBalance);
      setReels(reels);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="heading">
        <div className="logo-text">ShowMax</div>
        <div className="bal">{balance} cUSD</div>
      </div>
      <New addMovie={addMovie} />
      <div className="movies">
        {movies?.map((movie) => (
          <div className="movie">
            <img src={movie.thumbnail} />
            <div className="movie-body">
              <div className="movie-name">
                {movie.name} <span>({movie.length} minutes)</span>
              </div>
              <div className="movie-description">{movie.description}</div>
              <div className="movie-details">
                <div className="detail-1 detail">
                  <div>Current Value</div>
                  <div>
                    $
                    {BigNumber(movie.currentVal)
                      .shiftedBy(-ERC20_DECIMALS)
                      .toString()}
                  </div>
                </div>
                <div className="detail-2 detail">
                  <img src={view} alt="eye-image" />
                  <div>{movie.views}</div>
                </div>
                <div className="detail-3 detail">
                  <div>Rating</div>
                  <div>{movie.rating}</div>
                </div>
              </div>
              <button
                className="watch-button"
                onClick={() => watchMovie(movie.currentVal, movie.index)}
              >
                Watch
              </button>
              <div className="rate-section">
                <div className="rate-text">Rate movie</div>
                <div className="rate-container">
                  <div
                    className="star"
                    onClick={() => rateMovie(movie.index, 1)}
                  >
                    <img src={star} alt="star-image" />
                  </div>
                  <div
                    className="star"
                    onClick={() => rateMovie(movie.index, 2)}
                  >
                    <img src={star} alt="star-image" />
                  </div>
                  <div
                    className="star"
                    onClick={() => rateMovie(movie.index, 3)}
                  >
                    <img src={star} alt="star-image" />
                  </div>
                  <div
                    className="star"
                    onClick={() => rateMovie(movie.index, 4)}
                  >
                    <img src={star} alt="star-image" />
                  </div>
                  <div
                    className="star"
                    onClick={() => rateMovie(movie.index, 5)}
                  >
                    <img src={star} alt="star-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
