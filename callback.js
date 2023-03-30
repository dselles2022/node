function firstCall(income, func)
{
    income =15.50;
    func(income); 
}

firstCall(50, log)

function log(income)
{
    console.log(income)
}