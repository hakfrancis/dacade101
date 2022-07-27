// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

pragma solidity >=0.8.0;

interface IERC20Token {
    function transfer(address, uint256) external returns (bool);

    function approve(address, uint256) external returns (bool);

    function transferFrom(
        address,
        address,
        uint256
    ) external returns (bool);

    function totalSupply() external view returns (uint256);

    function balanceOf(address) external view returns (uint256);

    function allowance(address, address) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

contract Reels {
    // deployer of contract that receives all funds payed for viewing movies
    address payable owner;
    // keep track of movies serial number
    uint256 private serial;

    address cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    // movie details
    struct Movie {
        address owner;
        string name;
        string description;
        string thumbnail;
        uint256 length;
        uint256 rates;
        uint256 rateCount;
        uint256 timesViewed;
        uint256 baseValue;
    }

    // mapping to keep track of all Movies
    mapping(uint256 => Movie) private movies;
    // mapping to keep track of movies user has already rated to prevent rating multiple times
    mapping(uint256 => mapping(address => bool)) private rated;
    mapping(uint => mapping(address => bool)) private viewed;
    mapping(uint => bool) private exists;

    modifier exist(uint _movieSerial) {
        require(exists[_movieSerial], "Query of non existent movie");
        _;
    }

    modifier isValidViewer(uint _movieSerial){
        require(movies[_movieSerial].owner != msg.sender || owner != msg.sender, "Unauthorized caller");
        _;
    }

    constructor() {
        owner = payable(msg.sender);
    }

    /// @dev function to get the calculated value of Movie
    /// @notice Increment movie value by 10% for every view
    function calculateValue(uint256 _movieSerial)
        public
        view
        exist(_movieSerial)
        returns (uint256)
    {
        Movie memory movie = movies[_movieSerial];
         uint256 increment = movie.baseValue * (movie.timesViewed * (10 / 100));
        uint256 calculatedValue = movie.baseValue + increment;
        return calculatedValue;
    }

    /// @dev Add new movie into the studio
    /// @param _length is in seconds
    function addMovie(
        string memory _name,
        string memory _description,
        string memory _thumbnail,
        uint256 _length,
        uint256 _value
    ) external {
        require(_length > 1 minutes, "Movie length too short");
        require(_value > 0, "value has to be greater than zero");
        require(bytes(_name).length > 0, "Empty name");
        require(bytes(_description).length > 0, "Empty description");
        require(bytes(_thumbnail).length > 0, "Empty image url");
        exists[serial] = true;
        movies[serial] = Movie(
            msg.sender,
            _name,
            _description,
            _thumbnail,
            _length,
            5,
            1,
            0,
            _value
        );
        serial += 1;
    }

    /// @dev function to remove a movie from the cinema
    function removeMovie(uint256 _movieSerial) external exist(_movieSerial) {
        require(movies[_movieSerial].owner == msg.sender || owner == msg.sender, "Unauthorized caller");
        movies[_movieSerial] = movies[serial - 1];
        delete movies[serial - 1];
        exists[serial - 1] = false;
        serial -= 1;
    }

    /// @dev function to watch movie and pay tokens for it
    function watchMovie(uint256 _movieSerial)
        external
        payable
        exist(_movieSerial)
        isValidViewer(_movieSerial)
    {
        if (!viewed[_movieSerial][msg.sender]) {
            viewed[_movieSerial][msg.sender] = true;
            // get calculated value of movie
            uint256 calculatedValue = calculateValue(_movieSerial);
            // transfer calculated value from to owner of studio
            require(
                IERC20Token(cUsdTokenAddress).transferFrom(
                    msg.sender,
                    owner,
                    calculatedValue
                ),
                "Transfer failed"
            );
        }
        movies[_movieSerial].timesViewed++;
    }

    /// @dev function to rate a movie, 1 and 5 inclusive
    function rateMovie(uint256 _movieSerial, uint256 _rate) external exist(_movieSerial) isValidViewer(_movieSerial){
        require(
            viewed[_movieSerial][msg.sender],
            "You need to watch the movie first"
        );
        require((_rate > 0) && (_rate <= 5), "Invalid rate entered");
        require(
            !rated[_movieSerial][msg.sender],
            "You can't rate movie more than once"
        );
        movies[_movieSerial].rates += _rate;
        movies[_movieSerial].rateCount++;
        rated[_movieSerial][msg.sender] = true;
    }

    /// @dev function to get movie details
    function getMovieDetails(uint256 _movieSerial)
        public
        view
        exist(_movieSerial)
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
        Movie memory movie = movies[_movieSerial];
        name = movie.name;
        description = movie.description;
        thumbnail = movie.thumbnail;
        length = movie.length;
        timesViewed = movie.timesViewed;
        rating = movie.rates / movie.rateCount;
        initialValue = movie.baseValue;
        currentValue = calculateValue(_movieSerial);
    }

    /// @dev returns the number of movies available
    function serialNumber() public view returns (uint256) {
        return serial;
    }
}
