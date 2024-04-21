import React from 'react'
import { MyButton, DecButton } from './MyButton'
import DivPanel from './DivPanel';

const MainPanel = ()=>{
    return (
        <div>
            This is main panel <MyButton></MyButton> <DecButton></DecButton>
            <DivPanel></DivPanel>
        </div>
    );
}
export default MainPanel;