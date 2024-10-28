import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export type Props = {
    setCityState: (items: any) => void
}

type SelectType = {
    id: number
    city: string

}

export const Selected = ({setCityState}:  Props) => {
    let arrCity: SelectType[] = [
        {id: 1, city: 'Omsk'},
        {id: 2, city: 'Krasnodar'},
        {id: 3, city: 'Ufa'},
    ]

        const [items, setItems] = useState<any>(0);

        const handleChange = (event: SelectChangeEvent) => {
            setItems(event.target.value);
            console.log( event.target.value)
            setCityState(event.target.value)
        }



    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel  id="demo-simple-select-label">City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={items}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {arrCity.map(el =>  <MenuItem value={el.id}>{el.city}</MenuItem> )}
                </Select>
                <div></div>
            </FormControl>
        </Box>
    );
};

