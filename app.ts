import { CompanyAccount } from './class/CompanyAccount'
import { InvestAccount } from './class/InvestAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(1000)
peopleAccount.withdraw(500)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(1000)

const investAccount = new InvestAccount('Invest', 30)
investAccount.deposit(1000)