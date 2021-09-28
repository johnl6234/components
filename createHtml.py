# place file in project directory

import os
projectName = 'contactForm' # change to your project name
os.mkdir('./' + projectName)
os.chdir(projectName)

with open('index.html','x') as index:
    nl = '\n'
    text = f'<!DOCTYPE html>{nl}<html lang="en">{nl}<head>{nl}<!-- Required meta tags -->{nl}<meta charset="UTF-8">{nl}<meta name="viewport" content="width=device-width, initial-scale=1.0">{nl}<meta http-equiv="X-UA-Compatible" content="ie=edge">{nl}<title>{projectName}</title>{nl}<!-- Bootstrap -->{nl}<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">{nl}<!-- Custom CSS -->{nl}<link rel="stylesheet" href="style.css">{nl}</head>{nl}<body>{nl}{nl}{nl}{nl}<!-- Bootstrap JS -->{nl}<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>{nl}<!-- Custom JS -->{nl}<script src="index.js"></script>{nl}</body>{nl}</html>'
    index.write(text)
    index.close()

with open('style.css','x') as style:
    style.close()

with open('index.js','x') as js:
    js.close()


os.mkdir('./images')
