import os

files=[]
for file in os.listdir("./"):
    if file.endswith(".css"):
        if file=='style.css':
            files.insert(0,file)
        else:
            files.append(file)


content=""
for file in files:
    f=open(file,'r')
    content+=f.read()+"\n"
    f.close()

f=open('../dist/microcss.css','w')
f.write(content)
f.close()

f=open('../dist/microcss.min.css','w')
f.write(content.replace("\n"," ").replace("\r","").replace("\t","").replace("  ",""))
f.close()
