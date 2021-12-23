const ftoc = function(farenheit) {
  let celcius = (farenheit - 32)*(5/9);
  
  console.log(celcius);
  // round to 1 decimal
  celcius = Math.round(celcius*10)/10;    // better this way
                                      // than round(x,1);
  return celcius;
};

const ctof = function(celcius) {
  let farenheit = ((9/5)*celcius)+32;

  // round to 1 decimal
  farenheit = Math.round(farenheit*10)/10;

  return farenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
