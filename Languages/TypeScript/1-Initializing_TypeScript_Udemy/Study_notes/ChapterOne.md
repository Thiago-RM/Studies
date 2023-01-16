# Class Guidelines

When creating the .ts file, test it using tsc <file name>.ts.
For example: basic.ts
  
Remember to run the tsc command on the folder

## List Commands  

~~~typescript
// Initializing the TypeScript  
    tsc --init  
// Enter npm dev command and launch it  
    npm start  
//Insert the command npm dev and initializing then  
    npm run dev  
~~~  

~~~json
"_comment": "Enter the command below for node to initialize and monitor changes in .ts"  
  "dev": "tsc -w & npm run start"
~~~
  
## Commands for node nvm folders:
   
sudo ln -s "$(which node)" /usr/bin/node

sudo ln -s "$(which npm)" /usr/bin/npm

When starting a typescript project use:
npm init -y

**live-server**: npm i -s live-server

**tsc --init** --> Needed to start typescript projects! Ever!