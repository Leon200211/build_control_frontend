import React, {useState} from 'react';
import '../assets/src/css/tabs.css'

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div className='container bloc-tabs'>
            <div className="tabs">
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? 'tab active-tab' : 'tab'}>
                    tab 1
                </div>
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? 'tab active-tab' : 'tab'}>
                    tab 2
                </div>
                <div onClick={() => toggleTab(3)} className={toggleState === 3 ? 'tab active-tab' : 'tab'}>
                    tab 3
                </div>
            </div>
            <div className="tabs-content">
                <div className={toggleState === 1 ? 'tab-content-active' : 'tab-content'}>1</div>
                <div className={toggleState === 2 ? 'tab-content-active' : 'tab-content'}>
                    <label htmlFor="profile-name">Name</label>
                    <input type="text" className='profile-name' id='profile-name' value='123'/>
                </div>
                <div className={toggleState === 3 ? 'tab-content-active' : 'tab-content'}>3</div>
            </div>
        </div>
    );
};

export default Tabs;