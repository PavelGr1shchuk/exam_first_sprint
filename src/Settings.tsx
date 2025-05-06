import { ChangeEvent } from "react";

type SettingsProps = {
    max: number;
    min: number;
    setMax: (max: number) => void;
    setMin: (min: number) => void;
}

export const Settings = ({ max, min, setMax, setMin }: SettingsProps) => {
    const isError = max <= min;

    const setValue = (e: ChangeEvent<HTMLInputElement>, name: string) => {
        const value = +e.target.value;
        name === 'min' ? setMin(value) : setMax(value)
        localStorage.setItem(name === 'min' ? 'start': 'end', e.target.value)
    }

    return <div className='settings'>
        <article>
            <label htmlFor='min'>Min count</label>
            <input className={isError ? 'red' : ''} id='min' type="number" value={min} onChange={e => setValue(e, 'min')} />
        </article>
        <article>
            <label htmlFor='max'>Max count</label>
            <input className={isError ? 'red' : ''} id='max' type="number" value={max} onChange={e => setValue(e, 'max')} />
        </article>
    </div>
}
