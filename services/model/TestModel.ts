//create a TestModel type that takes in a string wallet_address, song_link string, presale_code string, token_contract string
export type TestModel = {
  wallet_address: string | undefined | null
  page_id?: number
  created_at?: Date
  song_link: string
  presale_code: string
  token_contract: string
}
