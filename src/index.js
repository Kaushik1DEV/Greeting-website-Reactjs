import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

let cd=new Date();
let h=cd.getHours();

const cssStyle={


};

let greet="";
 if(h>=1 && h<12)
 {
   greet="Good Morning";
    cssStyle.color='green';
  }
else if(h>=12 && h<=19)
 {
   greet="Good Afternoon";
   cssStyle.color='purple';
 }
else
{
  greet="Good Night";
  cssStyle.color='pink';
}

ReactDom.render(
  <><div>
<h1 >Hello Sir, <span style={cssStyle}>{greet}</span></h1></div></>,
document.getElementById("root")
);