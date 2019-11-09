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
import { connect } from 'react-redux';
import { newItemInList } from '../../store/actions';  
 
class CadastroItemScreen extends Component {
	constructor(state){
		super();
		this.redux = state;
		this.list = state.list;
		this.dispatch = state.dispatch;
	}

	state = {
		newNome: null,
		newData: null,
		newOrigem: null,
		newDestino: null,
	}
	
	getLastKey = (dataArray = this.list) => dataArray.length + 1

	addNewItemInList = (state = this.state) => {
		console.log(this.redux);
		let newItem = {
			key: this.getLastKey + 1,
			nome: state.newNome,
			data: state.newData,
			origem: state.newOrigem,
			destino: state.newDestino
		};
		this.dispatch(newItemInList(newItem));
	}

	clearAllInputBoxes = () => {
		this.setState({ newData: "" });
		this.setState({ newDestino: "" });
		this.setState({ newNome: "" });
		this.setState({ newOrigem: "" });
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

export default connect( (state) => ({list: state}))(CadastroItemScreen)