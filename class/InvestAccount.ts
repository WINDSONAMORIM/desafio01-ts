import { DioAccount } from "./DioAccount";

export class InvestAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

    deposit= (value: number) => {
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + value + 10);
            console.log(`Você depositou R$${value} e seu saldo atual é de R$${this.getBalance()}`);
        }
    }
}