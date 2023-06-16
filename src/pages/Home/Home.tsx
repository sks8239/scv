import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, increaseBy } from '../../modules/counter';
import { RootState } from '../../modules/rootReducer';
import Counter from "../../components/counter";
import LazyLoadedSectionMain from '../Home/lazyloadHomeSection/LazyLoadedHomeSectionMain';
import Header from "../../components/Header";

const Home = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    // 각 액션들을 디스패치하는 함수들을 만들어줍니다
    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    };

    return (
        <>
            <Header/>
        {/*<Counter*/}
        {/*    count={count}*/}
        {/*    onIncrease={onIncrease}*/}
        {/*    onDecrease={onDecrease}*/}
        {/*    onIncreaseBy={onIncreaseBy}*/}
        {/*/>*/}
        <div>
            <LazyLoadedSectionMain />
        </div>
        </>
    );
}
export default Home;