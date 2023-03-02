/*

Time complexity - the time complexity of an algorithm quantifies the amount of time taken by an algorithm to run as a function of the length of the input .
Note - that the time to run is a function of the length of the input and not the actual execution time of the machine on which the algorithm is running on. 

time complexity - the time complexity is mainly calculated by counting the number of steps to finish the execution



see one great example of time complexity - (aapko apne ek dost k ghar jana hai uske ghar jane ke liye aap taiyar huye gadi nikali , start ki , bahar nikali , drive kari , uske ghar pahuche , park ki and fir mile )




if i have one computer which i bought in 1997 and another i buy today . so first one taking a hour for execution and another take  30second for same so could i say ki second time complexity is good ? no this is not right .

if i have a code of 50 lines and another i have 100 lines so which time complexity is good , noob can say 50 but this is not right if in 50 lines of code has a loop which execute 1000 times that total line will be 50+1000.

"so jitna line of instruction use hogi utni hamari time complexity hogi"

--now ab tum kahoge ki ek program hai 10 line ka usme 2 loop 5,5 line k chale so total time complexity 20 ho gayi aur dusra program hai uski 25 bina koi loop use kare to pahla bala efficient hai kya ?  No this does'nt , matter yah karta ki loop use ki hui hai


--- time complexity depends on your input means if you take an array 
let array = [2,3,1,9,4,0] to total element or index is 6 so our input is 6



let arr = [3,5,2,9,2,3]

(hamare yaha par 6 element or input hai)

we have to find same element in arr and genrally we use 2 for loop so we don't how many time they run we take ki n time chala and 2 loop hai to yah chale (n*n= n^2) + element(6) 
but when we define we remove elment if any worst case is there so we will so only O(n^2)

*/