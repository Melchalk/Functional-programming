module Funcs

let getSum (x:int) (y:int) : int  = x + y

let getDifference (x:int) (y:int) : int = x - y

let getMultiplication (x:int) (y:int) : int = x * y

let getDivision x y = x / y

let rec getFactorial x =
    if x = 0 then 1
    elif x = 1 then 1
    else x * getFactorial(x-1)

