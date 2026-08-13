import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("About Constructor");
  }

  componentDidMount() {
    //console.log("About componentDidMount");
  }

  render() {
    //console.log("About Render");
    return (
      <div>
        <h1 className="text-center text-2xl font-bold">About Us</h1>
        <h2 className="text-center">This is an about page.</h2>

        <UserClass
          name={"First (Class)"}
          location={"Kurukshetra, Haryana (Class)"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is an about page.</h2>

//       <UserClass
//         name={"Pranshu Garg (Class)"}
//         location={"Kurukshetra, Haryana (Class)"}
//       />
//     </div>
//   );
// };

export default About;
