import { END } from "./App";

type DisplayProps = {
    count: number;
}

export const Display = ({ count }: DisplayProps) => {
    return <p className={`display ${count === END && 'end'}`}>{count}</p>
}
