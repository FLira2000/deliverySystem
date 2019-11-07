import React, { Component } from "react";
import {
	StyleSheet,
	View,
	ImageBackground,
	Text
} from "react-native";
import { 
	Container, 
	Item, 
	Input, 
	DatePicker, Form, 
	Content, 
	Button,
	Icon
 } from "native-base";

export default class CadastroItemScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { chosenDate: new Date() };
		this.setDate = this.setDate.bind(this);
	}

	setDate(newDate) {
		this.setState({ chosenDate: newDate });
	}

	render() {
		return (
			<Container style={{ flex: 1 }}>
				<ImageBackground
					source={require('../../assets/background.jpg')}
					resizeMode="cover"
					style={styles.image}
				>
					<View style={styles.rect}>
						<Content style={{ margin: 25 }}>
							<Text style={{ fontWeight: '700', fontSize: 20, marginBottom: '10%' }}> 
								Entre com os dados para adicionar uma nova entrega de mercadoria: 
							</Text>
							<Form>
								<Item rounded style={styles.inputBox}>
									<Input
										placeholder='Nome do Cliente'
									/>
								</Item>
								<Item rounded style={styles.inputBox}>
									<Text style={{ fontSize: 17, alignSelf: 'center', marginLeft: 10 }}> 
										Data da Entrega: 
									</Text>
									<DatePicker
										defaultDate={new Date(2018, 4, 4)}
										minimumDate={new Date(2018, 1, 1)}
										maximumDate={new Date(2018, 12, 31)}
										locale={"pt"}
										timeZoneOffsetInMinutes={undefined}
										modalTransparent={false}
										animationType={"fade"}
										androidMode={"default"}
										placeHolderText="DD/MM/AAAA"
										textStyle={{ color: "#000000" }}
										placeHolderTextStyle={{ color: "#005500" }}
										onDateChange={this.setDate}
										disabled={false}
									/>
								</Item>
								<Item rounded style={styles.inputBox}>
									<Input
										placeholder='Endereço de Partida'
									/>
								</Item>
								<Item rounded style={styles.inputBox}>
									<Input
										placeholder='Endereço de Destino'
									/>
								</Item>
							</Form>
							<View style={{ marginBottom: 100 }}/>
							<Button success style={{ marginStart: 25, marginEnd: 25, justifyContent: 'space-evenly' }}> 
								<Icon name={'ios-checkbox'}/>
								<Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: "bold", }}>
									Adicionar
								</Text>
							</Button>
						</Content>
					</View>
				</ImageBackground>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		width: 405,
		height: 700,
		alignSelf: "center"
	},
	rect: {
		width: 350,
		height: 584,
		backgroundColor: "rgba(255,255,255,1)",
		opacity: 0.80,
		marginTop: 40,
		alignSelf: 'center',
	},
	inputBox: {
		marginTop: 10,
		alignItems: 'stretch'

	}
});
