export interface LanguageData {
    [key: string]: {
        questions: Question[];
    };
}

export interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

export const languageData: LanguageData = {
    'C언어': {
        questions: [
            {
                question: 'C언어 문제 1',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'C언어 문제 2',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'C언어 문제 3',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'C언어 문제 4',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'C언어 문제 5',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'C언어 문제 6',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'C언어 문제 7',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'C언어 문제 8',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'C언어 문제 9',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'C언어 문제 10',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'C언어 문제 11',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'C언어 문제 12',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'C언어 문제 13',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'C언어 문제 14',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'C언어 문제 15',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'C언어 문제 16',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'C언어 문제 17',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },            {
                question: 'C언어 문제 18',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },            {
                question: 'C언어 문제 19',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'C언어 문제 20',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            }
            // ... add more Node.js questions
        ],
    },
    'Node.js': {
        questions: [
            {
                question: 'Node.js 문제 1',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Node.js 문제 2',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'Node.js 문제 3',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'Node.js 문제 4',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'Node.js 문제 5',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'Node.js 문제 6',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Node.js 문제 7',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'Node.js 문제 8',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Node.js 문제 9',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'Node.js 문제 10',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Node.js 문제 11',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Node.js 문제 12',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'Node.js 문제 13',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Node.js 문제 14',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Node.js 문제 15',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'Node.js 문제 16',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Node.js 문제 17',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },            {
                question: 'Node.js 문제 1',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },            {
                question: 'Node.js 문제 18',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },            {
                question: 'Node.js 문제 19',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Node.js 문제 20',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            }
            // ... add more Node.js questions
        ],
    },
    'JavaScript': {
        questions: [
            {
                question: 'JavaScript 문제 1',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'JavaScript 문제 2',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'JavaScript 문제 3',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'JavaScript 문제 4',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'JavaScript 문제 5',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'JavaScript 문제 6',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'JavaScript 문제 7',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'JavaScript 문제 8',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'JavaScript 문제 9',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기1 1 ',
            },
            {
                question: 'JavaScript 문제 10',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'JavaScript 문제 11',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'JavaScript 문제 12',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'JavaScript 문제 13',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'JavaScript 문제 14',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'JavaScript 문제 15',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'JavaScript 문제 16',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'JavaScript 문제 17',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },            {
                question: 'JavaScript 문제 1',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },            {
                question: 'JavaScript 문제 18',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },            {
                question: 'JavaScript 문제 19',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'JavaScript 문제 20',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            }
            // ... add more Node.js questions
        ],
    },
    'React': {
        questions: [
            {
                question: 'React 문제 1',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'React 문제 2',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'React 문제 3',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'React 문제 4',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'React 문제 5',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'React 문제 6',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'React 문제 7',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'React 문제 8',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'React 문제 9',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기1 1 ',
            },
            {
                question: 'React 문제 10',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'React 문제 11',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'React 문제 12',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'React 문제 13',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'React 문제 14',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'React 문제 15',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'React 문제 16',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'React 문제 17',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },          {
                question: 'React 문제 18',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },            {
                question: 'React 문제 19',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'React 문제 20',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            }
            // ... add more Node.js questions
        ],
    },
    'Java': {
        questions: [
            {
                question: 'Java 문제 1',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Java 문제 2',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'Java 문제 3',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'Java 문제 4',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'Java 문제 5',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Java 문제 6',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'Java 문제 7',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Java 문제 8',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Java 문제 9',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 4',
            },
            {
                question: 'Java 문제 10',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Java 문제 11',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'Java 문제 12',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Java 문제 13',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Java 문제 14',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },
            {
                question: 'Java 문제 15',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Java 문제 16',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },
            {
                question: 'Java 문제 17',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 3',
            },            {
                question: 'Java 문제 1',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },            {
                question: 'Java 문제 18',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            },            {
                question: 'Java 문제 19',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 2',
            },
            {
                question: 'Java 문제 20',
                choices: ['보기 1', '보기 2', '보기 3', '보기 4'],
                correctAnswer: '보기 1',
            }
            // ... add more Node.js questions
        ],
    },
    // ... add more languages and their respective questions
};
