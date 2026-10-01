import { useRef } from 'react';
import Button from './Button';
import Form, {type FormHandle} from './Form';
import Input from './Input';
import { useTimersContext } from '../store/timers-context';
export default function AddTimer(){
    const form = useRef<FormHandle>(null);
    const { addTimer } = useTimersContext();
    function handleSaveTimer(data: unknown){
        const extractedData = data as {name: string, duration: string};
        console.log(extractedData);
        addTimer({name:extractedData.name , duration: +extractedData.duration });
        form.current?.clear();
    }
    return(
        <>
        <Form ref={form} onSave={handleSaveTimer} id='add_timer_form' className="flex flex-col gap-2">
            <Input type='text' label = 'Name' id='name' name= 'name'/>
            <Input type='number' label = 'Duration' id='duration' name='duration'/>
            <p>
                <Button>Add Time</Button>
            </p>
        </Form>
        </>
    )
}