import React from 'react';
import { CardItem, Text, Body, Card } from "native-base";

export const MyCard = (props) => {
    return (
        <Card>
            <CardItem header bordered>
                <Text>{props.item.nome}</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>
                        Origem: {props.item.origem}
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                        Destino: {props.item.destino}
                    </Text>
                </Body>
            </CardItem>
            <CardItem footer bordered>
                <Text> {props.item.data} </Text>
            </CardItem>
        </Card>
    );
}

