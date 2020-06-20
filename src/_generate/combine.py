import os

jsDir="../js/"
cssDir="../css/"
distDir="../../dist/"

cssfiles=[]
jsfiles=[]


for file in os.listdir(cssDir)+os.listdir(jsDir):
    if file.endswith(".js"):
        jsfiles.append(file)
    if file.endswith(".css"):
        if file=='style.css':
            cssfiles.insert(0,file)
        else:
            cssfiles.append(file)


cssContent=""
for file in cssfiles:
    f=open(cssDir+file,'r')
    cssContent+=f.read()+"\n"
    f.close()

jsContent=""
for file in jsfiles:
    f=open(jsDir+file,'r')
    jsContent+=f.read()+"\n"
    f.close()


f=open(distDir+'microcss.scss','w')
f.write(cssContent)
f.close()

f=open(distDir+'microcss.js','w')
f.write(jsContent)
f.close()