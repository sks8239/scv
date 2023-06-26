
export interface CommentData {
    [key: string]: {
        comment: Comment[];
    };
}
export interface Comment {
    interviewId : string;

    userId : string[];
    commentId : string[];
    comment: string[];
}

export const commentData:CommentData = {
    'C언어': {
        comment: [
            {
                interviewId : 'C언어 1',
                userId : ['유저 1', '유저 2'],
                commentId : [],
                comment:['C언어는 빨라요1', '~~라고 생각합니다1']
            },
            {
                interviewId : 'C언어 2',
                userId : ['유저 3', '유저 4'],
                commentId : [],
                comment:['C언어는 빨라요2', '~~라고 생각합니다2']
            },
            {
                interviewId : 'C언어 3',
                userId : ['유저 5', '유저 6'],
                commentId : [],
                comment:['C언어는 빨라요5', '~~라고 생각합니다6']
            },
            {
                interviewId : 'C언어 4',
                userId : ['유저 7', '유저 8'],
                commentId : [],
                comment:['C언어는 빨라요7', '~~라고 생각합니다8']
            },
            {
                interviewId : 'C언어 5',
                userId : ['유저 9', '유저 10'],
                commentId : [],
                comment:['C언어는 빨라요9', '~~라고 생각합니다10']
            },
            {
                interviewId : 'C언어 6',
                userId : ['유저 11', '유저 12'],
                commentId : [],
                comment:['C언어는 빨라요11', '~~라고 생각합니다12']
            },
        ]
    },
    'Node.js': {
        comment: [
            {
                interviewId : 'Node.js 1',
                userId : ['유저 1', '유저 2'],
                commentId : [],
                comment:['Node.js는 빨라요1', 'node~~라고 생각합니다1']
            },
            {
                interviewId : 'Node.js 2',
                userId : ['유저 3', '유저 4'],
                commentId : [],
                comment:['Node.js는 빨라요2', 'node~~라고 생각합니다2']
            },
            {
                interviewId : 'Node.js 3',
                userId : ['유저 5', '유저 6'],
                commentId : [],
                comment:['Node.js는 빨라요3', 'node~~라고 생각합니다3']
            },            {
                interviewId : 'Node.js 4',
                userId : ['유저 7', '유저 8'],
                commentId : [],
                comment:['Node.js는 빨라요 7', 'node~~라고 생각합니다8']
            },
            {
                interviewId : 'Node.js 5',
                userId : ['유저 9', '유저 10'],
                commentId : [],
                comment:['Node.js는 빨라요9', 'node~~라고 생각합니다10']
            },
            {
                interviewId : 'Node.js 6',
                userId : ['유저 11', '유저 12'],
                commentId : [],
                comment:['Node.js는 빨라요11', 'node~~라고 생각합니다12']
            },
        ]
    },
    'JavaScript': {
        comment: [
            {
                interviewId : 'JavaScript 1',
                userId : ['유저 1', '유저 2'],
                commentId : [],
                comment:['JavaScript는 빨라요 1', 'JavaScript라고 생각합니다 1']
            },
            {
                interviewId : 'JavaScript 2',
                userId : ['유저 3', '유저 4'],
                commentId : [],
                comment:['JavaScript는 빨라요 2', 'JavaScript라고 생각합니다 2']
            },
            {
                interviewId : 'JavaScript 3',
                userId : ['유저 5', '유저 6'],
                commentId : [],
                comment:['JavaScript는 빨라요 5', 'JavaScript라고 생각합니다 6']
            },            {
                interviewId : 'JavaScript 1',
                userId : ['유저 7', '유저 8'],
                commentId : [],
                comment:['JavaScript는 빨라요 7', 'JavaScript라고 생각합니다 8']
            },
            {
                interviewId : 'JavaScript 2',
                userId : ['유저 9', '유저 10'],
                commentId : [],
                comment:['JavaScript는 빨라요 9', 'JavaScript라고 생각합니다 10']
            },
            {
                interviewId : 'JavaScript 3',
                userId : ['유저 11', '유저 12'],
                commentId : [],
                comment:['JavaScript는 빨라요 11', 'JavaScript라고 생각합니다 12']
            },
        ]
    },
    'React': {
        comment: [
            {
                interviewId : 'React 1',
                userId : ['유저 1', '유저 2'],
                commentId : [],
                comment:['React는 빨라요 1', 'React라고 생각합니다 1']
            },
            {
                interviewId : 'React 2',
                userId : ['유저 3', '유저 4'],
                commentId : [],
                comment:['React는 빨라요 2', 'React라고 생각합니다 2']
            },
            {
                interviewId : 'React 3',
                userId : ['유저 5', '유저 6'],
                commentId : [],
                comment:['React는 빨라요 3', 'React라고 생각합니다 3']
            },
            {
                interviewId : 'React 4',
                userId : ['유저 7', '유저 8'],
                commentId : [],
                comment:['React는 빨라요 7', 'React라고 생각합니다 8']
            },
            {
                interviewId : 'React 5',
                userId : ['유저 9', '유저 10'],
                commentId : [],
                comment:['React는 빨라요 9', 'React라고 생각합니다 10']
            },
            {
                interviewId : 'React 6',
                userId : ['유저 11', '유저 12'],
                commentId : [],
                comment:['React는 빨라요 11', 'React라고 생각합니다 12']
            },
        ]
    },
    'Java': {
        comment: [
            {
                interviewId : 'Java 1',
                userId : ['유저 1', '유저 2'],
                commentId : [],
                comment:['Java는 빨라요 1', 'Java라고 생각합니다 1']
            },
            {
                interviewId : 'Java 2',
                userId : ['유저 3', '유저 4'],
                commentId : [],
                comment:['Java는 빨라요 2', 'Java라고 생각합니다 2']
            },
            {
                interviewId : 'Java 3',
                userId : ['유저 5', '유저 6'],
                commentId : [],
                comment:['Java는 빨라요 3', 'Java라고 생각합니다 3']
            },
            {
                interviewId : 'Java 4',
                userId : ['유저 7', '유저 8'],
                commentId : [],
                comment:['Java는 빨라요 4', 'Java라고 생각합니다 4']
            },
            {
                interviewId : 'Java 5',
                userId : ['유저 9', '유저 10'],
                commentId : [],
                comment:['Java는 빨라요 5', 'Java라고 생각합니다 5']
            },
            {
                interviewId : 'Java 6',
                userId : ['유저 11', '유저 12'],
                commentId : [],
                comment:['Java는 빨라요 6', 'Java라고 생각합니다 6']
            },
        ]
    },
};

// commentId 설정하기
Object.values(commentData).forEach((language) => {
    language.comment.forEach((comment) => {
        const interviewId = comment.interviewId;
        const userId = comment.userId;

        // interviewId와 userId를 조합한 문자열 생성
        const commentIds = userId.map((user) => `${interviewId} ${user}`);

        // commentId에 조합된 문자열 배열 설정
        comment.commentId = commentIds;
    });
});