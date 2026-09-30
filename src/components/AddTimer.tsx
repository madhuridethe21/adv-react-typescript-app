import { useRef } from 'react';
import Button from './Button';
import Form, {type FormHandle} from './Form';
import Input from './Input';
export default function AddTimer(){
    const form = useRef<FormHandle>(null);

    function handleSaveTimer(data: unknown){
        const extractedData = data as {name: string, duration: number};
        console.log(extractedData);
        form.current?.clear();
    }
    return(
        <>
        <Form ref={form} onSave={handleSaveTimer} id='add_timer_form'>
            <Input type='text' label = 'Name' id='name' />
            <Input type='number' label = 'Duration' id='duration'/>
            <p>
                <Button>Add Time</Button>
            </p>
        </Form>
        </>
    )
}