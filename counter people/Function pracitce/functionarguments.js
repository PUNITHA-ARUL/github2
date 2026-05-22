// maximum number of argument object
function findmax()
{
    let max= -Infinity
    for(i = 0; i < arguments.length; i++)
    {
        if(arguments[i] > max)
        {
            max= arguments[i]
        }
    }
    return max
}

console.log('Here your infinity number', + findmax(300,400,500))

// minimum number of argument object
function findmin()
{
   let  min= Infinity
    for( i=0; i < arguments.length; i++)
    {
        if(arguments[i] < min)
        {
            min= arguments[i]
        }
    }
return min
}
console.log('Here your infinity number', + findmin(300,400,500))
