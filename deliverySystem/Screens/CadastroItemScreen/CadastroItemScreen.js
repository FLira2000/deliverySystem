import React, { Component } from "react";
import {
	StyleSheet,
	View,
	ImageBackground,
	Text,
	ScrollView,
	ToastAndroid
} from "react-native";
import {
	Container,
	Item,
	Input,
	Form,
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
		newOrigem: null,
		newDestino: null,
		lastKey: 0
	}

	getLastKey = (dataArray = this.state.someData) => {
		let count = 0;
		dataArray.forEach(() => {
			count++;
		})
		return count;
	}

	addNewItemInList = (state = this.state) => {
		let newArray = state.someData;
		newArray.push({
			key: state.lastKey,
			nome: state.newNome,
			data: state.newData,
			origem: state.newOrigem,
			destino: state.newDestino
		});
		this.setState({ someData: newArray });
		this.setState({ lastKey: this.getLastKey() });

	}

	clearAllInputBoxes = () => {
		this.setState({ newData: "" });
		this.setState({ newDestino: "" });
		this.setState({ newNome: "" });
		this.setState({ newOrigem: "" });
	}

	componentDidMount() {
		this.setState({ lastKey: this.getLastKey() });
	}

	render() {
		return (
			<Container style={{ flex: 1 }}>
				<ImageBackground
					source={require('../../assets/background.jpg')}
					resizeMode="cover"
					style={styles.image}
				>
					<ScrollView>
						<View style={styles.rect}>
							<Content style={{ margin: 25 }}>
								<Text style={styles.headerText}>
									Entre com os dados para adicionar uma nova entrega de mercadoria:
							</Text>
								<Form>
									<Item rounded style={styles.inputBox}>
										<Input
											placeholder='Nome do Cliente'
											value={this.state.newNome}
											onChangeText={(newNome) => this.setState({ newNome: newNome })}
										/>
									</Item>
									<Item rounded style={styles.inputBox}>
										<TextInputMask
											refInput={ref => { this.input = ref }}
											value={this.state.newData}
											onChangeText={(formatted, extracted) => {
												this.setState({ newData: formatted })
											}}
											mask={"[00]/[00]/[0000]"}
											placeholder={'Data de Entrega'}
											style={{ fontSize: 15, marginLeft: 5 }}
										/>
									</Item>
									<Item rounded style={styles.inputBox}>
										<Input
											placeholder='Endereço de Partida'
											value={this.state.newOrigem}
											onChangeText={(newOrigem) => { this.setState({ newOrigem: newOrigem }) }}
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
								<View style={{ marginBottom: 100 }} />
								<Button
									success
									style={styles.confirmationButton}
									onPress={() => {
										this.addNewItemInList();
										ToastAndroid.show('Adicionado com sucesso! ', ToastAndroid.SHORT);
										this.clearAllInputBoxes();
									}}
								>
									<Icon name={'ios-checkbox'} />
									<Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: "bold", }}>
										Adicionar
									</Text>
								</Button>
							</Content>
						</View>
					</ScrollView>
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

	},
	headerText: {
		fontWeight: '700',
		fontSize: 20,
		marginBottom: '10%'
	}
	,
	confirmationButton: {
		marginStart: 25,
		marginEnd: 25,
		justifyContent: 'center'
	}
});
