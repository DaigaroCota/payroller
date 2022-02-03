
class paystub {
  constructor(individual) {
    this.payee = individual.name;
    this.amount = individual.pay;
  }

  // GETTER
  hasAddress() {
    if (!this.payaddress) {
      return false;
    } else {
      return true;
    }
  }

  // METHODS
  setAddress(address) {
    this.payaddress = address;
  }

}