import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Pranshu Garg",
        location: "Kurukshetra, Haryana",
      },
    };
    //console.log(this.props.name + " Constructor");
  }

  //   async componentDidMount() {
  //     //console.log("About componentDidMount");
  //     const data = await fetch("https://api.github.com/users/PandaCoder9292");
  //     const json = await data.json();
  //     this.setState({
  //       userInfo: json,
  //     });
  //   }

  render() {
    const { name, location } = this.state.userInfo;
    //console.log(this.props.name + " Render");
    return (
      <div className="user-card m-4 p-4 bg-gray-200 rounded-lg">
        <h2>Name: {name || "Pranshu Garg"}</h2>
        <h3>Location: {location || "Kurukshetra, Haryana"}</h3>
        <h4>Reach Me: gargpranshuwork92@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
