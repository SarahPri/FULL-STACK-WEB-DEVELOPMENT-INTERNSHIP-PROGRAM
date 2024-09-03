// let x = 1;
// function recursion(x){
//     console.log(x);
//     if(x==5){
//         return;
//     }
//     recursion(x+1)
// }
// recursion(x);


// function fibonacci(num){
//     if(num < 2) {
//         return num;
//     }else{
//         return fibonacci(num - 1) + fibonacci(num-2);
//     }
// }

// console.log(fibonacci(9));


// function towerOfHanoi
function towerOfHanoi(n, src_rod, des_rod, aux_rod){
    if (n == 0){
        return
    }
    // towerOfHanoi(n, 'A', 'C', 'B')
    

    towerOfHanoi(n - 1, src_rod, aux_rod, des_rod);
    console.log(`Move disk ${n} from ${src_rod} --> ${des_rod}`);

    towerOfHanoi(n-1, aux_rod, des_rod, src_rod)
}

var n = 3;
towerOfHanoi(n, 'A', 'C', 'B')

middle index: mid = (start + end) // 2
id = (0 + 4) // 2 = 2.