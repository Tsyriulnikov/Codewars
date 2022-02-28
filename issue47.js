function enough(cap, on, wait) {
    let result = cap - (on + wait);
    return result >= 0 ? 0 : Math.abs(result);    
  }