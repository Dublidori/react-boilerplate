import React, { useState } from 'react';
import { ethers } from 'ethers';
import ABI from './../utils/ABI.json'; // Adjust the path as needed


const HomePage = () => {
    const [quote, setQuote] = useState('');
    const [etherValue, setEtherValue] = useState('');

    // Example contract details
    const contractAddress = '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C';
    const contractABI = ABI;

    async function handleBid() {
        // Ensure MetaMask is available
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask!');
            return;
        }

        try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Create an instance of ethers provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Create a signer
            const signer = provider.getSigner();

            // Create a contract instance
            const contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Convert the ether value to Wei
            const valueInWei = ethers.utils.parseEther(etherValue);

            // Make the transaction
            const tx = await contract.bid(quote, { value: valueInWei });
            console.log('Transaction sent:', tx.hash);

            // Wait for the transaction to be mined
            await tx.wait();
            console.log('Transaction confirmed:', tx.hash);

            // Optionally reset the state
            setQuote('');
            setEtherValue('');
        } catch (error) {
            console.error('Transaction failed:', error);
        }
    }

    return (
        <div className="container">
            <h1>Home</h1>
            <input
                type="text"
                placeholder="Your quote"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
            />
            <input
                type="text"
                placeholder="Amount in Ether"
                value={etherValue}
                onChange={(e) => setEtherValue(e.target.value)}
            />
            <button onClick={handleBid}>Bid</button>
        </div>
    );
};

export default HomePage;
