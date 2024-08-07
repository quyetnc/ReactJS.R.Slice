import React, { useEffect, useState } from 'react';
import { List, Card, Avatar, Button, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CurrentUser, userActions } from 'features/user/userSlice';
import { NoUserSelectedMessage, ProfileCard, SelectButton, UserListCard, UserListContainer, UserListItem } from "./ListUsersStyled"
import { useAppDispatch, useAppSelector } from 'config/hooks';

const UserList = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.user.getListUserResponse);

    useEffect(() => {
        dispatch(userActions.getListUserRequest());
    }, [dispatch]);
    const [selectedUser, setSelectedUser] = useState<CurrentUser | null>(null);

    const selectUser = (userId: string) => {
        const user = users.find(user => user.id === userId);
        setSelectedUser(user || null);
    };

    const renderUserProfile = () => {
        if (selectedUser) {
            return (
                <ProfileCard
                    title={`${selectedUser.name}'s Profile`}
                >
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    <p><strong>Phone:</strong> {selectedUser.phone}</p>
                    <p><strong>Department:</strong> {selectedUser.department}</p>
                    <p><strong>Country:</strong> {selectedUser.country}</p>
                    <p><strong>City:</strong> {selectedUser.city}</p>
                    <p><strong>Address:</strong> {selectedUser.address}</p>
                    <p><strong>Birthday:</strong> {selectedUser.birthday}</p>
                    <p><strong>Organization:</strong> {selectedUser.organization}</p>
                    <p><strong>Zip Code:</strong> {selectedUser.zip_code}</p>
                </ProfileCard>
            );
        } else {
            return (
                <NoUserSelectedMessage>Please select a user to view their profile.</NoUserSelectedMessage>
            );
        }
    };

    return (
        <UserListContainer>
            <Row gutter={16}>
                <Col span={12}>
                    <UserListCard title="User List">
                        <List
                            itemLayout="horizontal"
                            dataSource={users}
                            renderItem={user => (
                                <UserListItem
                                    actions={[<SelectButton onClick={() => selectUser(user.id)}>Select</SelectButton>]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar icon={<UserOutlined />} />}
                                        title={<a href="#">{user.name}</a>}
                                        description={`Role: ${user.role}, Department: ${user.department}`}
                                    />
                                </UserListItem>
                            )}
                        />
                    </UserListCard>
                </Col>
                <Col span={12}>
                    {renderUserProfile()}
                </Col>
            </Row>
        </UserListContainer>
    );
};

export default UserList;
