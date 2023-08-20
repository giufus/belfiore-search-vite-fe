import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.tsx';
import { setProvince, setCity, enableSearch } from './search-slice';
import './Search.css';

export function Search() {

    const province = useAppSelector(state => state.search[0].value);
    const city = useAppSelector(state => state.search[1].value);

    const dispatch = useAppDispatch();

    function handleChange(e: any) {
        switch (e.target.id) {
            case 'province':
                dispatch(setProvince({ value: e.target.value }));
                break;
            case 'city':
                dispatch(setCity({ value: e.target.value }));
                break;
            default:

        }
    }

    useEffect(() => {

        if (province?.length === 2 && city) {
            dispatch(enableSearch({ value: true }));
        } else {
            dispatch(enableSearch({ value: false }));
        }

    }) 
    

    return (
        <>
            <div id='search' className='search'>
                <form onChange={(e) => handleChange(e)} >
                    <label>PROVINCE: </label>
                    {/*<input type='text' id='province' maxLength={2} onChange={e => dispatch(setProvince({value: e.target.value}))} value={province} /> */}
                    <input type='text' id='province' maxLength={2} value={province} />
                    <br />

                    <label>CITY: </label>
                    <input type='text' id='city' value={city} />
                </form>
            </div>
        </>
    );
}