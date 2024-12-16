export type WalletAsset = {
  id: string
  name: string
  asset: {
    identifier: string
    network: string
    symbol: string
  }
  assetUsdValue: {
    value: number
  }
  assetAmount: number
}

export type WalletType = {
  id: string
  identifier: string
  name: string
  createdAt: string
  totalUsdValue: number
  assets: WalletAsset[]
}
