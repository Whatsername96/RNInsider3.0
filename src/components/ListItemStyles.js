import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerButton = styled.TouchableOpacity`
    flex-direction: row;
    background-color: rgba(255,255,255, 0.21);
    margin: 7px 10px;
    padding: 12px;
    border-radius: 7px;
    align-items: center;
`;


export const Item = styled.Text`
    color: #FFF;
    padding-left: 10px;
    padding-right: 20px;
    font-size: 18px;
`;

export const ActionContainerRight = styled.TouchableOpacity`
    width: 15%;
    background-color: #FF5555;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    margin: 7px 10px;
`;

export const ActionContainerLeft = styled.TouchableOpacity`
    width: 15%;
    background-color: #1DDBB9;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    margin: 7px 10px;
`;