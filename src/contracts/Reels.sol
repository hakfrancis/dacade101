// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

pragma solidity >= 0.8.0;

interface IERC20Token {
  function transfer(address, uint256) external returns (bool);
  function approve(address, uint256) external returns (bool);
  function transferFrom(address, address, uint256) external returns (bool);
  function totalSupply() external view returns (uint256);
  function balanceOf(address) external view returns (uint256);
  function allowance(address, address) external view returns (uint256);

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract Reels {
    // deployer of contract that receives all funds payed for viewing movies
    address payable owner;
    // keep track of movies serial number
    uint256 internal serial;
    // 
    address cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    // movie details
    struct Movie {
        uint256 serialNo;
        string name;
        string description;
        string thumbnail;
        uint256 length;
        uint256 rates;
        uint256 rateCount;
        uint256 timesViewed;
        uint256 baseValue;
        bool active;
    }

    // mapping to keep track of all Movies
    mapping(uint256 => Movie) internal movies;
    // mapping to keep track of movies user has already rated to prevent rating multiple times
    mapping(uint256 => mapping(address => bool)) internal rated;

    constructor() {
        owner = payable(msg.sender);
    }

    // function to get the calculated value of Movie
    // Increment movie value by 10% for every view
    function calculateValue(uint256 _movieSerial)
        public
        view
        returns (uint256)
    {
        Movie memory movie = movies[_movieSerial];
        uint256 increment = (movie.baseValue * movie.timesViewed) / 10;
        uint256 calculatedValue = movie.baseValue + increment;
        return calculatedValue;
    }

    // Add new movie into the studio
    // @_length in seconds
    function addMovie(
        string memory _name,
        string memory _description,
        string memory _thumbnail,
        uint256 _length,
        uint256 _value
    ) public {
        require(_length > 1 minutes, "Movie length too short");
        movies[serial] = Movie(
            serial,
            _name,
            _description,
            _thumbnail,
            _length,
            5,
            1,
            0,
            _value,
            true
        );
        serial += 1;
    }

    // function to remove a movie from the cinema
    function removeMovie(uint256 _movieSerial) public {
        delete movies[_movieSerial];
    }

    // function to watch movie and pay tokens for it
    function watchMovie(uint256 _serial) public {
        // first confirm if movie is available
        require(movies[_serial].active, "Movie deleted/does not exist");
        // get calculated value of movie
        uint256 calculatedValue = calculateValue(_serial);
        // transfer calculated value from to owner of studio
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                owner,
                calculatedValue
            ),
            "Transfer failed"
        );
        movies[_serial].timesViewed++;
    }

    // function to rate a movie, 1 and 5 inclusive
    function rateMovie(uint256 _serial, uint256 _rate) public {
        require((_rate > 0) && (_rate <= 5), "Invalid rate entered");
        require(!rated[_serial][msg.sender], "You can't rate movie more than once");
        movies[_serial].rates += _rate;
        movies[_serial].rateCount++;
        rated[_serial][msg.sender] = true;
    }


    // function to get movie details
    function getMovieDetails(uint256 _serial)
        public
        view
        returns (
            string memory name,
            string memory description,
            string memory thumbnail,
            uint256 length,
            uint256 timesViewed,
            uint256 rating,
            uint256 initialValue,
            uint256 currentValue
        )
    {
        require(movies[_serial].active, "Movie not active / movie deleted");
        Movie memory movie = movies[_serial];
        name = movie.name;
        description = movie.description;
        thumbnail =  movie.thumbnail;
        length = movie.length;
        timesViewed = movie.timesViewed;
        rating = movie.rates / movie.rateCount;
        initialValue = movie.baseValue;
        currentValue = calculateValue(movie.serialNo);
    }

    //
    function serialNumber() public view returns (uint256) {
        return serial;
    }    
}
