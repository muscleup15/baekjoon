let arr: [Int] = {
    var temp = [Int]()
    (0..<9).forEach { _ in 
        temp.append(Int(readLine()!)!)
    }
    return temp
}()

let remaining = arr.reduce(0, +) - 100

loop: for i in 0..<8 {
    for j in (i+1)..<9 where arr[i] + arr[j] == remaining {
        print(arr
            .sorted()
            .reduce("", {
                guard $1 != arr[i] && $1 != arr[j] else { return $0 }
                return "\($0)\n\($1)"
            })
        )
        break loop
    }
}
