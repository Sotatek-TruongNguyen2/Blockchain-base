export function getWeb3ProviderLink(): string {
  const WEB3_API_URLS = [
    'https://goerli.infura.io/v3/c745d07314904c539668b553dbd6b670',
    'https://goerli.infura.io/v3/cc59d48c26f54ab58d831f545eda2bb7',
    'https://goerli.infura.io/v3/3a18fd787c2342c4915364de4955bcf5',
    'https://goerli.infura.io/v3/2bf3314408cb41fe9e6e34f706d30d22',
  ];
  const randomElement = WEB3_API_URLS[Math.floor(Math.random() * WEB3_API_URLS.length)];
  console.log('Random WEB3_API_URL: ', randomElement);
  return randomElement;
}
