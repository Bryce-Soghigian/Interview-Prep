function findDuplicates(str) {
	const dupes = [];
  arra1 = str.toLowerCase().split(" ");
        var object = {};

        arra1.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        });

        for (var prop in object) {
           if(object[prop] >= 2) {
               dupes.push(prop);
           }
        }

        return dupes;

}

