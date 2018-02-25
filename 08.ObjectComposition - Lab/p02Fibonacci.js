function fibonacci() {

   let fib1 = 0;
   let fib2 = 1;

   function nextFib() {

       nextFib = fib1 + fib2;
       [fib1, fib2] = [fib2, nextFib];
       return fib1;

   }

   return nextFib;
}