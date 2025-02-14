module Operations

open System

let sum (x: float) (y: float) : float = x + y
let difference (x: float) (y: float) : float = x - y
let multiplication (x: float) (y: float) : float = x * y

let division (x: float) (y: float) : float =
    if y <> 0.0 then x / y
    else 
        printfn "Ошибка: деление на ноль"
        0.0

let pow (x: float) (y: float) : float = Math.Pow(x, y)
let sin (x: float) : float = Math.Sin(x)
let cos (x: float) : float = Math.Cos(x)
let tanh (x: float) : float = Math.Tanh(x)