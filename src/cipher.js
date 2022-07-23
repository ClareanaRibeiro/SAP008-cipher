const cipher = {
  encode: function(offset,string){

    // ((string.charCodeAt()-65+offset)%26+65);
    
  return offset + string
  }
};




const ciphertwo = {
  decode: function(offset,string){

    return offset + string
  }
};

export default cipher;
