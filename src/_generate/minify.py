f=open('../../dist/microcss.css','w')
content=f.read()
f.close()

f=open('../../dist/microcss.min.css','w')
f.write(content.replace("\n"," ").replace("\r","").replace("\t","").replace("  ",""))
f.close()