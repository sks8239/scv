// import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { increase, decrease, increaseBy } from '../../modules/counter';
// import { RootState } from '../../modules/rootReducer';
// import Counter from "../../components/counter";
// import LazyLoadedSectionMain from './Home';
// import Header from "../../components/Header";
// import styled from "styled-components";
//
//
//
// const HomeWrapper = styled.div`
//   position: sticky;
//   top: 0;
//   z-index: 100;
// `;
// const ReduxTestHome = () => {
//     // const count = useSelector((state: RootState) => state.counter.count);
//     // const dispatch = useDispatch();
//     //
//     // // 각 액션들을 디스패치하는 함수들을 만들어줍니다
//     // const onIncrease = () => {
//     //     dispatch(increase());
//     // };
//     //
//     // const onDecrease = () => {
//     //     dispatch(decrease());
//     // };
//     //
//     // const onIncreaseBy = (diff: number) => {
//     //     dispatch(increaseBy(diff));
//     // };
//
//     return (
//         <>
//             <HomeWrapper>
//             <Header/>
//             </HomeWrapper>
//         {/*<Counter*/}
//         {/*    count={count}*/}
//         {/*    onIncrease={onIncrease}*/}
//         {/*    onDecrease={onDecrease}*/}
//         {/*    onIncreaseBy={onIncreaseBy}*/}
//         {/*/>*/}
//         <div>
//             <LazyLoadedSectionMain />
//         </div>
//
//         </>
//     );
// }
// export default ReduxTestHome;