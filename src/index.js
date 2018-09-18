class SmartCalculator {
  constructor(initialValue) {
    this.value=initialValue;
    this.expression="this.value";
    this.result=initialValue;
    return this;
  };

  add(number) {
   this.expression+="+"+number;
   return this;
  }
  
  subtract(number) {
    this.expression+="-"+number;
   return this;
  }

  multiply(number) {
  this.expression+="*"+number;
  return this;
  }

  devide(number) {
    this.expression+="/"+number;
    return this;
  }

  pow(number) {
    this.expression+="**"+number;
    return this;
    //more complicated solution
    /*
    let params=(this.expression.slice()).split(/[\+\-\/\*\,]/);
    let indexToRemove=params.length-1;
    this.expression=this.expression.substring(0,this.expression.length-params[indexToRemove].length);
    let prevNum=params[indexToRemove].split(")").join("");
    this.expression+="Math.pow("+prevNum+","+number+params[indexToRemove].substring(prevNum.length,params[indexToRemove].length)+")"
    return this;
    */
  }

  valueOf(){
    this.result=eval(this.expression);
    return this.result
  }
}

module.exports = SmartCalculator;
