import { useUser } from "@civic/auth-web3/react";
import  { useState } from "react";
import QRCode from "react-qr-code";

const WalletInfo = () => {
  const { user, ethereum, solana } = useUser();
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (address) => {
    navigator.clipboard.writeText(address);
    setCopied(address);
    setTimeout(() => setCopied(null), 2000); // Clear message after 2 seconds
  };

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto mt-6 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-grey-200">
  Your Wallet Addresses
</h2>


      {/* Ethereum Wallet */}
      <div className="mb-4">
        <p className="font-medium text-gray-800">Ethereum:</p>
        <p className="text-sm break-all text-gray-600">
          {ethereum?.address || "Wallet not created yet."}
        </p>
        {ethereum?.address && (
          <div className="flex items-center mt-2 space-x-4">
            <button
              onClick={() => copyToClipboard(ethereum.address)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              {copied === ethereum.address ? "Copied!" : "Copy Address"}
            </button>
            <div>
              <QRCode value={ethereum.address} size={64} />
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-200" />

      {/* Solana Wallet */}
      <div>
        <p className="font-medium text-gray-800">Solana:</p>
        <p className="text-sm break-all text-gray-600">
          {solana?.address || "Wallet not created yet."}
        </p>
        {solana?.address && (
          <div className="flex items-center mt-2 space-x-4">
            <button
              onClick={() => copyToClipboard(solana.address)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              {copied === solana.address ? "Copied!" : "Copy Address"}
            </button>
            <div>
              <QRCode value={solana.address} size={64} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletInfo;
