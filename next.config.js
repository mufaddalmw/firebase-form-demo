/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    APIKEY: 'AIzaSyCh7SAOjgM8oIJUnzk4nXx4Sv-0Gcnsd5k',
    AUTHDOMAIN: 'fir-form-demo-9e4f3.firebaseapp.com',
    DATABASEURL: 'https://fir-form-demo-9e4f3-default-rtdb.asia-southeast1.firebasedatabase.app',
    PROJECTID: 'fir-form-demo-9e4f3',
    STORAGEBUCKET: 'fir-form-demo-9e4f3.appspot.com',
    MESSAGINGSENDERID: '43946527156',
    APPID: '1:43946527156:web:20a3a4088b1f8fa22b0ae1',
  },
}

module.exports = nextConfig
