type DisplayProps = {
    count: number;
    end: number;
}

export const Display = ({ count, end }: DisplayProps) => {
    return <p className={`display ${count === end && 'end'}`}>{count}</p>
}
