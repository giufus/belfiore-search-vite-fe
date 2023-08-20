import { useAppSelector } from "../../app/hooks";
import { useFetchResultsQuery } from "../../app/integrations";
import s from './Results.module.css';

export function Results() {

    const province = useAppSelector(state => state.search[0].value);
    const city = useAppSelector(state => state.search[1].value);
    const enabled = useAppSelector(state => state.search[2].value);

    const { data, isError, error, isSuccess, isFetching } = useFetchResultsQuery([province, city], { skip: !enabled });


    if (isFetching) {
        return (<><div className={s.results}><h1>FETCHING...</h1></div></>)
    } else if (isError) {
        const errorMessage = `${error.status} ${error.error}`;
        return (<><div className={s.results}><h1>{errorMessage}</h1></div></>)
    } else if (enabled && isSuccess) {
        return (
        <>
            <div className={s.results}>
                
                {
                    data?.hits?.map((result: any, id: number) => (
                        
                        <div id={'result' + id} className={s.result} key={id}>
                            <pre><code>{JSON.stringify(result, null, 2)}</code></pre>
                        </div>
                    ))
                }
            </div>
        </>
    )} else {
        return (<><div className={s.results}><h1>NO RESULTS</h1></div></>)
    }
}