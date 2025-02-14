module Funcs

let getSum (x:int) (y:int) : int  = x + y

let getDifference (x:int) (y:int) : int = x - y

let getMultiplication (x:int) (y:int) : int = x * y

let getDivision x y =
    if y <> 0.0 then x / y
    else 
        printfn "Ошибка: деление на ноль"
        0.0

let rec getFactorial x =
    if x = 0 then 1
    elif x = 1 then 1
    else x * getFactorial(x-1)

