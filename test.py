"""""
a = [[[1,2],[3,4]],[[5,6],[7,8]],[[9,10],[11,12]]]
for i in a:
    for j in i:
        for k in j:
            print(k)

print(a[::-1])

n = int(input())
"""

#print([i for i in range(1, 11) if i %2 == 0])
lit =  [[[1,2],[3,4]],[[5,6],[7,8]],[[9,10],[11,12]]]
print(lit)
print(num for row in lit for num in row )
