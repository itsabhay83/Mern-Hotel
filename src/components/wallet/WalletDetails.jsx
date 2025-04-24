import  { useEffect, useState } from 'react';
import { useUser } from '@civic/auth-web3/react';
import { useBalance } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { Connection, PublicKey } from '@solana/web3.js'; // Solana web3

const WalletDetails = () => {
  const { user, ethereum } = useUser();
  const { data: balanceData, isLoading: balanceLoading } = useBalance({
    address: ethereum?.address,
    chainId: mainnet.id,
    enabled: !!ethereum?.address,
  });

  // Solana wallet state
  const [solanaAddress, setSolanaAddress] = useState(null);
  const [solanaBalance, setSolanaBalance] = useState(null);
  const [loadingSolana, setLoadingSolana] = useState(true);

  useEffect(() => {
    const getSolanaBalance = async () => {
      if (window.solana?.publicKey) {
        const solanaConnection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
        const publicKey = new PublicKey(window.solana.publicKey.toString());
        const balance = await solanaConnection.getBalance(publicKey);
        setSolanaBalance(balance / 10 ** 9);
        setSolanaAddress(publicKey.toString());
      }
      setLoadingSolana(false);
    };

    getSolanaBalance();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Wallet Details</h2>

      {/* Ethereum Wallet Info */}
      {user && ethereum?.address ? (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="font-semibold">Ethereum Wallet Address:</p>
          <p className="text-gray-700">{ethereum.address}</p>
          <p className="font-semibold mt-2">Ethereum Balance:</p>
          <p className="text-gray-700">
            {balanceLoading ? 'Loading...' : `${(BigInt(balanceData?.value || 0n) / 10n ** 18n).toString()} ETH`}
          </p>
        </div>
      ) : (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-gray-700">Please connect your Ethereum wallet to see the details.</p>
        </div>
      )}

      {/* Solana Wallet Info */}
      {solanaAddress ? (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="font-semibold">Solana Wallet Address:</p>
          <p className="text-gray-700">{solanaAddress}</p>
          <p className="font-semibold mt-2">Solana Balance:</p>
          <p className="text-gray-700">
            {loadingSolana ? 'Loading...' : `${solanaBalance} SOL`}
          </p>
        </div>
      ) : (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-gray-700">Please connect your Solana wallet to see the details.</p>
          <button
            onClick={async () => {
              if (window.solana) {
                try {
                  await window.solana.connect(); 
                } catch (err) {
                  console.error('Failed to connect to Solana wallet', err);
                }
              }
            }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Connect Solana Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletDetails;
