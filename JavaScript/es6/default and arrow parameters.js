const calculateSalary = (basicSalary, bonus = 5000) => {
    return basicSalary + bonus;
};

console.log(calculateSalary(30000));

console.log(calculateSalary(30000, 8000));