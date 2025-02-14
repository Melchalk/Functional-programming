open System
open Operations

let chooseOperation (operation: string) =
    match operation with
    | "+" -> sum
    | "-" -> difference
    | "*" -> multiplication
    | "/" -> division
    | "^" -> pow
    | "sin" -> (fun x _ -> sin x)
    | "cos" -> (fun x _ -> cos x)
    | "tanh" -> (fun x _ -> tanh x)
    | _ -> failwith "Неизвестная операция"

let flag = ref true

while !flag do
    Console.WriteLine("Введите операцию (+, -, *, /, ^, sin, cos, tanh):")
    let operationName = Console.ReadLine()
    let operation = chooseOperation operationName

    Console.WriteLine("Введите первое число:")
    let x = float (Console.ReadLine())

    let y = 
        if operationName = "sin" || operationName = "cos" || operationName = "tanh" then 0.0
        else 
            Console.WriteLine("Введите второе число:")
            float (Console.ReadLine())

    let result = operation x y
    
    printfn "Результат: %f" result
    Console.WriteLine()
