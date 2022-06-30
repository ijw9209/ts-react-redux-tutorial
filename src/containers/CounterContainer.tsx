import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../component/Counter';

const CounterContainer = () => {
    // 상태를 조회, 상태를 조회할때는 state의 타입을 RootState로 지정해야함
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch(); // 디스패치 함수를 가져옴

    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
    }

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    )
}

export default CounterContainer;

