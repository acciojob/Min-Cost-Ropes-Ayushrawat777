function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort()
	 arr.sort()
	let sum=arr[0]
	let cost=[];
	for (let i = 1; i < arr.length; i++) {
	sum+=arr[i]
		 cost.push(sum)
	}
 
	let minCost=0;
	for (let index = 0; index < cost.length; index++) {
		minCost+=cost[index]
	}
return minCost;
}

module.exports=mincost;
