import React from 'react';
import { View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Feather } from '@expo/vector-icons';

import { ContainerButton, Item, ActionContainer } from './ListItemStyles';

export default function ListItem({ data, selectedItem, deleteItem }) {

    function RightActions(){
        return(
            <ActionContainer onPress={() => deleteItem(data.id) }>
                <Feather
                name="trash"
                color="#FFF"
                size={24}
                />
            </ActionContainer>
        );
    }

    return (
        <View>
            <Swipeable renderRightActions={RightActions}>
                <ContainerButton activeOpacity={0.6} onPress={() => selectedItem(data)} >
                    <Feather
                        name="link"
                        color="#FFF"
                        size={24}
                    />
                    <Item>{data.long_url}</Item>
                </ContainerButton>
            </Swipeable>
        </View>
    )
}