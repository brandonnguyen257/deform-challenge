This App is deployed here! Feel free to play around. Make sure you are on the Goerli network.
https://deform-challenge.vercel.app/

Product Requiremnts, User Stories, High Level Architecture, and more can be found here:
https://docs.google.com/document/d/1n4nzmCl6xzmKau_beDsyB_wJGNYgDmS2rBTEnwS0W1I/edit?usp=sharing


I used this test NFT to test gating the pages. Right now, all artist pages are gated behind this NFT.
https://goerli.etherscan.io/token/0xa87d30b1d97523b8aeaa170a57126fa1c1d46196
0xa87D30B1d97523B8AeAA170A57126fa1C1d46196

Link To Diagrams
https://app.eraser.io/workspace/FGhPgkeBAG5XJLsa6dU9?origin=share


Code structure
App
  This contains all of the page routes (/artist, /create-page, etc)
Components
  This contains all the components used for the pages
Services
  Database
    This contains all the queries to the database
  Model
    This contains all the models used for the app
  Storage
    This contains all the queries for file storage
  Wallet
    This contains all the web3 related queries using Alchemy or ethers
