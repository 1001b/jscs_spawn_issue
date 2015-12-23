import {spawn} from 'child_process';

let j = spawn('./node_modules/jscs/bin/jscs'
  ,[
      '-c'
      ,'.jscsrc'
      ,'src/*.js'
  ], {stdio: 'inherit'}
);

j.on('close', (code)=> {
  console.log('Exited with code ' + code);
  }
);
