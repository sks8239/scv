export interface InterviewData {
    [key: string]: {
        interview: Interview[];
    };
}
export interface Interview {
    interviewId : string;
    interviewContent: string;

    exampleAnswer : string;
}


export const interviewData:InterviewData = {
    'C언어': {
        interview: [
                    {
                        interviewId : "C언어 1",
                        interviewContent: 'C언어 문제 1',
                        exampleAnswer : 'C언어 문제 1 번입니다 ',
                    },
                    {
                        interviewId : "C언어 2",
                        interviewContent: 'C언어 문제 2',
                        exampleAnswer : 'C언어 문제 2 번입니다 ',
                    },
                    {
                        interviewId : "C언어 3",
                        interviewContent: 'C언어 문제 3',
                        exampleAnswer : 'C언어 문제 3 번입니다 ',
                    },
            {
                interviewId : "C언어 4",
                interviewContent: 'C언어 문제 4',
                exampleAnswer : 'C언어 문제 4 번입니다 ',
            },
            {
                interviewId : "C언어 5",
                interviewContent: 'C언어 문제 5',
                exampleAnswer : 'C언어 문제 5 번입니다 ',
            },
            {
                interviewId : "C언어 6",
                interviewContent: 'C언어 문제 6',
                exampleAnswer : 'C언어 문제 6 번입니다 ',
            },
        ]
     },
    'Node.js': {
        interview: [
            {
                interviewId : 'Node.js 1',
                interviewContent: 'Node.js 문제 1',
                exampleAnswer : 'Node.js 문제 1 번입니다 ',
            },
            {
                interviewId : 'Node.js 2',
                interviewContent: 'Node.js 문제 2',
                exampleAnswer : 'Node.js 문제 2 번입니다 ',
            },
            {
                interviewId : 'Node.js 3',
                interviewContent: 'Node.js 문제 3',
                exampleAnswer : 'Node.js 문제 3 번입니다 ',
            },
            {
                interviewId : 'Node.js 4',
                interviewContent: 'Node.js 문제 4',
                exampleAnswer : 'Node.js 문제 4 번입니다 ',
            },
            {
                interviewId : 'Node.js 5',
                interviewContent: 'Node.js 문제 5',
                exampleAnswer : 'Node.js 문제 5 번입니다 ',
            },
            {
                interviewId : 'Node.js 6',
                interviewContent: 'Node.js 문제 6',
                exampleAnswer : 'Node.js 문제 6 번입니다 ',
            },
        ]
    },
    'JavaScript': {
        interview: [
            {
                interviewId : 'JavaScript 1',
                interviewContent: 'JavaScript 문제 1',
                exampleAnswer : 'JavaScript 문제 1 번입니다 ',
            },
            {
                interviewId : 'JavaScript 2',
                interviewContent: 'JavaScript 문제 2',
                exampleAnswer : 'JavaScript 문제 2 번입니다 ',
            },
            {
                interviewId : 'JavaScript 3',
                interviewContent: 'JavaScript 문제 3',
                exampleAnswer : 'JavaScript 문제 3 번입니다 ',
            },
            {
                interviewId : 'JavaScript 4',
                interviewContent: 'JavaScript 문제 4',
                exampleAnswer : 'JavaScript 문제 4 번입니다 ',
            },
            {
                interviewId : 'JavaScript 5',
                interviewContent: 'JavaScript 문제 5',
                exampleAnswer : 'JavaScript 문제 5 번입니다 ',
            },
            {
                interviewId : 'JavaScript 6',
                interviewContent: 'JavaScript 문제 6',
                exampleAnswer : 'JavaScript 문제 6 번입니다 ',
            },
        ]
    },
    'React': {
        interview: [
            {
                interviewId : 'React 1',
                interviewContent: 'React 문제 1',
                exampleAnswer : 'React 문제 1 번입니다 ',
            },
            {
                interviewId : 'React 2',
                interviewContent: 'React 문제 2',
                exampleAnswer : 'React 문제 2 번입니다 ',
            },
            {
                interviewId : 'React 3',
                interviewContent: 'React 문제 3',
                exampleAnswer : 'React 문제 3 번입니다 ',
            },
            {
                interviewId : 'React 4',
                interviewContent: 'React 문제 4',
                exampleAnswer : 'React 문제 4 번입니다 ',
            },
            {
                interviewId : 'React 5',
                interviewContent: 'React 문제 5',
                exampleAnswer : 'React 문제 5 번입니다 ',
            },
            {
                interviewId : 'React 6',
                interviewContent: 'React 문제 6',
                exampleAnswer : 'React 문제 6 번입니다 ',
            },
        ]
    },
    'Java': {
        interview: [
            {
                interviewId : 'Java 1',
                interviewContent: 'Java 문제 1',
                exampleAnswer : 'Java 문제 1 번입니다 ',
            },
            {
                interviewId : 'Java 2',
                interviewContent: 'Java 문제 2',
                exampleAnswer : 'Java 문제 2 번입니다 ',
            },
            {
                interviewId : 'Java 3',
                interviewContent: 'Java 문제 3',
                exampleAnswer : 'Java 문제 3 번입니다 ',
            },
            {
                interviewId : 'Java 4',
                interviewContent: 'Java 문제 4',
                exampleAnswer : 'Java 문제 4 번입니다 ',
            },
            {
                interviewId : 'Java 5',
                interviewContent: 'Java 문제 5',
                exampleAnswer : 'Java 문제 5 번입니다 ',
            },
            {
                interviewId : 'Java 6',
                interviewContent: 'Java 문제 6',
                exampleAnswer : 'Java 문제 6 번입니다 ',
            },
        ]
    },
}