
class BankAccount:

    def __init__(self, account_number, holder_name, balance, pin):

        self.account_number = account_number
        self._holder_name = holder_name
        self.__balance = balance
        self.__pin = pin


    def display_account(self):

        print("\nAccount Details")
        print("---------------")
        print("Account Number :", self.account_number)
        print("Holder Name    :", self._holder_name)
        print("Balance        :", self.__balance)


    def deposit(self, amount):

        if self.__validate_amount(amount):

            self.__balance += amount
            print("\nAmount Deposited Successfully")

        else:

            print("\nInvalid Deposit Amount")


    def withdraw(self, amount):

        if not self.__validate_amount(amount):

            print("\nInvalid Withdrawal Amount")

        elif amount > self.__balance:

            print("\nInsufficient Balance")

        else:

            self.__balance -= amount
            print("\nAmount Withdrawn Successfully")


    def get_balance(self):

        return self.__balance


    def set_pin(self, old_pin, new_pin):

        if old_pin == self.__pin:

            self.__pin = new_pin
            print("\nPIN Updated Successfully")

        else:

            print("\nIncorrect Old PIN")


    def _account_type(self):

        print("Savings Account")


    def __validate_amount(self, amount):

        return amount > 0



account = BankAccount(
    "ACC101",
    "Safiya",
    50000,
    1234
)


print("========== Public Attribute ==========\n")

print(account.account_number)

account.account_number = "ACC500"

print(account.account_number)


print("\n========== Protected Attribute ==========\n")

print(account._holder_name)

account._holder_name = "Rahul"

print(account._holder_name)


print("\n========== Private Attribute ==========\n")

# print(account.__balance)


account.display_account()

account.deposit(10000)

account.withdraw(15000)

account.display_account()


print("\n========== Getter ==========\n")

print("Available Balance :", account.get_balance())


print("\n========== Setter ==========\n")

account.set_pin(1234, 9876)

account.set_pin(1111, 2222)


print("\n========== Protected Method ==========\n")

account._account_type()


print("\n========== Name Mangling ==========\n")

print(account._BankAccount__balance)


print("\n========== Private Method ==========\n")

# account.__validate_amount(100)