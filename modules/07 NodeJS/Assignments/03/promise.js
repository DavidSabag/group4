const promFs = require("./prom-fs");

//promFs.writeFilePromise('recipe.json','Hello');
promFs.unlinkPromise('./recipe.json');
promFs.readFileIfExists('./someliefile.json');