import React, { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UsersList: FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.users);
    return (
        <div>
            
        </div>
    );
};

export default UsersList;