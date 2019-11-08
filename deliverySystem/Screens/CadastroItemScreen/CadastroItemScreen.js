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
import TextInputMask from 'react-native-text-input-mask';

export default class CadastroItemScreen extends Component {
	state = {
		someData: [],
		newNome: null,
		newData: null,
		newPartida: null,
		newDestino: null
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
										value={this.state.newNome}
										onChangeText={(newNome)=> this.setState({ newNome: newNome })}
									/>
								</Item>
								<Item rounded style={styles.inputBox}>
									<TextInputMask
										refInput={ref => { this.input = ref }}
										value={this.state.newData}
										onChangeText={(formatted, extracted) => {
											this.setState({ newData: formatted })
										}}
										mask={"[31]/[12]/[2099]"}
										placeholder={'Data de Entrega'}
										style={{ fontSize: 15, marginLeft: 5 }}
									/>
								</Item>
								<Item rounded style={styles.inputBox}>
									<Input
										placeholder='Endereço de Partida'
										value={this.state.newPartida}
										onChangeText={(newPartida) => { this.setState({ newPartida: newPartida }) }}
									/>
								</Item>
								<Item rounded style={styles.inputBox}>
									<Input
										placeholder='Endereço de Destino'
										value={this.state.newDestino}
										onChangeText={(newDestino) => { this.setState({ newDestino: newDestino }) }}
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
