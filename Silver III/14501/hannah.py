remain = int(input())
workday = [0]
avg = 0
total = []
for today in range(1, remain+1):
    day, rate = map(int, input().split())
    # 근무 날짜 벗어나는 것 제외
    if today + day -1 <= remain:
        if today != 1 and today <= avoid_day:
            tmp_day = today + day - 1
            tmp_avg = rate/(tmp_day-workday[-1])
            if tmp_avg > avg:
                avg = tmp_avg
                avoid_day = tmp_day
                total.pop()
                total.append(rate)
        else:
            avoid_day = today + day - 1
            avg = rate/(avoid_day-workday[-1])
            total.append(rate)
            if today != 1:
                workday.append(today-1)
print(sum(total))

