function checkForFactor (base, factor) {
    return base % factor == 0 ? true : false;
  }

  //или (проверка на true/false избыточна)

  return base % factor == 0;