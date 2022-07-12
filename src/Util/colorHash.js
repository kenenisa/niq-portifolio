function StringToColor(stringInput,shade=true) {
    if(!shade){
      return '#aaa';
    }
    let stringUniqueHash = [...stringInput].reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return `hsl(${stringUniqueHash % 360}, 35%, 91%)`;
  }
export default StringToColor