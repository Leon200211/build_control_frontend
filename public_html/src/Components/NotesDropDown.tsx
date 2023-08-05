import React from 'react';

const NotesDropDown = () => {
    const notifications = [
        {body: 'Уведомление1', id: '1'},
        {body: 'Уведомление2', id: '2'},
        {body: 'Уведомление3', id: '3'},
    ]
    return (
        <div className={"dd-notes"}>
            <div className="profile-items">
                {notifications.map(item =>
                <span id={`${item.id}-note`} className={"note-item"}>{item.body}</span>
                )}
            </div>
            <div className="AllNotes">
                <button>Все уведомления</button>
            </div>
        </div>
    );
};

export default NotesDropDown;