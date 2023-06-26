declare module 'react-js-pagination' {
    import * as React from 'react';

    interface PaginationProps {
        // 해당 컴포넌트의 API 문서를 기반으로 사용되는 프롭에 대한 타입 정의를 추가하세요
        activePage: number;
        itemsCountPerPage: number;
        totalItemsCount: number;
        pageRangeDisplayed?: number;
        onChange: (pageNumber: number) => void;
        itemClass : string;
        activeClass : string;
        prevPageText : string;
        nextPageText : string;
        // ... 필요한 경우 더 많은 프롭 정의를 추가하세요
    }

    class Pagination extends React.Component<PaginationProps> {}

    export = Pagination;
}
