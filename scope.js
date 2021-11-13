const a = 1; const b = 8; const c = 6;

(function firstFunction () {
  const b = 8; const c = 6;
  
  (function secondFunction () {
    const b = 8;

    (function thirdFunction () {
      const a = 1; const c = 6;
      
      (function fourthFunction () {
        const a = 1; const c = 6;
      })()
    })()
  })()
})()
console.log(`a: ${a}, b: ${b}, c: ${c}`);
