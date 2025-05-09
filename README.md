# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

## Answers

The span of this program is $\Theta(n^2 \cdot log_2{n})$ because in every iteration we are continuesly splitting the graph in half and putting those haves together to give a DAG identical to the one shown in the lecture04-parallel slides on slide 40. For each iteration of the merge however, we do $n^2$ amount of work in the worst case so this gives us that the breaking up will do $log_2{n}$ work and putting them together will do $n^2 \cdot log_2{n}$ so that gives an overall complexity of $\Theta(n^2 \cdot log_2{n})$.

## Sources

I look [Aidan Newberrys](https://github.com/COSC3020/parallel-mergesort-regtoga.git) explaination in his README to see if it was similar reasoning to mine when I saw your remark about 'doing a constant amount of work in each node of the DAG'. I realized I assumed mine happened in constant time which it doesn't for the merge so I updated the reasoning to reflect it. I still feel like I am missing something, but I feel better about my answer now.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
