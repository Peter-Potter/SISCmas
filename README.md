## Project for SISC XMAS event

### Prerequisites
Asigurati-va ca aveti node.js si git instalat pe calculator/laptop plss


### Setup (prima oara cand deschideti proiectul)
Dupa ce ati clonat acest proiect pentru prima oara, trebuie sa instalati toate dependentele de care are nevoie proiectul folosind npm.
Deschideti un terminal folosind combinatia "CTRL + `" si asigurati-va ca sunteti la baza proiectului, adica ".../SISCmas" (punctele de 
suspensie reprezinta ruta de dinainte de proiect, adica folderul in care ati instalat acest proiect. De ex, daca il aveti instalat pe
desktop, ruta intreaga va fi C/Users/User/Desktop/SISCmas)
Scrieti comanda "npm install" in terminal si asteptati sa se instaleze dependentele. In cazul in care terminalul va intreaba un mesaj
de genul "Do you want to install package xyz? (y)", apasati enter.
Dupa ce comanda a rulat si va apare din nou linia de comanda, inseamna ca dependetele s-au instalat si suntem gata sa pornim site-ul!
IMPORTANT! Acest pas se va face doar atunci cand clonati proiectul pentru prima oara. Odata instalate dependetele nu mai este nevoie 
sa le instalati din nou, evident, si puteti doar deschide site-ul direct.


### Pentru a porni site-ul:
Deschideti proiectul in vscode (Duh)
Deschideti un terminal folosind combinatia de taste "CTRL + `" si asigurati-va ca terminalul este pus la adresa ".../SiSCmas"
Scritei "cd backend" in terminal pentru a naviga in folderul de backend (adresa din terminal trebuie sa fie acum ../SISCmas/backend)
Scrieti in terminal comanda "npm run dev"
Asteptati pana cand va apare mesajul "Server running on http://localhost:8080"
Dati click pe link pentru a deschide site-ul in browser.
Boom, acesta este site-ul nostru (momentan arata ca camera alba, dar we are getting there..)


## Pentru cei de la frontend:
Voi veti lucra in folderul de frontend. Dupa cum vedeti se afla cateva file de html inauntru, iar daca navigati la adresa 
"http://localhost:8080/fila.html" (fila este un placeholder, in practica trebuie sa puneti numele fisierului) veti putea vedea paginile pe 
site. Deocamdata trebuie sa scrieti si extensia .html in adresa, dar incerc sa ma interesez sa vad cum sa schimb asta.
Aici puteti sa va puneti paginile la care lucrati, inclusiv cele de CSS si de JS. 
Aici vor fi paginile care se vor vedea pe site.


## Cum salvam modificarile facute?
Nu ma refer la CTRL + S aici. Ideea e cum facem sa salvam modificarile in folderul comun de pe github. Aici e cea mai importanta parte, 
deoarece este baza lucrului in echipa in software. Daca nu am avea git si github ar trebui sa ne trimitem unul altuia zip-uri cu proiectul
pe care il avem salvat local, ca cealalta persoana sa vada modificarile facute ceea ce ar fi ingrozitor. De aceea folosim github.

Asa ca, fiti foarte atenti la urmatoarea secventa. Si din nou, make sure ca aveti git instalat.
In primul rand, deschideti un terminal si scrieti comanda "git remote -v". Daca primiti ca output secventa
origin  https://github.com/Peter-Potter/SISCmas.git (fetch)
origin  https://github.com/Peter-Potter/SISCmas.git (push)
e in regula. Daca nu primiti nimic inseamna ca origin nu e setat, asa ca bagati in terminal comanda:
"git remote add origin <https://github.com/Peter-Potter/SISCmas.git>"
Ca sa adaugati serverul de origine, apoi verificati din nou cu "git remote -v".

Daca totul e in regula, putem sa salvam modificari acum in folderul de pe github. Yay!

Presupunem ca avem un set de modificari pe care le-am facut local la proiect si vrem sa le adaugam pe github. Avem urmatoarea secventa:
1. Ctrl + S pentru a salva modificarile local
2. Deschideti un terminal care sa fie la adresa de baza ".../SISCmas"
Acum, in terminal:
3. git pull
4. git add .
5. git commit -m"Mesajul vostru de commit"
6. git push origin main

Stiu ca arata ca magie neagra, dar basically ce am facut a fost sa ii aducem la cunostinta lui git schimbarile noastre si apoi sa il facem
sa le trimita pe github. Daca totul a mers bine, ar trebui ca modificarile sa apara daca dam un refresh pe pagina de github. Daca nu, putem
sa inchidem proiectul si sa punem ciocanul pe mama lui de laptop ca oricum cn drq mai codeaza fara AI in 2026. M-am abatut de la subiect, anyway.


## Summary
Cam astea sunt chestiile de baza. Sper sa va mearga totul bine din prima si sa nu aveti prea multe impotmoliri. Daca aveti probleme, dati-mi
mesaj oricand si va ajut fara nicio problema, suntem o echipa after all. Sau puteti sa folositi AI ca sa umpleti gaurile daca simtiti ca aveti 
nevoie de explicatii in plus. 
Happy coding si ne auzim oricand, din nou.

