def xor(data, key):
   from itertools import izip, cycle
   
   xored = ''.join(chr(ord(x) ^ ord(y)) for (x,y) in izip(data, cycle(key)))
   
   return xored

def keyGen():
    import random
    import string

    a= string.digits[random.randint(0,9)]
    b= string.digits[random.randint(0,9)]
    c= string.digits[random.randint(0,9)]
    d= string.digits[random.randint(0,9)]

    key= a+b+c+d

    e= string.ascii_lowercase[random.randint(0,25)]
    f= string.ascii_lowercase[random.randint(0,25)]
    g= string.ascii_lowercase[random.randint(0,25)]
    h= string.ascii_lowercase[random.randint(0,25)]

    key= key+e+f+g+h

    i= int(a)*ord(e) + int(b)*ord(f) + int(c)*ord(g) + int(d)*ord(h)

    key= key+str(i)

    return key


f= open("flag.txt","r")
flag= f.readline()
o= open("out.txt","w")

key= keyGen()
ciphertxt= xor(flag,key)

# print(flag)
# print(key)

o.write(ciphertxt)