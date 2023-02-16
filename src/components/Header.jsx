import React from "react";

let greeting;
const time = new Date().getHours();
const innerStyle = {
  color: "red"
};
if (time > 12 && time <= 18) {
  greeting = "Good Afternoon";
  innerStyle.color = "green";
} else if (time > 18 && time < 24) {
  greeting = "Good Night";
  innerStyle.color = "blue";
} else {
  greeting = "Good Morning";
  innerStyle.color = "red";
}

function Header() {
  return (
    <div>
      <h1 className="heading" style={innerStyle}>
        {greeting}
      </h1>
    </div>
  );
}

export default Header;
