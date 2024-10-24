function fibonacci(n) {
  if (n == 0) {
    return n;
  } else if (n == 1) {
    return 1;
  } else if (n >= 2) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function mergeSort(args) {
  if (args.length == 1) {
    return args;
  } else {
    let halfArray = Math.floor(args.length / 2);
    let argsFirst = args.slice(0, halfArray);
    let argsSecond = args.slice(halfArray, args.length);
    argsFirst.sort((a, b) => a - b);
    argsSecond.sort((a, b) => a - b);
    let a1 = mergeSort(argsFirst);
    let a2 = mergeSort(argsSecond);
    let a = a1.concat(a2);
    return a.sort((a, b) => a - b);
  }
}