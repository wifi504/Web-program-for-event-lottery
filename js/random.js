/* 
	作者：WIFI连接超时
	Github：https://github.com/wifi504/Web-program-for-event-lottery
	请遵守 GPL-3.0 license 开源协议合理使用，违者将追究法律责任
 */

const overlay = document.getElementById('overlay');

let isRunning = false;
let intervalId = null;
let genRandom = true;

function active() {
	if (isRunning) {
		stop();
	} else {
		genRandom = true;
		run();
	}
	isRunning = !isRunning;
}

overlay.addEventListener('click', function(){
	console.log("监听到鼠标，执行函数");
	active();
});

document.onkeydown = function(event){
	if(event.key == "Enter" || event.key == " "){
		console.log("监听到按键，执行函数");
		active();
	}
}

function run() {
	console.log('执行run()');
	if (!genRandom) return;
	// 获取6个 class 为 num 的 p 标签
	const numElements = document.querySelectorAll('.num');
	const nums = new Set();

	// 生成不重复的随机数
	while (nums.size < 6) {
		const num = Math.floor(Math.random() * 999) + 1;
		nums.add(num.toString().padStart(3, '0')); // 将不足 3 位的数字用 0 补齐
	}

	// 将生成的随机数分别赋值给 6 个 p 标签
	let i = 0;
	for (const num of nums) {
		numElements[i].textContent = num;
		i++;
	}

	// 每隔 0.02 秒执行一次 run 函数
	setTimeout(run, 20);
}

function stop() {
	console.log('执行stop()');
	genRandom = false;
}