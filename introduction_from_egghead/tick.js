console.log('start');

process.nextTick(() => {
	console.log('nextTick callback');
}) 

console.log('sceduled');

process.beforeExit(() => {
	console.log('beforeExit callback');
})