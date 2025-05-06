'use strict';

// 存储候选人数组
let candidates = [];

// 1. 获取候选人数量
// 输入候选人的数量
const numCandidates = parseInt(prompt('Please enter number of candidates:'));

// 2. 获取每个候选人姓名并初始化票数:
    // 使用数组存储候选人对象，
    // 每个对象包含name和votes属性
for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({
        name: name,
        votes: 0
    });
}

// 3. 获取投票人数:
    // 使用prompt()获取候选人数量和姓名
    // 使用parseInt()将输入转为数字
const numVoters = parseInt(prompt('Enter number of voters:'));

// 4. 收集投票: 遍历每位投票人
for (let i = 0; i < numVoters; i++) {
    const vote = prompt(`Voter ${i + 1}, who do you vote for?`);

    // 查找被投票的候选人
        // 使用find()方法查找匹配的候选人
        // 忽略大小写比较候选人姓名toLowerCase()
    const votedCandidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());

    // 如果找到则增加票数
    if (votedCandidate) {
        // 找到候选人后增加其votes属性值
        votedCandidate.votes++;
    }
    // 空票不做处理
}

// 5. 按票数排序候选人(排序函数(a, b) => b.votes - a.votes实现降序)
candidates.sort((a, b) => b.votes - a.votes);

// 6. 输出结果
console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log('results:');
candidates.forEach(candidate => {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
});

// 在HTML页面显示结果
const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
    <hr>
    <p>The winner is <strong>${candidates[0].name}</strong> with ${candidates[0].votes} votes.</p>
    <hr>
    <h5>results:</h5>
    <ul>
        ${candidates.map(c => `<li>${c.name}: ${c.votes} votes</li>`).join('')}
    </ul>
`;
/*
测试示例
    输入：
        候选人数量：3
        候选人姓名：Ellie, Frank, Pamela
        投票人数：5
        投票选择：Pamela, Frank, Ellie, Pamela, Pamela
*/
