import './App.css';
import React, {useState} from 'react';
import {ethers} from 'ethers';


function App() {
  
  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {                                // metamask eklenti kontrolü
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);       
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);                    // account changing 
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {              //balance get
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		
		window.location.reload();
	}


	
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
  return (
    <div className="App">
        <h4>{'Connection to Metamask'}</h4> 
        <button onClick={connectWalletHandler}>{connButtonText}</button>
        <div className='accountDisplay'>
            <h3> Address: {defaultAccount}</h3>
        </div>
        <div className='balanceDisplay'>
            <h3> Balance: {userBalance}</h3>
        </div>
        {errorMessage}
    </div>
  );
}

export default App;
