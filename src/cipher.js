const cipher = {encode,decode};
  
function encode(offset, string){

    let texto = "";

    if (typeof offset !== "number" || typeof string !== "string"){
      throw new TypeError
    }

    for (let c=0; c<string.length; c++){   
       let processo= ((string.charCodeAt(c)-65+offset)%26)+65; 
       texto += String.fromCharCode(processo);
  }

  return texto;
  
  }


function decode(offset,string){

  let texto = "";

  if (typeof offset !== "number" || typeof string !== "string"){
    throw new TypeError
  }

  for (let c=0; c<string.length; c++){
    let processo= ((string.charCodeAt(c)-90-offset)%26)+90; 
    texto += String.fromCharCode(processo);
  }

  return texto;

  }

export default cipher;

