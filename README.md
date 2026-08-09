#Learning React from Scratch
Namaste
//Below is the core way to create React elements
//const heading = React.createElement("h1", {
// id: "heading",
// xyz: "abc"
//}, "Hello World from React");

//But we use JXS to create them easily
// JSX in differnt From HTML
//but it have syntax like HTML
//const heading = <h1>Nameste React</h1>

#React Components - Just basic JS functions which returns JSX elements.

<!-- const HeadingComp = () =>(
    <div>
        <h1>Nameste Learning React Functional</h1>
    </div>
); -->

//nested JXS elements in react component⬆️ .

//In Project
Main 3 components are
#Header - (Logo, Nav items, etc.)
#Body - (Search, Resturant Container (Rest Cards))
#Footer - (Copyright, Address, Contacts , etc.)

Using Props->

<!-- const RestaurantCard = ({resName, cuisine, ratings, time}) =>{
    console.log(props);
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="Res-Photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX30s4-t69QY8uHxQTYgaE3wQIXKYFELTH73K0ZLKQCg&s" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{ratings}</h4>
            <h4>{time}</h4>
        </div>
    );
}; -->                                 {Destructuring on the flight}

else we can use like->

<!-- const RestaurantCard = (props) =>{
    console.log(props);
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="Res-Photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX30s4-t69QY8uHxQTYgaE3wQIXKYFELTH73K0ZLKQCg&s" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.ratings}</h4>
            <h4>{props.time}</h4>
        </div>
    );
}; -->

//Optional Chaining ->
const {cloudImageinaryID, name, cuisines, avgRating, costOfTwo, deliveryTime} = resData?.data;

in key prop
can use index and unique Id
but recommanded one is unique Id
index as key is last resote

//can use Both
i. import Header from "./components/Header.js";
ii. import Header from "./components/Header";
//Both work fine

//Two types of Exports and Imports

1. default Exports and Imports
2. Named Exports and Imports

//useState Variable ->
const [listOfReastaurant] = useState([]);
is same as
let listOfReastaurant = [];

but above one is React variable
and below one is normal JS variable

//Rather than doing this->
setlistOfReastaurants(
json.data.cards[1].card.card.gridElements.infoWithStyle
.restaurants,
);

//Do this->
setlistOfReastaurants(
json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
?.restaurants,
);

#Because it is a good pratice

//Important Stuff->
//React Fiber
//Whenever my state variable changes (updates), react triggers a reconciliation cycle(re-render the Whole component) -> diff algorithm used and only differences are changed

# useEffect (() => {}, []) ----> renders every time our component renders

//e.g -----> useEffect(() => {
console.log("useEffect Hook called");
});

{/\*\*/} --> comments in JSX
