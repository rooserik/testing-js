var input = process.argv.slice(2)[0];

if(isJuf(input)){
  console.log('juf!');
}

function isJuf( number ){
  return (isDivisibleBy7(number)) || (contains7(number));
}

function contains7( number ){
  var string = String( number );
  return string.indexOf('7') !== -1;
}


function isDivisibleBy7( number ){
  return number % 7 === 0;
}

module.exports = {
    isJuf: isJuf,
    isDivisibleBy7: isDivisibleBy7,
    contains7: contains7
};
