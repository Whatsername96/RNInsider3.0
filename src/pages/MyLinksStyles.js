import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #132742;
`;

export const Title = styled.Text`
    margin-top: ${Platform.OS === 'ios' ? 35 + '%' : 20 + '%'};
    margin-left: 20px;
    font-size: 33px;
    font-weight: bold;
    color: #FFF;
`;

export const ListLinks = styled.FlatList`
    
`;

export const ContainerEmpty = styled.View`
    margin-top: 15%;
    align-items: center;
`;

export const WarningText = styled.Text`
    font-size: 17px;
    color: #FFF;
`;

export const WebViewHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px 5px 20px;
`;

export const LinkText = styled.Text`
    color: #FFF;
    font-size: 17px;
`;