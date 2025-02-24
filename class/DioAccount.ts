export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  setBalance = (value: number): void => {
    this.balance = value;
  }

  getBalance = (): number => {
    return this.balance;
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Voce depositou R$${value} e seu saldo atual é de R$${this.balance}`);
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.validateBalance(value)) {
        this.balance -= value;
        console.log(`Você sacou R$${value} e seu saldo atual é de R$${this.balance}`);
      }
    }
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  protected validateBalance = (value: number): boolean => {
    if (value < this.balance) {
      return true;
    }

    throw new Error("Sem Saldo na conta");
  };
}
