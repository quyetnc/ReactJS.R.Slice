import { Button, Card, List } from "antd";
import styled from "styled-components";

export const UserListContainer = styled.div`
  padding: 20px;
`;

export const UserListCard = styled(Card)`
  height: calc(100vh - 100px);
  overflow: auto;
`;

export const UserListItem = styled(List.Item)`
  border-bottom: 1px solid #f0f0f0;
  padding: 16px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const SelectButton = styled(Button)`
  background-color: #1890ff;
  color: #fff;
  border-color: #1890ff;

  &:hover,
  &:focus {
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
`;

export const ProfileCard = styled(Card)`
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  padding: 16px;
  margin-top: 16px;
`;

export const NoUserSelectedMessage = styled.p`
  margin-top: 16px;
`;