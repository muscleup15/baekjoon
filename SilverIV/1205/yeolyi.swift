temp()

func temp() {
    let input = readLine()!.split(separator: " ").map { Int($0)! }
    if input[0] == 0 {
        print(1)
        return
    }
    let scores = readLine()!.split(separator: " ").map { Int($0)! }

    if input[0] == input[2] && scores.last! >= input[1] {
        print(-1)
        return 
    }

    if let index = scores.firstIndex(where: { $0 <= input[1] }) {
        print(index+1)
    } else {
        print(scores.endIndex + 1)
    }
}

