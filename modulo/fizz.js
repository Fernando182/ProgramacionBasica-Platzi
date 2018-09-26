/* ## Fizz Buzz Clasico ## */

for(var i = 1; i <= 500; i++)
{
  if (esDivisible(i,3) && esDivisible(i,5)) {
    document.write("Fizz-Buzz, ");
  } else {
    if(esDivisible(i,3))
    {
      document.write("Fizz, ");
    }
    if(esDivisible(i,5))
    {
      document.write("Buzz, ");
    }
  }

  if(!esDivisible(i,3) && !esDivisible(i,5))
  {
    document.write(i+", ");
  }

  if (esDivisible(i,10)) {
      document.write("<br />");
  }
}

function esDivisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
