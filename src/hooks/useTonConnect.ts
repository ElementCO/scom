import { Buffer } from "buffer";
import { CHAIN } from "@tonconnect/protocol";
import { Sender, SenderArguments } from "ton-core";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import {toUserFriendlyAddress} from "@tonconnect/sdk"

window.Buffer = Buffer;
export function useTonConnect(): {
  sender: Sender;
  connected: boolean;
  wallet: string | null;
  network: CHAIN | null;
} {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
console.log("wallet", wallet)

  if (wallet?.account?.address) console.log(toUserFriendlyAddress(wallet.account.address, wallet.account.chain == CHAIN.TESTNET))

  return {
    sender: {
      send: async (args: SenderArguments) => {
        tonConnectUI.sendTransaction({
          network: CHAIN.TESTNET,
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString("base64"),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        });
      },
    },
    connected: !!wallet?.account.address,
    wallet: wallet?.account.address ?? null,
    network: wallet?.account.chain ?? null,
  };
}
